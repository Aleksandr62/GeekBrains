import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { startTimer, stopTimer } from "./timer.js";

export function handleCalcDates(event) {
    const dateCalcResult = document.querySelector(".date-calc__result");
    dateCalcResult.style = "opacity: 1;"
    dateCalcResult.innerHTML = '';
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); 
        dateCalcResult.innerHTML = diffToHtml(diff); 
    } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); 
};

export function handleTimer(event) {
    const timerText = document.querySelector(".timer-text");
    const time = document.getElementById("time").value || timerText.dataset?.time || 60;  
    document.getElementById("time").value = '';
    if(event.target.value === 'Старт') {
        timerText.dataset.timer = startTimer(timerText, time);
    } else if(event.target.value === 'Стоп') {
        stopTimer(timerText);
    }
};