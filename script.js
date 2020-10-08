const countDownDate = new Date("Dec 24, 2020, 15:00:00").getTime();
const test = new Date("Dec 24, 2020, 15:00");
const mainFunction = setInterval(() => {
    const nowTime = new Date().getTime();
    const distance = countDownDate - nowTime;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(distance % (1000 * 60 * 60*24)/(1000*60 *60));
    const mins = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(distance % (1000 * 60) / (1000));

    document.getElementById('countdown-clock').innerHTML = `${days} Days ${hours} Hours ${mins} Minutes ${seconds} Seconds`;

        if(distance < 0 ) {
            clearInterval(mainFunction);
            document.getElementById('countdown-clock').innerHTML = "Vánoce jsou tady"
        }
},1000)

console.log(countDownDate)