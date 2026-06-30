// ===============================
// Smooth Scroll
// ===============================

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    document.querySelector(".story").scrollIntoView({
        behavior: "smooth"
    });
});

// ===============================
// Love Timer
// Meeting Date: 05 June 2026
// ===============================

const startDate = new Date("June 05, 2026 00:00:00");

function updateTimer() {

    const now = new Date();

    let diff = now - startDate;

    // If the date hasn't arrived yet
    if (diff < 0) {
        diff = 0;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (diff % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

updateTimer();
setInterval(updateTimer, 1000);

// ===============================
// NO Button Runs Away
// ===============================

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {

    const maxX = window.innerWidth - noBtn.offsetWidth - 30;
    const maxY = window.innerHeight - noBtn.offsetHeight - 30;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// ===============================
// YES Button
// ===============================

const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", () => {

    document.getElementById("popup").classList.add("active");

    // Confetti
    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

    // Hearts every second
    startHeartRain();

});

// ===============================
// Heart Rain
// ===============================

function startHeartRain() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = "-30px";
        heart.style.fontSize =
            (20 + Math.random() * 30) + "px";

        heart.style.zIndex = "999";

        heart.style.transition = "5s linear";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.top = window.innerHeight + "px";

        }, 50);

        setTimeout(() => {

            heart.remove();

        }, 5000);

    }, 300);

}

// ===============================
// Floating Sparkles
// ===============================

setInterval(() => {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";

    star.style.left = Math.random() * window.innerWidth + "px";

    star.style.top = Math.random() * window.innerHeight + "px";

    star.style.fontSize = (10 + Math.random() * 15) + "px";

    star.style.opacity = "0";

    star.style.transition = "2s";

    document.body.appendChild(star);

    setTimeout(() => {
        star.style.opacity = "1";
    }, 100);

    setTimeout(() => {
        star.style.opacity = "0";
    }, 1500);

    setTimeout(() => {
        star.remove();
    }, 2500);

}, 500);

// ===============================
// Greeting in Console ❤️
// ===============================

console.log(`
❤️ ===================================== ❤️

Kanhaiya ❤️ Sudipa

Our story started on
05 June 2026

One RAC Ticket.
One Side Lower.
One Beautiful Journey.

Forever Begins Here ❤️

===========================================
`);