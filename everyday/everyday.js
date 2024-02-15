document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box, index) => {
        box.addEventListener('click', function () {
            showBox(index + 1);
        });
    });

    function showBox(boxNumber) {
        const box = document.querySelector(`.box${boxNumber}`);
        const newBox = document.createElement('div');
        newBox.classList.add('new-box');
        newBox.style.backgroundColor = box.style.backgroundColor;

        document.body.appendChild(newBox);

        const startPos = -newBox.offsetHeight;
        const endPos = 50;
        const colorChangePosition = 20;

        newBox.style.top = `${startPos}px`;
        newBox.style.left = `${(window.innerWidth - newBox.offsetWidth) / 2}px`;

        setTimeout(() => {
            newBox.style.transition = 'top 0.5s ease-out, background-color 0.5s linear';
            newBox.style.top = `${endPos}px`;
        }, 10);

        setTimeout(() => {
            if (endPos >= colorChangePosition) {
                newBox.style.backgroundColor = getRandomColor();
            }
        }, 500);
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
