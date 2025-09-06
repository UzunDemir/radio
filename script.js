"use strict";
const radioBtns = document.querySelectorAll('input[type=radio]');
const player = document.createElement("audio");
const stations = {
    "r1": "https://pub0102.101.ru:8443/stream/personal/aacp/64/794981",  
    "r2": "https://old.grt.md/radio",
    "r3": "https://str1.pcradio.ru/uzmanfm_com-med",
    "r4": "https://a9.radioheart.ru:8010/RH76673",
    "r5": "https://halizgagauz.s02.radio-tochka.com:8025/radio",
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
