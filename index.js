const { Telegraf } = require('telegraf');
const { help } = require('./src/config.help.js');
const { faq } = require('./src/faq.js');

const bot = new Telegraf('6109298874:AAGpc7DJWTmHEX4SuUhohD0CjgN4Gwdcxc8');

help(bot)
faq(bot)

bot.action('not_found', ctx => {
    ctx.answerCbQuery('Hali mavjud emas!')
})

// bot.launch();

exports.handler = (event, context, callback) => {
    const tmp = JSON.parse(event.body);
    bot.handleUpdate(tmp);

    return callback(null, {
        statusCode: 200,
        body: ''
    })
}