;(() => {
    "use strict"
    var a = {
        d: (c, n) => {
            for (var i in n)
                a.o(n, i) &&
                    !a.o(c, i) &&
                    Object.defineProperty(c, i, { enumerable: !0, get: n[i] })
        },
        o: (a, c) => Object.prototype.hasOwnProperty.call(a, c),
    }
    a.d({}, { F: () => m, D: () => g })
    var c = [
        { name: "закрытая", img: "./static/img/закрытая.png", id: 0 },
        { name: "6 бубны", img: "./static/img/6 бубны.png", id: 1 },
        { name: "6 крести", img: "./static/img/6 крести.png", id: 2 },
        { name: "6 пики", img: "./static/img/6 пики.png", id: 3 },
        { name: "6 черви", img: "./static/img/6 черви.png", id: 4 },
        { name: "7 бубны", img: "./static/img/7 бубны.png", id: 5 },
        { name: "7 крести", img: "./static/img/7 крести.png", id: 6 },
        { name: "7 пики", img: "./static/img/7 пики.png", id: 7 },
        { name: "7 черви", img: "./static/img/7 черви.png", id: 8 },
        { name: "8 бубны", img: "./static/img/8 бубны.png", id: 9 },
        { name: "8 крести", img: "./static/img/8 крести.png", id: 10 },
        { name: "8 черви", img: "./static/img/8 черви.png", id: 11 },
        { name: "8 пики", img: "./static/img/8 пики.png", id: 12 },
        { name: "9 бубны", img: "./static/img/9 бубны.png", id: 13 },
        { name: "9 крести", img: "./static/img/9 крести.png", id: 14 },
        { name: "9 пики", img: "./static/img/9 пики.png", id: 15 },
        { name: "9 черви", img: "./static/img/9 черви.png", id: 16 },
        { name: "10 бубны", img: "./static/img/10 бубны.png", id: 17 },
        { name: "10 крести", img: "./static/img/10 крести.png", id: 18 },
        { name: "10 пики", img: "./static/img/10 пики.png", id: 19 },
        { name: "10 черви", img: "./static/img/10 черви.png", id: 20 },
        { name: "валет бубны", img: "./static/img/валет бубны.png", id: 21 },
        { name: "валет крести", img: "./static/img/валет крести.png", id: 22 },
        { name: "валет пики", img: "./static/img/валет пики.png", id: 23 },
        { name: "валет черви", img: "./static/img/валет черви.png", id: 24 },
        { name: "дама бубны", img: "./static/img/дама бубны.png", id: 25 },
        { name: "дама крести", img: "./static/img/дама крести.png", id: 26 },
        { name: "дама пики", img: "./static/img/дама пики.png", id: 27 },
        { name: "дама черви", img: "./static/img/дама черви.png", id: 28 },
        { name: "король бубны", img: "./static/img/король бубны.png", id: 29 },
        {
            name: "король крести",
            img: "./static/img/король крести.png",
            id: 30,
        },
        { name: "король пики", img: "./static/img/король пики.png", id: 31 },
        { name: "король черви", img: "./static/img/король черви.png", id: 32 },
        { name: "туз бубны", img: "./static/img/туз бубны.png", id: 33 },
        { name: "туз крести", img: "./static/img/туз крести.png", id: 34 },
        { name: "туз пики", img: "./static/img/туз пики.png", id: 35 },
        { name: "туз черви", img: "./static/img/туз черви.png", id: 36 },
    ]
    function n(a, c) {
        return (
            (a = Math.ceil(a)),
            (c = Math.floor(c)),
            Math.floor(Math.random() * (c - a + 1)) + a
        )
    }
    function i(a) {
        for (var c, n = a.length - 1; n > 0; n--) {
            var i = Math.floor(Math.random() * (n + 1))
            ;(c = [a[i], a[n]]), (a[n] = c[0]), (a[i] = c[1])
        }
    }
    function s(a) {
        return a.reduce(function (a, c) {
            return a.concat([c, c])
        }, [])
    }
    var l = [],
        t = []
    function d(a, c, n) {
        return '<div class="body">\n                <div class="start">\n                    '
            .concat(
                a
                    ? '<div><img src="./static/img/выиграли.png" alt="выиграли"></div>'
                    : '<div><img src="./static/img/проиграли.png" alt="проиграли"></div>',
                " \n                    "
            )
            .concat(
                a
                    ? '<h2 class="start-title">Вы выиграли!</h2>'
                    : '<h2 class="start-title">Вы проиграли!</h2>',
                ' \n                    \n                    <div class="finish-time-text">\n                        Затраченное время:\n                    </div>\n                    <div class="time finish-time">\n                            <p class="min-value">'
            )
            .concat(
                c.toString().padStart(2, "0"),
                '</p>\n                            <p class="sek-value">.'
            )
            .concat(
                n.toString().padStart(2, "0"),
                '</p>\n                    </div>\n                    <button id="buttonFinish" class="button-start finish-button">Играть снова</button>\n                </div>\n            </div>'
            )
    }
    function e() {
        ;(m.innerHTML = (function (a) {
            var d
            if ("1" === a) {
                for (; l.length < 3; ) {
                    var e = n(1, 36)
                    l.includes(c[e]) || l.push(c[e])
                }
                i((t = s(l))),
                    (d =
                        '\n    <div class="body game">\n        <div class="game-header">\n            <div class="time">\n                <div class="time__block">\n                    <p class="time-name">min</p> \n                    <p class="min-value">00</p>\n                </div>\n                <div class="time__block">\n                    <p class="time-name">sek</p> \n                    <p class="sek-value">.00</p>\n                </div>\n            </div>\n            <button class="button-start">Начать заново</button>\n        </div>\n        <ul class="game-zone-1">\n            <li class="game__card">\n                <img class="game-card" src="'
                            .concat(
                                t[0].img,
                                '" alt="1">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[1].img,
                                '" alt="2">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[2].img,
                                '" alt="3">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[3].img,
                                '" alt="4">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[4].img,
                                '" alt="5">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[5].img,
                                '" alt="6">\n            </li>\n        </ul>\n    </div>\n    '
                            ))
            } else if ("2" === a) {
                for (; l.length < 6; )
                    (e = n(1, 36)), l.includes(c[e]) || l.push(c[e])
                i((t = s(l))),
                    (d =
                        '\n        <div class="body game">\n        <div class="game-header">\n            <div class="time">\n                <div class="time__block">\n                    <p class="time-name">min</p> \n                    <p class="min-value">00</p>\n                </div>\n                <div class="time__block">\n                    <p class="time-name">sek</p> \n                    <p class="sek-value">.00</p>\n                </div>\n            </div>\n            <button class="button-start">Начать заново</button>\n        </div>\n        <ul class="game-zone-2">\n            <li class="game__card">\n                <img class="game-card" src="'
                            .concat(
                                t[0].img,
                                '" alt="1">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[1].img,
                                '" alt="2">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[2].img,
                                '" alt="3">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[3].img,
                                '" alt="4">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[4].img,
                                '" alt="5">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[5].img,
                                '" alt="6">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[6].img,
                                '" alt="7">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[7].img,
                                '" alt="8">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[8].img,
                                '" alt="9">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[9].img,
                                '" alt="10">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[10].img,
                                '" alt="11">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[11].img,
                                '" alt="12">\n            </li>\n        </ul>\n    </div>\n    '
                            ))
            } else {
                for (; l.length < 9; )
                    (e = n(1, 36)), l.includes(c[e]) || l.push(c[e])
                i((t = s(l))),
                    (d =
                        '\n        <div class="body game">\n        <div class="game-header">\n            <div class="time">\n                <div class="time__block">\n                    <p class="time-name">min</p> \n                    <p class="min-value">00</p>\n                </div>\n                <div class="time__block">\n                    <p class="time-name">sek</p> \n                    <p class="sek-value">.00</p>\n                </div>\n            </div>\n            <button class="button-start">Начать заново</button>\n        </div>\n        <ul class="game-zone-3">\n            <li class="game__card">\n                <img class="game-card" src="'
                            .concat(
                                t[0].img,
                                '" alt="1">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[1].img,
                                '" alt="2">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[2].img,
                                '" alt="3">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[3].img,
                                '" alt="4">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[4].img,
                                '" alt="5">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[5].img,
                                '" alt="6">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[6].img,
                                '" alt="7">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[7].img,
                                '" alt="8">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[8].img,
                                '" alt="9">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[9].img,
                                '" alt="10">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[10].img,
                                '" alt="11">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[11].img,
                                '" alt="12">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[12].img,
                                '" alt="13">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[13].img,
                                '" alt="14">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[14].img,
                                '" alt="15">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[15].img,
                                '" alt="16">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[16].img,
                                '" alt="17">\n            </li>\n            <li class="game__card">\n                <img class="game-card" src="'
                            )
                            .concat(
                                t[17].img,
                                '" alt="18">\n            </li>\n        </ul>\n    </div>\n    '
                            ))
            }
            return d
        })(window.application.level)),
            setTimeout(function () {
                var a
                m.innerHTML =
                    "1" === (a = window.application.level)
                        ? '\n    <div class="body game">\n        <div class="game-header">\n            <div class="time">\n                <div class="time__block">\n                    <p class="time-name">min</p> \n                    <p class="min-value">00</p>\n                </div>\n                <div class="time__block">\n                    <p class="time-name">sek</p> \n                    <p class="sek-value">.00</p>\n                </div>\n            </div>\n            <button class="button-start">Начать заново</button>\n        </div>\n        <ul class="game-zone-1">\n            <li class="game__card" data-id="'
                              .concat(
                                  t[0].id,
                                  '" data-index=0>\n                <img class="game-card"  src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="1">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[1].id,
                                  '" data-index=1>\n                <img class="game-card"  src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="2">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[2].id,
                                  '" data-index=2>\n                <img class="game-card"  src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="3">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[3].id,
                                  '" data-index=3>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="4">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[4].id,
                                  '" data-index=4>\n                <img class="game-card"  src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="5">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[5].id,
                                  '" data-index=5>\n                <img class="game-card"  src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="6">\n            </li>\n        </ul>\n    </div>\n    '
                              )
                        : "2" === a
                        ? '\n        <div class="body game">\n        <div class="game-header">\n            <div class="time">\n                <div class="time__block">\n                    <p class="time-name">min</p> \n                    <p class="min-value">00</p>\n                </div>\n                <div class="time__block">\n                    <p class="time-name">sek</p> \n                    <p class="sek-value">.00</p>\n                </div>\n            </div>\n            <button class="button-start">Начать заново</button>\n        </div>\n        <ul class="game-zone-2">\n            <li class="game__card" data-id="'
                              .concat(
                                  t[0].id,
                                  '" data-index=0>\n                <img class="game-card"  src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="1">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[1].id,
                                  '" data-index=1>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="2">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[2].id,
                                  '" data-index=2>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="3">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[3].id,
                                  '" data-index=3>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="4">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[4].id,
                                  '" data-index=4>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="5">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[5].id,
                                  '" data-index=5>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="6">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[6].id,
                                  '" data-index=6>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="7">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[7].id,
                                  '" data-index=7>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="8">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[8].id,
                                  '" data-index=8>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="9">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[9].id,
                                  '" data-index=9>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="10">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[10].id,
                                  '" data-index=10>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="11">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[11].id,
                                  '" data-index=11>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="12">\n            </li>\n        </ul>\n    </div>\n    '
                              )
                        : '\n        <div class="body game">\n        <div class="game-header">\n            <div class="time">\n                <div class="time__block">\n                    <p class="time-name">min</p> \n                    <p class="min-value">00</p>\n                </div>\n                <div class="time__block">\n                    <p class="time-name">sek</p> \n                    <p class="sek-value">.00</p>\n                </div>\n            </div>\n            <button class="button-start">Начать заново</button>\n        </div>\n        <ul class="game-zone-3">\n            <li class="game__card" data-id="'
                              .concat(
                                  t[0].id,
                                  '" data-index=0>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="1">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[1].id,
                                  '" data-index=1>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="2">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[2].id,
                                  '" data-index=2>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="3">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[3].id,
                                  '" data-index=3>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="4">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[4].id,
                                  '" data-index=4>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="5">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[5].id,
                                  '" data-index=5>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="6">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[6].id,
                                  '" data-index=6>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="7">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[7].id,
                                  '" data-index=7>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="8">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[8].id,
                                  '" data-index=8>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="9">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[9].id,
                                  '" data-index=9>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="10">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[10].id,
                                  '" data-index=10>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="11">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[11].id,
                                  '" data-index=11>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="12">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[12].id,
                                  '" data-index=12>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="13">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[13].id,
                                  '" data-index=13>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="14">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[14].id,
                                  '" data-index=14>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="15">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[15].id,
                                  '" data-index=15>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="16">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[16].id,
                                  '" data-index=16>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="17">\n            </li>\n            <li class="game__card" data-id="'
                              )
                              .concat(
                                  t[17].id,
                                  '" data-index=17>\n                <img class="game-card" src="'
                              )
                              .concat(
                                  c[0].img,
                                  '" alt="18">\n            </li>\n        </ul>\n    </div>\n    '
                              )
                for (
                    var n,
                        i,
                        s = Array.from(
                            document.querySelectorAll(".game__card")
                        ),
                        r = null,
                        o = 0,
                        _ = 0,
                        v = 0,
                        p = 0,
                        u = function (a) {
                            a.addEventListener("click", function () {
                                if (r || a.classList.contains("open"))
                                    if (
                                        a.dataset.id === r &&
                                        a.dataset.index !== n
                                    )
                                        (a.innerHTML =
                                            '<img class="game-card" src="'.concat(
                                                c[r].img,
                                                '" alt="1"></img>'
                                            )),
                                            (r = null),
                                            a.classList.add("open"),
                                            ++o === l.length &&
                                                (clearInterval(k),
                                                (i = !0),
                                                (m.innerHTML = d(i, p, v)),
                                                null ==
                                                    (s =
                                                        document.getElementById(
                                                            "buttonFinish"
                                                        )) ||
                                                    s.addEventListener(
                                                        "click",
                                                        function () {
                                                            g()
                                                        }
                                                    ))
                                    else {
                                        if (a.dataset.index === n) return
                                        var s
                                        ++_ > window.application.level &&
                                            ((i = !1),
                                            (m.innerHTML = d(i, p, v)),
                                            null ==
                                                (s =
                                                    document.getElementById(
                                                        "buttonFinish"
                                                    )) ||
                                                s.addEventListener(
                                                    "click",
                                                    function () {
                                                        g()
                                                    }
                                                ))
                                        for (
                                            var t = 0,
                                                e = Array.from(
                                                    document.querySelectorAll(
                                                        '[data-id="'.concat(
                                                            r,
                                                            '"]'
                                                        )
                                                    )
                                                );
                                            t < e.length;
                                            t++
                                        ) {
                                            var u = e[t]
                                            ;(u.innerHTML =
                                                '<img class="game-card"  src="'.concat(
                                                    c[0].img,
                                                    '" alt="1">'
                                                )),
                                                u.classList.remove("open")
                                        }
                                        r = null
                                    }
                                else
                                    (r = a.dataset.id),
                                        (n = a.dataset.index),
                                        (a.innerHTML =
                                            '<img class="game-card" src="'.concat(
                                                c[r].img,
                                                '" alt="1"></img>'
                                            )),
                                        a.classList.add("open")
                            })
                        },
                        b = 0,
                        f = s;
                    b < f.length;
                    b++
                )
                    u(f[b])
                var x = document.querySelector(".sek-value"),
                    h = document.querySelector(".min-value"),
                    k = setInterval(function () {
                        60 == ++v && (p++, (v = 0)),
                            (x.textContent = ".".concat(
                                v.toString().padStart(2, "0")
                            )),
                            (h.textContent = "".concat(
                                p.toString().padStart(2, "0")
                            ))
                    }, 1e3)
                document
                    .querySelector(".button-start")
                    .addEventListener("click", function () {
                        e()
                    })
            }, 3e3)
    }
    var m = document.getElementById("app")
    function g() {
        m.innerHTML =
            '\n    <div class="body">\n        <div class="start">\n            <h2 class="start-title">Выбери <br> сложность</h2>\n            <div class="levels">\n                <div class="form-radio-btn">\n                    <input class="level-input" id="level-1" type="radio" name="level" value="1">\n                    <label class="level-label" for="level-1">1</label>\n                </div>\n                 \n                <div class="form-radio-btn">\n                    <input class="level-input" id="level-2" type="radio" name="level" value="2">\n                    <label class="level-label" for="level-2">2</label>\n                </div>\n                 \n                <div class="form-radio-btn">\n                    <input class="level-input" id="level-3" type="radio" name="level" value="3">\n                    <label class="level-label" for="level-3">3</label>\n                </div>\n            </div>\n            <button id="buttonStart" class="button-start">Старт</button>\n        </div>\n    </div>\n    '
        var a = document.getElementById("buttonStart")
        null == a ||
            a.addEventListener("click", function () {
                for (
                    var a = 0,
                        c = Array.from(
                            document.querySelectorAll(".level-input")
                        );
                    a < c.length;
                    a++
                ) {
                    var n = c[a]
                    if (n.checked) {
                        window.application.level = n.value
                        break
                    }
                }
                window.application.level ? e() : alert("Выберете сложность")
            })
    }
    g(), (window.application = { level: null })
})()
