const progress = document.querySelectorAll("progress");

const animate = (event) => {
  const origin_value = event.path[0].value;
  event.path[0].value = 0;
  const interval = setInterval(() => {
    if (origin_value > event.path[0].value) {
      event.path[0].value += 1;
    } else {
      clearInterval(interval);
    }
  }, 20);
};

progress.forEach((i) => {
  i.addEventListener("mouseover", animate);
});
