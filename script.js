// =============================
// 曼曼 & 小胖
// yao yao mart
// =============================

// ↓↓↓ 以后只需要把这里改成你的相册链接 ↓↓↓
const albumUrl = "https://share.weiyun.com/tpcHNjoM";
// 例如：
// const albumUrl = "https://你的相册链接";

// 打开相册
const button = document.getElementById("albumButton");

button.addEventListener("click", function (e) {

    e.preventDefault();

    if (albumUrl === "#") {

        alert("相册暂未开放 ☺");

        return;

    }

    window.open(albumUrl, "_blank");

});


// ========= 长按彩蛋 =========

const surprise = document.getElementById("surprise");

let timer = null;

button.addEventListener("mousedown", () => {

    timer = setTimeout(() => {

        surprise.classList.add("show");

    },3000);

});

button.addEventListener("mouseup", () => {

    clearTimeout(timer);

});

button.addEventListener("mouseleave", () => {

    clearTimeout(timer);

});


// 手机端

button.addEventListener("touchstart", () => {

    timer = setTimeout(() => {

        surprise.classList.add("show");

    },3000);

});

button.addEventListener("touchend", () => {

    clearTimeout(timer);

});


// 点击关闭

surprise.addEventListener("click", () => {

    surprise.classList.remove("show");

});
