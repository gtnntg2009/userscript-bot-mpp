// ==UserScript==
// @name         BOT-mpp
// @namespace    https://vscode.dev/?connectTo=tampermonkey
// @updateURL    https://raw.githubusercontent.com/gtnntg12/userscript-bot-mpp/main/BOT-mpp.user.js
// @downloadURL  https://raw.githubusercontent.com/gtnntg12/userscript-bot-mpp/main/BOT-mpp.user.js
// @version      0.9.0
// @description  none
// @author       ◄Кот►*∂০ϭρыũ* - gtnntg12
// @match        *://mpp.hyye.tk/*
// @match        *://*multiplayerpiano.net/*
// @match        *://mppclone.com/*
// @match        *://playground-mpp.hyye.tk/*
// @grant        none
// ==/UserScript==

//-------------задаём значение либо что-то делаем важное---------------------
MPP.client.on("a", function(msg) {
    var asgr = msg.a.split(' ');
    var cmd = asgr[0];
    var input = msg.a.substring(cmd.length).trim();
    const admins = ['1e698c17114da72c3dcde22a', '28aa0d536d90fdf690093a72', 'c272b0f54ca440c68d7dfaa4', '7375cf7b31f06f03f059218e']
    const botname = '♬CLAN MIDI zamer♬gtnntg-mpp'
    const botcolor = '#00fbe1'
    const botid = '1e698c17114da72c3dcde22a'
    const err1 = console.error('ERROR1');
    const err2 = console.error('ERROR2');
    const warn1 = console.warn('WARN1');
    const warn2 = console.warn('WARN2');
    //-----это нужно для категории админские команды---
    const ISadmin = admins.indexOf(msg.p._id) !== -1;

    // Создаем синоним для MPP.chat.send() с более коротким именем
    const sendBot = MPP.chat.send;

    //---------------- Это команда не входит в полезные команды  Это команда входит в  инфо команда ---
    if (cmd == '/help') {
        sendBot('Commands: /help, /about, /who, /msg, /answer, ( /discord_ru or /discord_eng ) .');
        sendBot('Fun: /qwerty, /capybara, /answer, /uwu, /owo.');
    }
    //----------------задаём значение перед  полезными командами
    // Создаем синоним для MPP.chat.send () с более коротким именем
    const sendBot = MPP.chat.send;
    sendBot();
    //---------------полезные команды -----------------

    if (cmd == '/msg') {
        sendBot(msg.p.name + ' say msg: ' + input);
    }
    if (cmd == '/about') {
        sendBot('BOT made by ◄Кот►*∂০ϭρыũ*');
    }
    if (cmd == '/who') {
        sendBot('Your name is: ' + msg.p.name + '  | ID: ' + msg.p.id + ' | Color: ' + msg.p.color);
    }
    if (cmd == '/discord_ru') {
        sendBot('https://discord.gg/VP9GMGur4j');
        sendBot('на Clan MIDI Ramer');
        sendBot('Мы рады приветствовать вас на нашем сервере, где музыкальные энтузиасты');
        sendBot('могут поделиться своими MIDI файлами и насладиться новыми увлекательными композициями.');
        sendBot('У вас есть возможность делиться своими собственными MIDI файлами и находить, скачивать треки от других участников.');
        sendBot('Наша библиотека MIDI файлов постоянно пополняется новыми произведениями,');
        sendBot('поэтому здесь вы всегда найдете что-то интересное и вдохновляющее для использования в своих проектах.');
        sendBot('Мы придерживаемся принципов взаимоуважения и дружелюбной атмосферы. Соблюдение правил и поддержание порядка на сервере - наша основная задача. Любые нарушения будут строго наказываться но справедливо.');
        sendBot('Мы приглашаем всех любителей музыки присоединиться к нашему сообществу, общаться, делиться идеями и открывать новые горизонты в мире музыки.');
        sendBot('Присоединяйтесь к Clan MIDI Ramer, наслаждайтесь общением с другими музыкантами и получайте доступ к нашей огромной midi библиотеке. Мы уверены, что здесь вы найдете множество новых и интересных музыкальных открытий! 🎹 ');   
    }
    if (cmd == '/discord_eng') {
        sendBot('https://discord.gg/VP9GMGur4j');
        sendBot('on Clan MIDI Ramer');
        sendBot('We are glad to welcome you to our server, where music enthusiasts');
        sendBot('can share their MIDI files and enjoy new exciting compositions.');
        sendBot('You have the opportunity to share your own MIDI files and discover, download tracks from other participants.');
        sendBot('Our MIDI file library is constantly being updated with new works,');
        sendBot('so here you will always find something interesting and inspiring to use in your projects.');
        sendBot('We adhere to the principles of mutual respect and a friendly atmosphere. Adhering to the rules and maintaining order on the server is our main task. Any violations will be strictly punished but fairly.');
        sendBot('We invite all music lovers to join our community, communicate, share ideas, and explore new horizons in the world of music.');
        sendBot('Join Clan MIDI Ramer, enjoy chatting with other musicians, and get access to our huge MIDI library. We are confident that here you will find many new and interesting musical discoveries! 🎹');
    }
    //---------- команды развлечения --------------
    if (cmd == '/answer') {
        var words = ['Yes', 'No', 'Maybe', 'Try again', 'Soon', 'Meow!', 'I don t know']; var random = Math.floor(Math.random() * words.length);
        sendBot(' ' + words[random]);
    }
    if (cmd == '/owo') {
        sendBot('UwU');
    }
    if (cmd == '/qwerty') {
        sendBot('QWERTY');
    }
    if (cmd == '/uwu') {
        sendBot('OwO');
    }
    if (cmd == '/capybara') {
        sendBot('https://clck.ru/34TQjb');
    }
    //----------- авто отправка и прочее ---------

    if (cmd == 'hi') {
        sendBot('Hi. I speak Russian');
    }
    if (cmd == 'привет') {
        sendBot('Привет "автоматическая отправка"');
    }
    //----------- админские команды -------------
    if (ISadmin) {
        if (cmd == '/eval') {
            sendBot('<- ' + eval(input));
        } else if (cmd == '/crown') {
            MPP.client.sendArray([{m: 'chown', id: msg.p.id}]);
            sendBot("Done.");
        } else if (cmd === "/ban") {
            MPP.client.sendArray([{m: 'kickban', ms: 1800000, _id: `${msg.a.substring(5).trim()}`}]);
        } else if (cmd == "/crownsolo") {
            MPP.client.sendArray([{m: "chset", set: {crownsolo: !MPP.client.channel.settings.crownsolo}}]);
            sendBot("Crownsolo on/off");
        } else if (cmd == "/kick") {
            MPP.client.sendArray([{m: "kickban", ms: 100, _id: `${msg.a.substring(5).trim()}`}]);
        } else if (cmd == '/afk') {
            sendBot(msg.p.name + " is afk.");
        } else if (cmd == '/unafk') {
            sendBot(msg.p.name + " is not afk.");
        }
    } else {
        // Сообщение об ошибке для пользователей, не являющихся администраторами
        sendBot("You are not an admin. This command is restricted to administrators.");
    }
});

console.log('BOT is online! <-ADMIN->');
