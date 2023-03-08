exports.message = `<i>Assalomu Alaykum, Bu yerda mening ijtimoiy tarmoqdagi sahifalarimni ko'rishingiz mumkin</i>`

exports.help = (bot) => {
    bot.command(['start', 'help'], (ctx) => {
        ctx.replyWithHTML(this.message, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {text: "Instagram", url: "instagram.com/kasimxojayeva/"},
                        {text: "Telegram", url: "https://t.me/NAILIYAA"}
                    ],
                    [{text: "Facebook", callback_data: "not_found"}],
                    [{text: "Tez-tez beriladigan savollar", switch_inline_query_current_chat: ""}]
                ]
            }
        })
    })
}