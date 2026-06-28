console.log("Script読み込み成功");
const world = document.querySelector(".world");
const stages = document.querySelectorAll(".stage");

let current = 0;
let moving = false;

function moveStage(index) {

    current = Math.max(
        0,
        Math.min(index, stages.length - 1)
    );

    world.scrollTo({
        left: current * window.innerWidth,
        behavior: "smooth"
    });
}

// マウスホイール
document.addEventListener("wheel", function (e) {

    e.preventDefault();

    if (moving) return;

    moving = true;

    if (e.deltaY > 0) {
        moveStage(current + 1);
    } else {
        moveStage(current - 1);
    }

    setTimeout(function () {
        moving = false;
    }, 700);

}, { passive: false });

// ← →
document.addEventListener("keydown", function (e) {

    if (e.key === "ArrowRight") {
        moveStage(current + 1);
    }

    if (e.key === "ArrowLeft") {
        moveStage(current - 1);
    }

});

// スクロール位置から現在ページを取得
world.addEventListener("scroll", function () {

    current = Math.round(
        world.scrollLeft / window.innerWidth
    );

});

document.addEventListener("wheel", function (e) {
    console.log(e.deltaY);
});