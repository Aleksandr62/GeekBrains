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

loadScriptExt(["test.js", "test2.js"], () => {
    loadScriptExt(() => {
        console.log("Callback для test.js - выполнение")
    })
});

function loadScriptExt(args, callback = null) {
    if (typeof args === 'function') args();
    else if (Array.isArray(args)) {
        const exclude = [];
        args.forEach((el) => {
            if (exclude.length === 0 || exclude.some(item => el !== item)) loadScriptExt(el, callback);
            exclude.push(el);
        });
    } else {
        const element = document.createElement("script");
        element.type = "text/javascript";
        element.src = args;
        element.onload = callback;

        document.body.appendChild(element);
    };
}