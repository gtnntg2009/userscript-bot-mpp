// ==UserScript==
// @name         BOT-mpp
// @namespace    https://vscode.dev/?connectTo=tampermonkey
// @updateURL    https://raw.githubusercontent.com/gtnntg12/userscript-bot-mpp/main/BOT-mpp.user.js
// @downloadURL  https://raw.githubusercontent.com/gtnntg12/userscript-bot-mpp/main/BOT-mpp.user.js
// @version      1.0.2
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
    const botid = '1e698c17114da72c3dcde22a';
    //-----это нужно для категории админские команды---
    const ISadmin = admins.indexOf(msg.p._id) !== -1;

    // Это команда отдельно от остальных  для лёгкого редактирования
    switch (cmd) {
        case '/help':
            sendBot('Commands: /help, /about, /who, /msg, /answer, ( /discord_ru or /discord_eng ) .');
            sendBot('Fun: /qwerty, /capybara, /answer, /uwu, /owo.');
            break;
        default:
            
        break;
    
        // раздел полезные команды
    switch (cmd) {
        case '/msg':
            sendBot(msg.p.name + ' say msg: ' + input);
            break;
        case '/about':
            sendBot('BOT made by ◄Кот►*∂০ϭρыũ*');
            break;
        case '/who':
            sendBot('Your name is: ' + msg.p.name + '  | ID: ' + msg.p.id + ' | Color: ' + msg.p.color);
            break;
        case '/discord_ru':
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
            break;
        case '/discord_eng':
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
            break;
        // Добавьте другие команды, используя аналогичную структуру
        default:
            break;
    }
    // раздел команды развлечения
    switch (cmd) {
        case '/answer':
          var words = ['Yes', 'No', 'Maybe', 'Try again', 'Soon', 'Meow!', 'I don’t know'];
          var random = Math.floor(Math.random() * words.length);
          sendBot(' ' + words[random]);
          break;

        case '/owo':
          sendBot('UwU');
          break;

        case '/qwerty':
          sendBot('QWERTY');
          break;

        case '/uwu':
          sendBot('OwO');
          break;

        case '/capybara':
          sendBot('https://clck.ru/34TQjb');
          break;

        // Другие команды развлечений могут быть добавлены здесь

        default:
          // Обработка команд, которые не совпадают с вышеуказанными
          break;
      }

    // Создаем функцию sendBot, которая является синонимом для MPP.chat.send
    function sendBot(message) {
        MPP.chat.send(message);
    }

    //----------- авто отправка и прочее ---------
    switch (cmd) {
        case 'hi':
            sendBot('Hi. I speak Russian');
            break;
        case 'привет':
            sendBot('Привет "автоматическая отправка"');
            break;
        // Добавьте другие команды, используя аналогичную структуру
        default:
            break;
    }

    //----------- админские команды -------------
    if (ISadmin) {
        switch (cmd) {
            case '/eval':
                sendBot('<- ' + eval(input));
                break;
            case '/crown':
                MPP.client.sendArray([{ m: 'chown', id: msg.p.id }]);
                sendBot("Done.");
                break;
            case '/ban':
                MPP.client.sendArray([{ m: 'kickban', ms: 1800000, _id: `${msg.a.substring(5).trim()}` }]);
                break;
            case '/crownsolo':
                MPP.client.sendArray([{ m: "chset", set: { crownsolo: !MPP.client.channel.settings.crownsolo } }]);
                sendBot("Crownsolo on/off");
                break;
            case '/kick':
                MPP.client.sendArray([{ m: "kickban", ms: 100, _id: `${msg.a.substring(5).trim()}` }]);
                break;
            case '/afk':
                sendBot(msg.p.name + " is afk.");
                break;
            case '/unafk':
                sendBot(msg.p.name + " is not afk.");
                break;
            // Добавьте другие админские команды, используя аналогичную структуру
            default:
                break;
        }
    }
});

console.log('BOT is online! <-ADMIN->');
