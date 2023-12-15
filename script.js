"use strict";
const radioBtns = document.querySelectorAll('input[type=radio]');
const player = document.createElement("audio");
const stations = {
    "r1": "https://pub0202.101.ru:8443/stream/personal/aacp/64/794981?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJhOTIyNzIzY2ZkMWIxMTNiYWM4YjY0MjRjYTUwODQ5NiIsIklQIjoiOTUuNjUuOTIuMTc2IiwiVUEiOiJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTE5LjAuMC4wIFNhZmFyaS81MzcuMzYiLCJSZWYiOiJodHRwczovLzEwMS5ydS8iLCJ1aWRfY2hhbm5lbCI6Ijc5NDk4MSIsInR5cGVfY2hhbm5lbCI6InBlcnNvbmFsIiwidHlwZURldmljZSI6IlBDIiwiQnJvd3NlciI6IkNocm9tZSIsIkJyb3dzZXJWZXJzaW9uIjoiMTE5LjAuMC4wIiwiU3lzdGVtIjoiV2luZG93cyAxMCIsImV4cCI6MTcwMTgzMjI0Mn0.6L6loCgsHolalbjRPlajhfZXFRA3pX0lrqFs75_Buig",  
    "r2": "https://str1.pcradio.ru/power_turk-med",
    "r3": "https://str1.pcradio.ru/uzmanfm_com-med",
    "r4": "https://a9.radioheart.ru:8010/RH76673",
    "r5": "https://str1.pcradio.ru/marusya_fm-med",
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
