export const formatError = text => `
<span style="padding: 16px; color: red; background: rgb(255, 166, 0); border-radius: 3px;">
    ${text}
</span>
`;

export const formatTimer = (sec, txt = '') => `
    ${Math.floor(sec / 60)}:${sec % 60}  ${txt}
    `;

export function beep(f, d) {
    let volume = 10000,
        u1 = -volume,
        u2 = volume,
        u = u1,
        samples = [],
        titlestring = decodeURIComponent(escape(window.atob("UklGRgAAAABXQVZFZm10IBAAAAABAAIARMKsAAAQwrECAAQAEABkYXRh"))),
        title = [];
    for (let i = 0; i < titlestring.length; i++) title[i] = titlestring.charCodeAt(i);
    for (let i = 0; i < d * 44100; i++) {
        u += f;
        if (u > u2) u = u1;
        samples[i] = u;
    }
    let outbuffer = new Int16Array(title.length / 2 + samples.length * 2);
    for (let i = 0; i < title.length; i += 2) outbuffer[i / 2] = title[i] + title[i + 1] * 256;
    for (let i = 0; i < samples.length * 2; i++) outbuffer[i * 2 + 44] = outbuffer[i * 2 + 45] = samples[i];
    let audio = new Audio(URL.createObjectURL(new Blob([outbuffer])));
    audio.play();
}