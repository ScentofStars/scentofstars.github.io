// Social links rendered in one place and injected into every page.
// Add/remove/reorder here and all pages update.
const socials = [
    {
        href: "https://soundcloud.com/shiirou2412",
        img: "static/img/soundcloud-logo-icon.svg"
    },
    {
        href: "https://open.spotify.com/user/fy8trky0qve2uk7xj1uq6nk48?si=a3076b3f46fe4a77",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
    },
    {
        href: "https://steamcommunity.com/id/shiirou2412/",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg"
    }
];

function renderSocials() {
    const container = document.querySelector(".link-container");
    if (!container) return;
    container.innerHTML = socials.map(link => `
        <div class="link-wrapper">
            <a href="${link.href}" target="_blank" rel="noopener">
                <img src="${link.img}">
            </a>
        </div>`).join("");
}

renderSocials();

const audio = document.getElementById('background-music');

window.addEventListener('load', () => {
    const audioFiles = {
        "index.html": "static/mp3/kamiina.mp3",
        "2.html": "static/mp3/Lamp - For Lovers.mp3",
        "3.html": "static/mp3/Kendrick Lamar - N95.mp3",
        "4.html": "static/mp3/Joji & BENEE - Afterthought.mp3",
    };

    const page = window.location.pathname.split("/").pop() || "index.html";
    if (audioFiles[page]) {
        audio.src = audioFiles[page];
    }

    audio.volume = 0.7;
    audio.load();
    audio.play();
});


    document.addEventListener("mousemove", function (event) {
        const right = document.querySelector(".right-transition");
        const left = document.querySelector(".left-transition");

        if (right) {
            right.style.opacity = event.clientX > window.innerWidth - 120 ? "1" : "0";
        }
        if (left) {
            left.style.opacity = event.clientX < 120 ? "1" : "0";
        }
    });

    document.querySelectorAll(".left-transition, .right-transition").forEach(btn => {
        btn.addEventListener("focus", () => { btn.style.opacity = "1"; });
        btn.addEventListener("blur", () => { btn.style.opacity = "0"; });
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") {
            const right = document.querySelector(".right-transition");
            if (right) right.click();
        } else if (e.key === "ArrowLeft") {
            const left = document.querySelector(".left-transition");
            if (left) left.click();
        }
    });