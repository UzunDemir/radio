"use strict";
const radioBtns = document.querySelectorAll('input[type=radio]');
const player = document.createElement("audio");
const stations = {
    "r1": "https://a1.radioheart.ru:9001/gagauzradiosu",
    "r2": "https://a1.radioheart.ru:9001/gagauzradiosu",
    "r3": "https://a1.radioheart.ru:9001/gagauzradiosu",
    "r4": "https://a1.radioheart.ru:9001/gagauzradiosu",
    "r5": "https://a1.radioheart.ru:9001/gagauzradiosu",
};
radioBtns.forEach(rb => {
    rb.addEventListener('input', e => {
        const v = rb.value;
        player.src = stations[v];
        player.play();
    });
});
///
const MAGNETIC_DEGS = [0, -45, 45];
rotateX.oninput = (e) => rotateXHandler();
rotateY.oninput = (e) => rotateYHandler();
function rotateXHandler() {
    const x = magnetic(MAGNETIC_DEGS, parseInt(rotateX.value));
    rotateX.value = x;
    front.style.setProperty("--X", x + "deg");
}
function rotateYHandler() {
    const y = magnetic(MAGNETIC_DEGS, parseInt(rotateY.value));
    rotateY.value = y;
    front.style.setProperty("--Y", y + "deg");
}
function magnetic(array, value, range = 10) {
    for (let i = 0; i < array.length; i++) {
        const magnetValue = array[i];
        const magnetMax = magnetValue + range;
        const magnetMin = magnetValue - range;
        if (value < magnetMax && value > magnetMin)
            return magnetValue;
    }
    return value;
}
