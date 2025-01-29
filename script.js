const box = document.getElementById('box');
const boxImg = document.getElementById('boxImg');
const surprise = document.getElementById('surprise');
const giftImg = document.getElementById('giftImg');
const message = document.getElementById('message');

// Valentine's Gifts (Images & Messages)
const gifts = [
    { img: "images/heart.png", text: "You’re my special Valentine! 💖" },
    { img: "images/chocolate.png", text: "A sweet treat for a sweet person! 🍫" },
    { img: "images/rose.png", text: "A rose for someone beautiful! 🌹" },
    { img: "images/teddy.png", text: "A hug from this little teddy! 🧸" }
];

box.addEventListener('click', function() {
    let randomGift = gifts[Math.floor(Math.random() * gifts.length)];

    // Animate box opening
    gsap.to("#boxImg", { y: -80, opacity: 0, duration: 0.8 });

    setTimeout(() => {
        surprise.classList.remove('hidden');
        giftImg.src = randomGift.img;
        message.textContent = randomGift.text;
        gsap.from(".surprise", { opacity: 0, scale: 0, duration: 0.8 });
    }, 800);
});
