const n = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

//最终的参数
function getParams(text, per = 4118, vol = 9) {
    let once = getOnce();
    let baseUrl = "https://baike.baidu.com/wikiui/api/getaudio?"
    let time = getTime();
    let sign = getSign(text, per, time, once);
    let e = {
        text: encodeURIComponent(text),
        vol,
        per,
        time,
        once,
        sign
    }
    var t = [];
    for (var o in e)
        null != e[o] && "" !== e[o] && t.push(o + "=" + e[o]);
    return t.length > 0 ? baseUrl + t.join("&") : baseUrl
}
// sign签名方法
function getSign(n, t, r, e) {
    void 0 === t && (t = 4129);
    var o = "9",
        a = "" + t,
        s = "%Ej9&lz9*1R5O*XCSXvY6E8PlWoZ@haY",
        f = [n, o, a, r, e, s].join(""),
        h = hash(f);
    return h
}


// once
function getOnce(i) {
    // e.get("BAIDUID") ||   '90C8CD523F1E2BAB473DB66A93E0697D:FG=1'
    i = isNaN(parseInt(i)) ? 7 : Math.max(Math.min(parseInt(i), 32), 1);
    var a = ["Win32", "Netscape", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36", 1920, 1032, "", 1655452856103, 0.16991936314982192]
    return hashBinary(a.join("-")).substr(0, i)
}

function getTime() {
    return "" + parseInt((new Date).getTime() / 1e3, 10)
}

function signI(e) { var t = []; for (var o in e) null != e[o] && "" !== e[o] && t.push(o + "=" + e[o]); return t.length > 0 ? t.join("&") : "" }

function hash(t, r) {
    /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t)));
    t = e(t);
    return r ? t : f(t)
}

function hashBinary(t, r) {
    t = e(t);
    return r ? t : f(t)
}

function e(t) {
    for (var r, e, n, i, f = t.length, o = [1732584193, -271733879, -1732584194, 271733878], s = 64; s <= f; s += 64)
        y(o, _(t.substring(s - 64, s)));
    for (r = (t = t.substring(s - 64)).length,
        e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        s = 0; s < r; s += 1)
        e[s >> 2] |= t.charCodeAt(s) << (s % 4 << 3);
    if (e[s >> 2] |= 128 << (s % 4 << 3),
        55 < s)
        for (y(o, e),
            s = 0; s < 16; s += 1)
            e[s] = 0;
    return i = (i = 8 * f).toString(16).match(/(.*?)(.{0,8})$/),
        n = parseInt(i[2], 16),
        i = parseInt(i[1], 16) || 0,
        e[14] = n,
        e[15] = i,
        y(o, e),
        o
}

function f(t) {
    for (var r = 0; r < t.length; r += 1)
        t[r] = i(t[r]);
    return t.join("")
}

function y(t, r) {
    var e = t[0],
        n = t[1],
        i = t[2],
        f = t[3],
        e = o(e, n, i, f, r[0], 7, -680876936),
        f = o(f, e, n, i, r[1], 12, -389564586),
        i = o(i, f, e, n, r[2], 17, 606105819),
        n = o(n, i, f, e, r[3], 22, -1044525330);
    e = o(e, n, i, f, r[4], 7, -176418897),
        f = o(f, e, n, i, r[5], 12, 1200080426),
        i = o(i, f, e, n, r[6], 17, -1473231341),
        n = o(n, i, f, e, r[7], 22, -45705983),
        e = o(e, n, i, f, r[8], 7, 1770035416),
        f = o(f, e, n, i, r[9], 12, -1958414417),
        i = o(i, f, e, n, r[10], 17, -42063),
        n = o(n, i, f, e, r[11], 22, -1990404162),
        e = o(e, n, i, f, r[12], 7, 1804603682),
        f = o(f, e, n, i, r[13], 12, -40341101),
        i = o(i, f, e, n, r[14], 17, -1502002290),
        n = o(n, i, f, e, r[15], 22, 1236535329),
        e = s(e, n, i, f, r[1], 5, -165796510),
        f = s(f, e, n, i, r[6], 9, -1069501632),
        i = s(i, f, e, n, r[11], 14, 643717713),
        n = s(n, i, f, e, r[0], 20, -373897302),
        e = s(e, n, i, f, r[5], 5, -701558691),
        f = s(f, e, n, i, r[10], 9, 38016083),
        i = s(i, f, e, n, r[15], 14, -660478335),
        n = s(n, i, f, e, r[4], 20, -405537848),
        e = s(e, n, i, f, r[9], 5, 568446438),
        f = s(f, e, n, i, r[14], 9, -1019803690),
        i = s(i, f, e, n, r[3], 14, -187363961),
        n = s(n, i, f, e, r[8], 20, 1163531501),
        e = s(e, n, i, f, r[13], 5, -1444681467),
        f = s(f, e, n, i, r[2], 9, -51403784),
        i = s(i, f, e, n, r[7], 14, 1735328473),
        n = s(n, i, f, e, r[12], 20, -1926607734),
        e = u(e, n, i, f, r[5], 4, -378558),
        f = u(f, e, n, i, r[8], 11, -2022574463),
        i = u(i, f, e, n, r[11], 16, 1839030562),
        n = u(n, i, f, e, r[14], 23, -35309556),
        e = u(e, n, i, f, r[1], 4, -1530992060),
        f = u(f, e, n, i, r[4], 11, 1272893353),
        i = u(i, f, e, n, r[7], 16, -155497632),
        n = u(n, i, f, e, r[10], 23, -1094730640),
        e = u(e, n, i, f, r[13], 4, 681279174),
        f = u(f, e, n, i, r[0], 11, -358537222),
        i = u(i, f, e, n, r[3], 16, -722521979),
        n = u(n, i, f, e, r[6], 23, 76029189),
        e = u(e, n, i, f, r[9], 4, -640364487),
        f = u(f, e, n, i, r[12], 11, -421815835),
        i = u(i, f, e, n, r[15], 16, 530742520),
        n = u(n, i, f, e, r[2], 23, -995338651),
        e = a(e, n, i, f, r[0], 6, -198630844),
        f = a(f, e, n, i, r[7], 10, 1126891415),
        i = a(i, f, e, n, r[14], 15, -1416354905),
        n = a(n, i, f, e, r[5], 21, -57434055),
        e = a(e, n, i, f, r[12], 6, 1700485571),
        f = a(f, e, n, i, r[3], 10, -1894986606),
        i = a(i, f, e, n, r[10], 15, -1051523),
        n = a(n, i, f, e, r[1], 21, -2054922799),
        e = a(e, n, i, f, r[8], 6, 1873313359),
        f = a(f, e, n, i, r[15], 10, -30611744),
        i = a(i, f, e, n, r[6], 15, -1560198380),
        n = a(n, i, f, e, r[13], 21, 1309151649),
        e = a(e, n, i, f, r[4], 6, -145523070),
        f = a(f, e, n, i, r[11], 10, -1120210379),
        i = a(i, f, e, n, r[2], 15, 718787259),
        n = a(n, i, f, e, r[9], 21, -343485551),
        t[0] = c(e, t[0]),
        t[1] = c(n, t[1]),
        t[2] = c(i, t[2]),
        t[3] = c(f, t[3])
}

function _(t) {
    for (var r = [], e = 0; e < 64; e += 4)
        r[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
    return r
}

function o(t, r, e, n, i, f, o) {
    return p(r & e | ~r & n, t, r, i, f, o)
}

function p(t, r, e, n, i, f) {
    return r = c(c(r, t), c(n, f)),
        c(r << i | r >>> 32 - i, e)
}

function c(t, r) {
    return t + r & 4294967295
}

function s(t, r, e, n, i, f, o) {
    return p(r & n | e & ~n, t, r, i, f, o)
}

function u(t, r, e, n, i, f, o) {
    return p(r ^ e ^ n, t, r, i, f, o)
}

function a(t, r, e, n, i, f, o) {
    return p(e ^ (r | ~n), t, r, i, f, o)
}

function h(t) {
    for (var r = [], e = 0; e < 64; e += 4)
        r[e >> 2] = t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] << 24);
    return r
}

function i(t) {
    for (var r = "", e = 0; e < 4; e += 1)
        r += n[t >> 8 * e + 4 & 15] + n[t >> 8 * e & 15];
    return r
};

module.exports = {
    getSign,
    getOnce,
    getTime,
    getParams
};