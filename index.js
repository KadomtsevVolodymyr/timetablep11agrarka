const TelegramBot = require('node-telegram-bot-api');

const token = '2053615815:AAF2s3s4G_bBmfFywbMyfrxZN3mTuW8FsKc';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Хорошего пользования ботом!📅');
  bot.sendPhoto(chatId, 'photo.jpg', {
    reply_markup: {
      inline_keyboard: keyboardStart,
    },
  });
});

const keyboardMenu = [
  [
    {
      text: '⬆️Главное меню⬆️', // текст на кнопке
      callback_data: 'homeMenu', // данные для обработчика событий
    },
  ],
];

const keyboardStart = [
  [
    {
      text: '🗓Расписание пар🗓', // текст на кнопке
      callback_data: 'lessons', // данные для обработчика событий
    },
  ],
  [
    {
      text: '⏰Расписание звонков⏰', // текст на кнопке
      callback_data: 'time', // данные для обработчика событий
    },
  ],
];

const keyboard = [
  [
    {
      text: 'Понедельник', // текст на кнопке
      callback_data: 'monday', // данные для обработчика событий
    },
    {
      text: 'Вторник', // текст на кнопке
      callback_data: 'tuesday', // данные для обработчика событий
    },
  ],
  [
    {
      text: 'Среда', // текст на кнопке
      callback_data: 'wednesday', // данные для обработчика событий
    },
    {
      text: 'Четверг',
      callback_data: 'thursday',
    },
  ],
  [
    {
      text: 'Пятница',
      callback_data: 'friday',
    },
    {
      text: 'Суббота',
      callback_data: 'saturday', //внешняя ссылка
    },
  ],
  [
    {
      text: '⬆️Главное меню⬆️', // текст на кнопке
      callback_data: 'homeMenu', // данные для обработчика событий
    },
  ],
];

bot.on('callback_query', (query) => {
  //const chatId = msg.chat.id;
  const chatId = query.message.chat.id;

  if (query.data === 'homeMenu') {
    bot.sendPhoto(chatId, 'photo.jpg', {
      reply_markup: {
        inline_keyboard: keyboardStart,
      }
    });
  }

  if (query.data === 'lessons') {
    bot.sendMessage(chatId, 'Выбирай день недели!', {
      reply_markup: { inline_keyboard: keyboard },
    }).catch(e => console.log("error in 💣 Вы пригласили ", e ));
  }

  if (query.data === 'time') {
    bot.sendPhoto(chatId, '/friday.jpg', {
      reply_markup: { inline_keyboard: keyboardMenu },
    }); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
  }

  if (query.data === 'monday') {
    bot.sendMessage(chatId, 'В этот день в вашей группы нет занятий!', {
      reply_markup: { inline_keyboard: keyboard },
    });
  }

  if (query.data === 'tuesday') {
    bot.sendPhoto(chatId, 'tuesday.jpg', {
      reply_markup: { inline_keyboard: keyboard },
    }).catch(e => console.log("error in 💣 Вы пригласили ", e ));
  }

  if (query.data === 'wednesday') {
    bot.sendPhoto(
      chatId,
      'wensday.jpg', //Замена на фото
      { reply_markup: { inline_keyboard: keyboard } }
    ).catch(e => console.log("error in 💣 Вы пригласили ", e ));
  }
  if (query.data === 'thursday') {
    bot.sendPhoto(chatId, 'thursday.jpg', {
      reply_markup: { inline_keyboard: keyboard },
    }).catch(e => console.log("error in 💣 Вы пригласили ", e ));
  }
  if (query.data === 'friday') {
    bot.sendPhoto(chatId, 'friday.jpg', {
      reply_markup: { inline_keyboard: keyboard },
    }).catch(e => console.log("error in 💣 Вы пригласили ", e ));
  }
  if (query.data === 'saturday') {
    bot.sendPhoto(
      chatId,
      'saturday.jpg', //Замена на фото
      { reply_markup: { inline_keyboard: keyboard } }
    );
  }
});
