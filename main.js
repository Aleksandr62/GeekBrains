import { handleCalcDates, handleTimer } from "./handlers.js";
import { renderApp } from "./render.js";

const app = document.getElementById('app');
const navs = document.querySelector(".nav-tabs");

let selectTab = navs.children[0];
navs.addEventListener('click', (e) => {
    if(e.target == e.currentTarget) return;
    selectTab.classList.remove('active-tab');
    selectTab = e.target;
    selectTab.classList.add('active-tab');
    app.innerHTML = renderApp(selectTab.dataset.tab);

    const dateCalcForm = document.querySelector(".date-calc");
    if (dateCalcForm) dateCalcForm.addEventListener("submit", handleCalcDates);

    const timerForm = document.querySelector(".timer");
    if (timerForm) timerForm.addEventListener("click", handleTimer);
}, true)



