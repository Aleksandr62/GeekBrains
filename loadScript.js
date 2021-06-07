/* function loadScript(url, callback) {
    const element = document.createElement("script");
    element.type = "text/javascript";
    element.src = url;
    element.onload = callback;

    document.body.appendChild(element);
}
loadScript("test.js", () => {
    loadScript("https://cdn.jsdelivr.net/npm/luxon@1.25.0/build/global/luxon.min.js", () => {
        console.log("timer.js ")
    })
}) */

// -------------Дом.задание
/* loadScriptExt("test.js", () => {
    loadScriptExt(() => {
        console.log("Callback для test.js - выполнение")
    })
}); */
// module B 
loadScriptExt(["test.js", "test2.js"], (script) => {
    console.log(`${script.src} загружен!`);

});
// module A
loadScriptExt(["test2.js", "test3.js"], (script) => {
    console.log(`${script.src} загружен!`);
});


function loadScriptExt(src, callback) {
    if (Array.isArray(src)) {
        const exclude = [];
        Array.from(document.getElementsByTagName('script')).forEach((el) => {
            exclude.push(el.src.match(/\w+\.js$/)[0]);
        });
        src.forEach((el) => {
            if (exclude.length === 0 || !exclude.some(item => el === item)) loadScriptExt(el, callback);
            exclude.push(el);
        });
    } else {
        return new Promise(function (resolve, reject) {
            let script = document.createElement('script');
            script.src = src;
            script.onload = resolve(callback(script));
            script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
            document.head.append(script);
        });
    };
};
