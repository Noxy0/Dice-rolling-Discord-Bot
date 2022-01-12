import DiscordJS, { Guild, Intents, Message } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()


const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('The bot has connected')
})

//What the bot reply to !roll
client.on('messageCreate', (Message) => {
    if (Message.content === '!roll') {
            //A script for rolling the dices, and checking if dices rolled a 7 or 11. If then the player win, else the player lose.
            let dice1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
            let dice2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
                console.log('The dices rolled!');
        
            Message.reply({
                content: 'The dices rolled: \n' + dice1 + '\n' + dice2 
            })
        
            if ((dice1 + dice2 == 7) || (dice1 + dice2 == 11)) {
                Message.reply({
                    content: 'You win!'
                })
                   console.log('Player win');
            }
            else {
                Message.reply({
                    content: 'You lose!'
                })
                    console.log('player lose');
            }
    }
})

client.on('messageCreate', (Message) => {
    if (Message.content === 'p!help') {
        Message.reply({
            content: 'In order to roll the dices, you have to type !roll. \nThe rules of the game: \nYou type !roll and the bot will roll to dices. One dice can roll 1-6 eyes, so for to it will be 2-12. If the dices show 7 or 11, the player win. Ohterwise the player lose.',
        })
    }
})

// Here we send a message to the server when the bot joins, the message tells information about the bot.
client.on('guildCreate', guild => {
    guild.systemChannel?.send(`Hello, I'm Slice! I am a master at rolling dices, type !roll to see for yourself! ohterwise type p!help for help`)
})

client.login(process.env.TOKEN)