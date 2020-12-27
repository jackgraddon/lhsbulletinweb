const backgrounds = document.querySelectorAll("#background");
const banner = document.querySelectorAll('#banner');
const range = 20;

const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1);

let timeout;
document.addEventListener('mousemove', ({
    x,
    y
}) => {
    if (timeout) {
        window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(() => {
        const yValue = calcValue(y, window.innerHeight);
        const xValue = calcValue(x, window.innerWidth);

        [].forEach.call(banner, (banner) => {
            banner.style.transform = `translateX(${-xValue * 1.2}px) translateY(${-yValue * 1.2}px)`;
        });

        [].forEach.call(backgrounds, (background) => {
            background.style.backgroundPosition = `${-xValue * .45}px ${-yValue * .45}px`;
        });
    });
}, false);