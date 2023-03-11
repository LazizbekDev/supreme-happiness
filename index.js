const { Telegraf } = require('telegraf');
const express = require('express');
const { config } = require('dotenv');
const { help } = require('./src/config.help.js');
const { faq } = require('./src/faq.js');

config();
const app = express();

app.use(express.json());

const bot = new Telegraf(process.env.TOKEN);

help(bot)
faq(bot)

bot.action('not_found', ctx => {
    ctx.answerCbQuery('Hali mavjud emas!')
})

app.get('/', (req,res) => {
    res.status(200).json({
        status: "OK",
        server: "ON"
    })
})

// bot.launch();

app.listen(5000, () => {
    console.log('server running')
})