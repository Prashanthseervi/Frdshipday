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

    if(playerX < 4450){
        alert("🏃 Run to the end first!");
        return;
    }

    gift.classList.add("open");

    // Fireworks
    for(let i=0;i<40;i++){

        let fire=document.createElement("div");

        fire.className="firework";

        fire.innerHTML=["🎆","✨","🎉","💖","🎊"][Math.floor(Math.random()*5)];

        fire.style.left=Math.random()*100+"vw";

        fire.style.top=Math.random()*80+"vh";

        document.body.appendChild(fire);

        setTimeout(()=>{
            fire.remove();
        },1200);

    }

    setTimeout(()=>{

        videoBox.style.display="flex";

        video.play();

    },1200);

}

// Close after video
video.onended=()=>{

videoBox.innerHTML=`

<div style="

display:flex;

justify-content:center;

align-items:center;

flex-direction:column;

height:100%;

color:white;

text-align:center;

padding:30px;

">

<h1 style="font-size:70px;">❤️ Happy Friendship Day ❤️</h1>

<h2>Dear Mithli</h2>

<p style="font-size:28px;max-width:800px;line-height:1.8;">

Thank you for always being there,
for every laugh,
every memory,
and every moment.

You are one of the most precious people in our lives.

We hope this little surprise made you smile.

</p>

<h2 style="margin-top:40px;">

With Lots of Love ❤️

<br><br>

Prashanth & Riddhi

</h2>

</div>

`;

}
