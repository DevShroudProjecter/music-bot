 const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "bot",
  aliases: ["b"],
  cooldown: 6,
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
   .setTitle(`**Info Mamusic**`)
   
    
    .addField("`my name`", `**MaMusic#0353**`, true)

    .addField("`My ID`",  `**855819588263215144**`, true)
    
    .addField( "`My Prefix` ",`**$**`,true)
    
    .addField("`Node.js Version`",  `**12**`, true)
    
    .addField("`Language Program`",  `**Java Script**`, true)
    
    .addField("`Discord.js `",  `**12.5.1**`, true)
    
    .addField( "`developer bot` ",`<@852931071179751514>`,true)
    
   
    
   
   
    .setDescription(`
\`ONLINE BOT\`
`)
    
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);

  }
};
