// Loader Simulation
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// Fireworks Effect on Form Submit
function fireworksEffect() {
    let fireworks = document.getElementById('fireworks');
    fireworks.classList.add('active');
    setTimeout(() => fireworks.classList.remove('active'), 3000);
}

// Canvas Art (Random Drawing)
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener('mousemove', (e) => {
    ctx.beginPath();
    ctx.arc(e.x, e.y, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fill();
});

