export const renderApp = app => {
    if(app === 'date-calc') return `
    <div>
        <h2>Калькулятор дат</h2>
        <form class="date-calc" action="">
            <label for="dateOne">Первая дата: </label>
            <input id="dateOne" type="date" name="firstDate">
            <label for="dateTwo">Вторая дата: </label>
            <input id="dateTwo" type="date" name="secondDate">
            <input type="submit" value="Рассчитать промежуток">
            <p class="date-calc__result"></p>
        </form>
    </div>
    `;
    if(app === 'timer') return `
    <div>
        <h2>Таймер</h2>
        <form class="timer" action="">
            <label for="time">Время в сек. (по умолчанию 60 сек.): </label>
            <input id="time" type="number" name="time">
            <input type="button" value="Старт">
            <input type="button" value="Стоп">
            <p class="timer-text"></p>
        </form>
    </div>
    `;
}