
exports.faq = (bot) => {
    bot.on('inline_query', (ctx) => {
        ctx.answerInlineQuery([
            {
                type: 'article',
                id: '1',
                title: "Keyinroq harakat qiling",
                input_message_content: {
                    message_text: `mavjud emas!`
                },
                description: "Hali hech qanday ma'lumot mavjud emas"
            }
        ])
    })
}