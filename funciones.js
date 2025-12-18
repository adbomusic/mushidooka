document.addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    if (music) {
        music.volume = 0.3;
        music.play();
    }
}, { once: true });
