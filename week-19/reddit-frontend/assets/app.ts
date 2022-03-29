const BASE_URL = "http://localhost:3000";

let postBlock = document.querySelector(".single-post-container") as HTMLElement;
let postsContainer = document.querySelector(".posts-container") as HTMLElement;
let submitANewPostButton = document.querySelector(
  ".submit-post"
) as HTMLElement;

function getPosts() {
  return fetch(`${BASE_URL}/posts`)
    .then((resp) => resp.json())
    .then((posts) => posts)
    .catch((err) => console.log("Err", err));
}

function postElementGenerator() {
  const div = document.createElement("div");
  div.innerHTML = postBlock.outerHTML;
  return div;
}

function howManyHoursAgo(timestamp: string): number {
  let todayDate = new Date();
  let currentDate = new Date(timestamp);
  let hourPassed = Math.floor(
    (todayDate.getTime() - currentDate.getTime()) / 3600000
  );
  return hourPassed;
}

function generatePagePosts() {
  getPosts().then((posts) => {
    for (let i = 0; i < posts.posts.length - 1; i++) {
      postsContainer.appendChild(postElementGenerator());
    }
    let singlePosts = document.querySelectorAll(".single-post-container");
    let counterElements = document.querySelectorAll(".counter-number");
    let titleElements = document.querySelectorAll(".post-title");
    let upArrowElements = document.querySelectorAll(".up-arrow");
    let downArrowElements = document.querySelectorAll(".down-arrow");
    let modifyButtonElements = document.querySelectorAll(".modify-button");
    let removeButtonElements = document.querySelectorAll(".remove-button");
    let timeLabelElements = document.querySelectorAll(".time-label");
    for (let i = 0; i < singlePosts.length; i++) {
      (singlePosts[i] as HTMLElement).style.display = "flex";
      (counterElements[i] as HTMLElement).innerText = posts.posts[i].score;
      (titleElements[i] as HTMLElement).innerText = posts.posts[i].title;
      if (
        posts.posts[i].url.substring(0, 7) == "http://" ||
        posts.posts[i].url.substring(0, 8) == "https://"
      ) {
        (titleElements[i] as HTMLElement).setAttribute(
          "href",
          `${posts.posts[i].url}`
        );
      } else {
        (titleElements[i] as HTMLElement).setAttribute(
          "href",
          `http://${posts.posts[i].url}`
        );
      }
      (upArrowElements[i] as HTMLElement).id = `a${posts.posts[i].id}`;
      (downArrowElements[i] as HTMLElement).id = `a${posts.posts[i].id}`;
      (modifyButtonElements[i] as HTMLElement).id = `a${posts.posts[i].id}`;
      (removeButtonElements[i] as HTMLElement).id = `a${posts.posts[i].id}`;
      (singlePosts[i] as HTMLElement).id = `a${posts.posts[i].id}`;
      (counterElements[i] as HTMLElement).id = `a${posts.posts[i].id}`;
      (timeLabelElements[i] as HTMLElement).innerText = `${howManyHoursAgo(
        posts.posts[i].timestamp
      )}`;
    }
  });
}

generatePagePosts();

let clickedId: string;
let clickedClass: string = "";

function voteModifier(event: any) {
  if (event.srcElement.id) {
    clickedId = `${event.srcElement.id}`;
  } else {
    clickedId = `${event.path[1].id}`;
  }
  if (event.srcElement.id) {
    clickedClass = event.srcElement.classList[0];
  } else {
    clickedClass = event.path[1].classList[0];
  }

  if (clickedClass == "up-arrow") {
    voteUp();
  } else if (clickedClass == "down-arrow") {
    voteDown();
  } else if (clickedClass == "remove-button") {
    removePost();
  }
}

function voteUp(): void {
  fetch(`${BASE_URL}/posts/${clickedId.substring(1)}/upvote`, {
    method: "PUT",
  })
    .then((resp) => resp.json())
    .then((resp) => {
      let scoreToUpdate = document.querySelector(
        `#${clickedId}.counter-number`
      ) as HTMLElement;
      scoreToUpdate.innerText = `${resp.upvotedPost[0].score}`;
    });
}
function voteDown(): void {
  fetch(`${BASE_URL}/posts/${clickedId.substring(1)}/downvote`, {
    method: "PUT",
  })
    .then((resp) => resp.json())
    .then((resp) => {
      let scoreToUpdate = document.querySelector(
        `#${clickedId}.counter-number`
      ) as HTMLElement;
      scoreToUpdate.innerText = `${resp.upvotedPost[0].score}`;
    });
}

function removePost(): void {
  fetch(`${BASE_URL}/posts/${clickedId.substring(1)}`, {
    method: "DELETE",
  })
    .then((resp) => resp.json())
    .then(() => {
      let postToDelete = document.querySelector(
        `#${clickedId}.single-post-container`
      ) as HTMLElement;
      postToDelete.innerHTML = "";
    });
}

let pageHeader = document.querySelector("header") as HTMLElement;
let pageWrapper = document.querySelector(".page-wrapper") as HTMLElement;
let postWriter = document.querySelector(".post-writer") as HTMLElement;
let body = document.querySelector("body") as HTMLElement;
function openPostWriter(): void {
  pageHeader.style.filter = "blur(5px)";
  pageWrapper.style.filter = "blur(5px)";
  pageWrapper.style.pointerEvents = "none";
  postWriter.style.visibility = "visible";

  setTimeout(() => {
    body.addEventListener("click", returnFromSubmit);
  }, 50);
}

function returnFromSubmit(event: any) {
  if (
    postWriter.style.visibility == "visible" &&
    (event.path[0].localName == "body" || event.path[0].localName == "header")
  ) {
    pageHeader.style.filter = "none";
    pageWrapper.style.filter = "none";
    pageWrapper.style.pointerEvents = "auto";
    postWriter.style.visibility = "hidden";
    body.removeEventListener("click", returnFromSubmit);
  }
}

postsContainer.addEventListener("click", voteModifier);
submitANewPostButton.addEventListener("click", openPostWriter);

(document.querySelector("form") as HTMLElement).addEventListener(
  "submit",
  (e: any) => {
    const data = Object.fromEntries(new FormData(e.target).entries());

    fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
);
