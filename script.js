"use strict";
const radioBtns = document.querySelectorAll('input[type=radio]');
const player = document.createElement("audio");
const stations = {
    "r1": "https://a1.radioheart.ru:9001/gagauzradiosu",
    "r2": "https://str1.pcradio.ru/power_turk-med",
    "r3": "https://str1.pcradio.ru/uzmanfm_com-med",
    "r4": "https://pub0102.101.ru:8443/stream/personal/aacp/64/794981?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJlNDQzMWUxMzEyYmJhN2E2ZjdkMmZiOTQ0OGI3MWNhZiIsIklQIjoiOTUuNjUuOTIuMTc2IiwiVUEiOiJNb3ppbGxhXC81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXRcLzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZVwvMTExLjAuMC4wIFNhZmFyaVwvNTM3LjM2IiwiUmVmIjoiaHR0cHM6XC9cLzEwMS5ydVwvIiwidWlkX2NoYW5uZWwiOiI3OTQ5ODEiLCJ0eXBlX2NoYW5uZWwiOiJwZXJzb25hbCIsInR5cGVEZXZpY2UiOiJQQyIsIkJyb3dzZXIiOiJDaHJvbWUiLCJCcm93c2VyVmVyc2lvbiI6IjExMS4wLjAuMCIsIlN5c3RlbSI6IldpbmRvd3MgMTAiLCJleHAiOjE2ODAzMTc0MjN9.PjxkCrFyMR4CI76GVic96QmW-Hs9ls5_sDGsrNCfLm0",
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
