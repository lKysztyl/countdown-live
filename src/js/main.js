const data = new Date('2025-01-01');

const asynCount = setInterval(() => {
    const now = new Date();
    const timeNow = now.getTime();

    const timeDiff = data - timeNow;

    const daysMs = 1000 * 60 * 60 * 24;
    const hoursMs = 1000 * 60 * 60;
    const minutsMs = 1000 * 60;

    const timeDays =  Math.floor(timeDiff / daysMs);
    const timeHours =  Math.floor((timeDiff % daysMs) / hoursMs);
    const timeMinuts =  Math.floor((timeDiff % hoursMs) / minutsMs);
    const timeSeconds =  Math.floor((timeDiff % minutsMs) / 1000);

    document.querySelector('.timeDays').innerHTML = timeDays;

    document.querySelector('.timeHours').innerHTML = timeHours;

    document.querySelector('.timeMinuts').innerHTML = timeMinuts;

    document.querySelector('.timeSeconds').innerHTML = timeSeconds;

    if (now.getFullYear() > data.getFullYear()) {
        clearInterval(asynCount);
    }
    
}, 1000); 