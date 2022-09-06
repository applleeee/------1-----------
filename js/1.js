const progress = document.querySelectorAll("progress");
const progress1 = progress[0];
const progress2 = progress[1];
const progress3 = progress[2];
const progress4 = progress[3];
const progress5 = progress[4];

const animate1 = () => {
  const origin_value = progress1.value;
  progress1.value = 0;
  const interval = setInterval(() => {
    if (origin_value > progress1.value) {
      progress1.value += 1;
    } else {
      clearInterval(interval);
    }
    console.log(progress1.value);
  }, 20);
};

const animate2 = () => {
  const origin_value = progress2.value;
  progress2.value = 0;
  const interval = setInterval(() => {
    if (origin_value > progress2.value) {
      progress2.value += 1;
    } else {
      clearInterval(interval);
    }
    console.log(progress2.value);
  }, 20);
};

const animate3 = () => {
  const origin_value = progress3.value;
  progress3.value = 0;
  const interval = setInterval(() => {
    if (origin_value > progress3.value) {
      progress3.value += 1;
    } else {
      clearInterval(interval);
    }
    console.log(progress3.value);
  }, 20);
};

const animate4 = () => {
  const origin_value = progress4.value;
  progress4.value = 0;
  const interval = setInterval(() => {
    if (origin_value > progress4.value) {
      progress4.value += 1;
    } else {
      clearInterval(interval);
    }
    console.log(progress4.value);
  }, 20);
};

const animate5 = () => {
  const origin_value = progress5.value;
  progress5.value = 0;
  const interval = setInterval(() => {
    if (origin_value > progress5.value) {
      progress5.value += 1;
    } else {
      clearInterval(interval);
    }
    console.log(progress5.value);
  }, 20);
};

progress1.addEventListener("mouseover", animate1);
progress2.addEventListener("mouseover", animate2);
progress3.addEventListener("mouseover", animate3);
progress4.addEventListener("mouseover", animate4);
progress5.addEventListener("mouseover", animate5);
