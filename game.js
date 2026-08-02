// Start Button

const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const game = document.getElementById("game");

const player = document.getElementById("player");
const world = document.getElementById("world");

const hearts = document.querySelectorAll(".heart");
const scoreText = document.getElementById("score");

const gift = document.getElementById("gift");

const videoBox = document.getElementById("videoBox");
const video = document.getElementById("surpriseVideo");

let playerX = 100;
let score = 0;

startBtn.onclick = () => {
    intro.style.display = "none";
    game.style.display = "block";
};

// Keyboard Controls

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {

        playerX += 20;

    }

    if (e.key === "ArrowLeft") {

        playerX -= 20;

    }

    if (playerX < 0) playerX = 0;

    if (playerX > 4600) playerX = 4600;

    player.style.left = playerX + "px";

    window.scrollTo(playerX - 250, 0);

    checkHearts();

    checkGift();

});

// Mobile Controls

document.getElementById("right").onclick = () => {

    playerX += 20;

    player.style.left = playerX + "px";

    window.scrollTo(playerX - 250, 0);

    checkHearts();

    checkGift();

};

document.getElementById("left").onclick = () => {

    playerX -= 20;

    if (playerX < 0) playerX = 0;

    player.style.left = playerX + "px";

    window.scrollTo(playerX - 250, 0);

    checkHearts();

    checkGift();

};

// Heart Collection

function checkHearts() {

    hearts.forEach((heart) => {

        if (!heart.dataset.done) {

            let x = parseInt(heart.style.left);

            if (Math.abs(playerX - x) < 50) {

                heart.style.display = "none";

                heart.dataset.done = true;

                score++;

                scoreText.innerText = score;

            }

        }

    });

}

// Gift

function checkGift() {

    if (playerX > 4450) {

        gift.style.transform = "scale(1.2)";

    }

}

gift.onclick = () => {

    if (playerX > 4450) {

        videoBox.style.display = "flex";

        video.play();

    } else {

        alert("Reach the gift first! ❤️");

    }

};

// Close after video

video.onended = () => {

    alert("🎉 Happy Friendship Day Mithli ❤️\n\nLove,\nPrashanth & Riddhi");

};
