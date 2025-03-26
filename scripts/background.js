// Change between bg-1, bg-2 and bg-3 every 5 seconds
let count = 1;
setInterval(() => {
  count++;
  let toRemove = count - 1;
  if (count === 1) {
    toRemove = 3;
  }
  document.body.classList.add(`bg-${count}`);
  document.body.classList.remove(`bg-${toRemove}`);
  if (count === 3) {
    count = 0;
  }
}, 5000);