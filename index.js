const expres = require('express');
const TelegramBot = require("node-telegram-bot-api");
const { tikTok_converter } = require("./controller/tikTok");
const {appConfig} = require('./config/index');

const app = expres();

const bot = new TelegramBot(appConfig.token, { polling: true });

bot.on('message', async (message) => {
    const name = message.from.first_name;
    const chatId = message.chat.id

    if (message.text == "/start") {
        return await bot.sendMessage(chatId, `Assalomu alaykum ${name}. Bu botga Tik-Tok dan link jo'nating va video tarzida qaytarib oling.`);
    }

    const video_link = await tikTok_converter(message.text);

    try {
        await bot.sendVideo(chatId, video_link);
    } catch (error) {
        console.log(error);
    }

    // app.listen(appConfig.port, () => {
    //     console.log(`Server started ${appConfig.port}...`);
    // })

    return bot.sendMessage(chatId, `Kechirasiz belgilanmagan buyruqni kiritdingiz!`)


});
