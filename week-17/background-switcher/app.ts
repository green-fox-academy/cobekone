function cacheBuster() {
  return Math.floor(Math.random() * 10000000000000);
}

(
  document.querySelector("body") as HTMLElement
).style.backgroundImage = `url("https://loremflickr.com/g/1280/800/hungary/?${cacheBuster()}")`;

setInterval(() => {
  //  location.reload();   ez lenne az egyik megoldás
  (
    document.querySelector("body") as HTMLElement
  ).style.backgroundImage = `url("https://loremflickr.com/g/1280/800/hungary/?${cacheBuster()}")`;
}, 5000);
