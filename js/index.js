const refs = {
  daysCounter: document.querySelector('[data-value="days"]'),
  hoursCounter: document.querySelector('[data-value="hours"]'),
  minsCounter: document.querySelector('[data-value="mins"]'),
  secsCounter: document.querySelector('[data-value="secs"]'),
};

const timer = {
  start() {
    const targetDate = new Date('Jul 18, 2020');
    const targetDateUnix = targetDate.getTime();

    updateClockface(targetDateUnix - Date.now());

    setInterval(() => {
      const currentTime = Date.now();

      const deltaTime = targetDateUnix - currentTime;

      updateClockface(deltaTime);
    }, 1000);
  },
};

timer.start();

function updateClockface(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.daysCounter.textContent = `${days}`;
  refs.hoursCounter.textContent = `${hours}`;
  refs.minsCounter.textContent = `${mins}`;
  refs.secsCounter.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
