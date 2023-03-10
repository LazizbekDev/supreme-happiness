const { Telegraf } = require('telegraf');
const express = require('express');
const { config } = require('dotenv');
const { help } = require('./src/config.help.js');
const { faq } = require('./src/faq.js');

config();
const app = express();
const TOKEN=process.env.TOKEN
const PORT=process.env.PORT||5000

app.use(express.json());

const bot = new Telegraf(TOKEN);

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

app.post('/', (req, res) => {
    res.status(200).json({
        status: "OK",
        server: "ON"
    })
})

if(process.env.NODE_ENV === "PRODUCTION"){
    bot.launch({
        webhook:{
            domain: process.env.DOMAIN,// Your domain URL (where server code will be deployed)
            port: PORT
        }
    }).then(() => {
        console.info(`The bot ${bot.botInfo.username} is running on server`);
    });
} else { // if local use Long-polling
    bot.launch().then(() => {
        console.info(`The bot ${bot.botInfo.username} is running locally`);
    });
}