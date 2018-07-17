const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "/";

Client.on('ready', ()=>{
    console.log("Bot Is Online!");
})

var Playing = "/help | Beta v1.1.0 | by:MilkLegend";

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "hello")){
    message.channel.send("Hello.");

}


})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;
    
    if(message.content.startsWith(prefix + "help")){
    message.channel.send("The Bot is currently in Beta mode v1.1.0, please contact MilkLegend if there are any issues with the bot.");

}


})
 
Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;
    if(message.content.startsWith(prefix + "userinfo")){
 message.delete(message.content);
 var mm = message.mentions.members.first();
 if (!mm) return message.reply("you need to mention a user");
 var embed = new Discord.RichEmbed()

 .setTitle(mm.displayName + "'s userinfo", true)
 .addBlankField()
 .addField("Username: " + mm.user.username + " #" + mm.user.discriminator, "Users username.",)
 .addField("**Nickname: **" + mm.nickname, "Nickname in current server.",)
 .addField("Id: " + mm.id, "Users ID.",)
 .addField("Mute: " + mm.selfMute, "Selfmute",)
 .addField("Deaf: " + mm.selfDeaf, "Selfdeaf",)
 .addField("Created: " + mm.user.createdAt, "The date the accout was made.",)
 .addBlankField()
 .addField("This server: " + mm.guild.name, "------------------------------------" ,)

 .addField("Voice channel: " + mm.voiceChannel, "Channel ID: " + mm.voiceChannelID,)
 .addField("Server muted: " + mm.serverMute, "Muted in the current server.",)
 .addField("Server defend: " + mm.serverDeaf, "Deaf in the current server.",)
 .addField("Muted: " + mm.mute, "User muted in any way.",)
 .addField("Deaf: " + mm.deaf, "User defand in any way.",)
 .addField("Joined server: " + mm.joinedAt, "When the user joinned the current server.",)
 .addBlankField()
 .addField("Users avatar:", "Profile picture:",)
 .setTimestamp()

 .setImage(mm.user.avatarURL)
 .setColor(0x00ffff)
 message.channel.send(embed);
    }

})

Client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to the server, ${member}`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Your are the member', `${member.guild.memberCount}`)
        .addField("Name", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true )
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

Client.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

Client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'welcome-leave');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Name:', `${member}`)
        .addField('Has Let the Server', ';(')
        .addField('Bye Bye :(', 'We will all miss you!')
        .addField('The server now as', `${member.guild.memberCount}` + " members")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

Client.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
    console.log("Leave Message Sent")
});

Client.on("message", function(message) {
    if (message.author.equals(Client.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
        message.channel.send("Pong!");
        break;
        case "poll":
       const agree = "✅";
       const disagree = "❎";
 


 if(!args[1]) return message.channel.send("You need to type what you want the poll to be about!")
 message.delete()

 var POLL = new Discord.RichEmbed()
 .setTimestamp()
 .setThumbnail("https://i.imgur.com/N65zUec.png%22")
 .setAuthor(message.author.username, message.author.avatarURL)
 .setColor("RANDOM")
 .setFooter("Vote by reacting!")
 .setDescription(message.content.slice(5))

 message.channel.send(POLL).then(m => {m.react(agree);
 m.react(disagree)
 }) 
    }
});

exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
    await message.reply("Bot is shutting down.");
      client.commands.forEach( async cmd => {
       await client.unloadCommand(cmd);
      });
      process.exit(1);
    };
    
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: "Bot Admin"
    };
    
    exports.help = {
      name: "reboot",
      category: "System",
      description: "Shuts down the bot. If running under PM2, bot will restart automatically.",
      usage: "reboot"
    };

    exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
        const msg = await message.channel.send("Ping?");
              msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
            };    

            exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
                if (!args || args.length < 1) return message.reply("Must provide a command to reload. Derp.");
                            
                              let response = await client.unloadCommand(args[0]);
                              if (response) return message.reply(`Error Unloading: ${response}`);
              
              
                              response = client.loadCommand(args[0]);
                              if (response) return message.reply(`Error Loading: ${response}`);
                            
                              message.reply(`The command \`${args[0]}\` has been reloaded`);
                            };
                            
                            exports.conf = {
                              enabled: true,
                              guildOnly: false,
                              aliases: [],
                              permLevel: "Bot Admin"
                            };
                            
                            exports.help = {
                              name: "reload",
                              category: "System",
                              description: "Reloads a command that\"s been modified.",
                              usage: "reload [command]"
                            };

Client.login("NDYwMDgwNjY5MTQ2NjExNzIy.DhMpYA.w_y0eBU1gbCwNPY0G8YysFXJaY0");