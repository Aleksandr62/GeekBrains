import { formatTimer, beep } from "./utils.js";

export function startTimer(timer, time) {
    timer.dataset.time = time;
    clearTimeout(timer.dataset.timer);
    return setInterval(() => {
        if (timer.dataset.time > 0) timer.dataset.time--;
        else stopTimer(timer);
        if (timer.dataset.time <= 3 && timer.dataset.time > 0) beep(335, 0.3);
        if (timer.dataset.time === 0) beep(335, 0.7);
        timer.textContent = formatTimer(timer.dataset.time);
    }, 1000);
}

export function stopTimer(timer) {
    clearTimeout(timer.dataset.timer);
    timer.textContent = formatTimer(timer.dataset.time, 'пауза');
}