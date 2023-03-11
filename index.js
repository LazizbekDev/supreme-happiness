const { Telegraf } = require('telegraf');
const { help } = require('./src/config.help.js');
const { faq } = require('./src/faq.js');

const bot = new Telegraf('6220957060:AAFfU6r3es8EH6hh5zTmMvre1A-He8NyQnE');

help(bot)
faq(bot)

bot.action('not_found', ctx => {
    ctx.answerCbQuery('Hali mavjud emas!')
})

// bot.launch();