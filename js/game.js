const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const img = document.body.querySelector("img");

canvas.width = window.innerWidth - 500;
canvas.height = window.innerHeight - 500;

// 바닥
const floor = () => {
  ctx.strokeStyle = "black";
  ctx.lineWidth = "5;";

  ctx.beginPath();
  ctx.moveTo(0, canvas.height - 100);
  ctx.lineTo(canvas.width, canvas.height - 100);
  ctx.stroke();
};

// 내 캐릭터
let dino = {
  x: 50,
  y: canvas.height - 150,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.width, this.height); //사각형 생성
  },
};

// 장애물
class Cactus {
  constructor() {
    // 클래스에서 하나만 존재
    this.x = canvas.width;
    this.y = canvas.height - 150;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height); //사각형 생성
  }
}

let timer = 0;
let everycactus = [];
let jumpTimer = 0;
let animation;
let score = 0;

function everyFrame() {
  animation = requestAnimationFrame(everyFrame); //매 프레임마다 동작
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height); //사각형 삭제

  let 

  if (timer % 200 === 0) {
    // 200프레임에 한번씩 장애물 생성
    let cactus = new Cactus();
    everycactus.push(cactus);
  }

  everycactus.forEach((a, i, array) => {
    // 완전히 지나간 장애물은 배열에서 삭제
    if (a.x < -50) {
      array.splice(i, 1);
    }
    a.x -= 2; // 장애물 속도
    if (a.x > 0) {
      isCollapsed(dino, a);
    }
    a.draw();
  });

  // 스페이스(점프)를 누르면 위로 이동
  if (isJump == false && dino.y < canvas.height - 150) {
    dino.y += 3;
  }

  if (jumpTimer > 50) {
    isJump = false;
    jumpTimer = 0;
  }
  if (isJump == true) {
    dino.y -= 3;
    jumpTimer++;
  }

  floor();
  dino.draw();

  // 점수
  score += 1;
  ctx.style = "black";
  ctx.font = "normal bold 20px Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(`점수: ${score}`, canvas.width - 60, 50);
}

// 충돌 확인
function isCollapsed(dino, cactus) {
  let xGap = cactus.x - (dino.x + dino.width);
  let yGap = cactus.y - (dino.y + dino.height);
  if (xGap < 0 && yGap < 0) {
    cancelAnimationFrame(animation);
    img.style.display = "block";
  }
}

let isJump = false;

everyFrame();
document.addEventListener("keydown", function (e) {
  if (e.code === "Space" && dino.y === canvas.height - 150) {
    isJump = true;
  }
});
