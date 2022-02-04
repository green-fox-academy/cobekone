// The current position of mouse
let x = 0;
let y = 0;

// Query the element
export const ele = document.getElementById(".moon");

// Handle the mousedown event
// that's triggered when user drags the element
export const mouseDownHandler = function (event: any) {
  // Get the current mouse position
  x = event.clientX;
  y = event.clientY;

  // Attach the listeners to `document`
  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);
};

const mouseMoveHandler = function (event: any) {
  // How far the mouse has been moved
  const dx = event.clientX - x;
  const dy = event.clientY - y;

  // Set the position of element
  ele.style.top = `${ele.offsetTop + dy}px`;
  ele.style.left = `${ele.offsetLeft + dx}px`;

  // Reassign the position of mouse
  x = event.clientX;
  y = event.clientY;
};

const mouseUpHandler = function () {
  // Remove the handlers of `mousemove` and `mouseup`
  document.removeEventListener("mousemove", mouseMoveHandler);
  document.removeEventListener("mouseup", mouseUpHandler);
};

ele.addEventListener("mousedown", mouseDownHandler);
