const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

function Timer() {

}

Timer.prototype.setTimer = function () {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDeg = ((seconds / 60) * 360) + 90;
    const minutesDeg = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    const hoursDeg = ((hours / 12) * 360) + ((minutes/60)*30) + 90;

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
};

Timer.prototype.init = function () {
    setInterval(() => {
        this.setTimer();
    }, 1000);
};

let timer = new Timer();
timer.init();