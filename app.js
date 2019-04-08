// Load up the discordjs library
const Discord = require("discord.js");
const dl = require('discord-leveling');
const ytdl = require('ytdl-core');
let broadcast;


// This is your client. Some people call it `bot`, some people call it `self`,
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();
const token = process.env.token;

// Here we load the config.json file that contains our token and our prefix values.
const config = require('./config.json');
// config.token contains the bot's token
// config.prefix contains the message prefix.
const PREFIX = "=" // bot's prefix

var SourceQuery = require('sourcequery');






var emoji = [ // sets the answers to an emoji
  "😂",
  "🎉",
  "👌",
  "🙏",
  "👀",
]






var eightball = [ // sets the answers to an eightball
  ":8ball: | Yes!",
  ":8ball: | No.",
  ":8ball: | Maybe.",
  ":8ball: | Probably!",
  ":8ball: | I don't think so.",
  ":8ball: | Maybe.",
]

const fs = require('fs');


const activities_list = [
    "with OzDog | =help", 
    "with Archer | =help",
    "with Alan | =help", 
    "with Camp | =help"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
	  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index], { type: "STREAMING", url: "https://www.twitch.tv/somethingluulop"}); // sets bot's activities to one of the phrases in the arraylist.
    }, 5000); // Runs this every 10 seconds.
});




client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;

  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Let's go with a few common example commands! Feel free to delete or change those.


	  //When someone sends a message add xp
  var profile = await dl.Fetch(message.author.id)
  dl.AddXp(message.author.id, 10)
  //If user xp higher than 100 add level
  if (profile.xp + 10 > 90) {
    await dl.AddLevel(message.author.id, 1)
	      var Role = message.guild.roles.find(x => x.name === "Legend")
    message.member.addRole(Role)


  }
	
	
	
  if(command === "coins") {
	  
	var user = message.mentions.users.first() || message.author
 
    var output = await dl.Fetch(user.id)
	  
	  
    let myembed = new Discord.RichEmbed()
    .setTitle(`${message.member.user.tag}` + "'s current coins!", message.author.avatarURL)
    .setAuthor("Astro Bot", "https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
    .setColor('RANDOM')
    .setDescription(`${output.xp}`)
    .addField('Your reward:', 'In order to get the ``Legend`` role you will need to reach 100 coins.')
    .setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_59bf7b4460bd03dae629af84a9c96198.gif")
    .setThumbnail("https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
    message.channel.send(myembed)
	  
	              .then(function (message) {
              message.react(emoji[Math.floor(Math.random() * emoji.length).toString(16)])
            }).catch(function() {
              //Something
             })
 }
	

 

  
 

    
	
	
	
	
	
	if (command === 'discordupdate') {
		
		 
		if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permission to use this command.')
		
		let testembed = new Discord.RichEmbed()
		.setTitle('Discord Update')
		.setDescription('- ' + args.join(" "))
		.setColor('#4295f4')
		.setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_59bf7b4460bd03dae629af84a9c96198.gif")
		
		message.delete().catch(O_o=>{});
		
		message.channel.send(testembed)
	};
	
	

	
	
	
		if (command === 'darkrpupdate') {
		
		 
		if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permission to use this command.')
		
		let testembed = new Discord.RichEmbed()
		.setTitle('MilitaryRP Update')
		.setDescription('- ' + args.join(" "))
		.setColor('#f570f9')
		.setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_59bf7b4460bd03dae629af84a9c96198.gif")
		
		message.delete().catch(O_o=>{});
		
		message.channel.send(testembed)
	};
	
	
	

  
	
	
	
	
	
	
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    message.channel.send(sayMessage);
  };
  
  

	
	
	

if(command === 'poll') {



if (!args[1]) return message.channel.send('Proper Usage: `=poll <text> (Atleast two words is needed.)`')


let embed = new Discord.RichEmbed()
	.setColor('RANDOM')
	.setAuthor("Astro Bot", "https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
	.addField("|   " + args.join(' ') + "   |", 'React to vote!')
	.setDescription(`Poll Created By ${message.member.user.tag}`)
	.setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_59bf7b4460bd03dae629af84a9c96198.gif")
    	.setThumbnail("https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
	
	let msg = await message.channel.send(embed)
	
	
            .then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             })
	
	message.delete({timeout: 1000})};
	

	
if(command === 'suggest') {


	
if (!args[1]) return message.channel.send('Proper Usage: `=suggest <suggestion>(Atleast two words in the suggestion is needed)`')


let sugembed = new Discord.RichEmbed()
	.setAuthor('Suggestion Created By: ' + `${message.member.user.tag}`, message.author.avatarURL)
	.setDescription(args.join(' '))
	.setColor('RANDOM')
	.setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_59bf7b4460bd03dae629af84a9c96198.gif")
    	.setThumbnail("https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
	.setTimestamp()

    let sugchannel = message.guild.channels.find(`name`, "suggestions")
    if(!sugchannel) return message.channel.send("Can't find suggestions channel")

    sugchannel.send(sugembed)


	
	
            .then(function (message) {
              message.react("✅")
              message.react("❌")
            }).catch(function() {
              //Something
             })};
	
	

	if(command === 'suggest') {


	
if (!args[1]) return message.channel.send('')
		
	message.channel.send('Thank you for your suggestion!')};

	
	
	
	

	
	
	
	
  
	
	      if(command === 'players') {
  
  var sq = new SourceQuery(1000); // 1000ms timeout
sq.open('51.89.128.98', 27016);
 


 
sq.getPlayers(function(err, players){
    let myembed = new Discord.RichEmbed ()
    let playersString = "";
    players.forEach(ply => {
        playersString += ply.name + '\n';
    })
    myembed.setTitle("Players Currently Online:")
    myembed.setAuthor("Astro Bot", "https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
    myembed.setDescription(playersString)
    myembed.addField('Total Players Online:', players.length + '/35')
    myembed.setColor('RANDOM')
    myembed.setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_59bf7b4460bd03dae629af84a9c96198.gif")
    myembed.setThumbnail("https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
    myembed.setTimestamp()	
    message.channel.send(myembed);
})};
	
	
	 if (command === "join") {
		 if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permission to use this command.')
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      // check if there is already a voice connection
      if (message.member.voiceChannel.connection) {
        console.log('conn status: ' + message.member.voiceChannel.connection.status);
      }
      console.log('is joinable: ' + message.member.voiceChannel.joinable);
      if (message.member.voiceChannel.joinable) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            message.reply('I have successfully connected to the channel!');
          })
          .catch(console.error);
      }
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
	
	
	
	


        if (command === 'play') {

            if (!args[0]) return message.channel.send('Sorry, please input a url following the command.');
            async function validate(url){
                return await ytdl.validateURL(url);
            }
            let valid = validate(args[0]);
            if (!valid) return message.channel.send('Sorry, please input a **valid** url following the command.');
            
            async function run(message, url){
                let connection = message.member.voiceChannel.join().then(async (e)=>{
                    let stream = ytdl(url, { filter: 'audioonly' });
                    if (!broadcast) {
                        broadcast = client.createVoiceBroadcast();
                        e.playBroadcast(broadcast);
                    }
                    stream.on('error', console.error); 

                   let startStream = await e.playStream(stream, {volume:0.5})
     
                });
                message.channel.send(`Now playing a song`);    
            }
            run(message, args[0]);
    
        }
	
        






	
	
	

	
  
  
      if(command === 'server') {
  
  var sq = new SourceQuery(1000); // 1000ms timeout
sq.open('51.89.128.98', 27016);
 


 
sq.getInfo(function(err, info){
    let myembed = new Discord.RichEmbed ()
	.setTitle("DarkRP Server Information:")
	.setAuthor("Astro Bot", "https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
    .setColor('RANDOM')
    .addField("Players:", info['players'] + "/35")
    .addField("Map:", info['map'])
    .addField("Gamemode:", "MilitaryRP")
    .setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_59bf7b4460bd03dae629af84a9c96198.gif")
    .setThumbnail("https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
    .setTimestamp()
     message.channel.send(myembed)
});
 
 };
  
    
if(command === "avatar") {
var member = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setImage(message.author.avatarURL)
    message.channel.send(embed)
  }

	
  	

	
	
	
	
	

  
 



  if(command === "info") {
    let myembed = new Discord.RichEmbed()
    .setTitle('Information!')
    .setAuthor("Astro Bot", "https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
    .setColor('RANDOM')
    .setDescription('This is information about the DarkRP Server, and the Discord Server!')
    .addField(':robot: Astro Bot:', 'In order to see the commands avaliable, type `=help`! ')
    .addField(':dog: Discord Server:', 'If you see any errors within the discord server that needs fixing, contact a member of the DMT! `(Discord Moderation Team)`. ')
    .addField(':moneybag: Server:', 'If you need any assistance from the In-game staff members, simply type ``@CRUSHED Staff Team <message>`` to get assistance! ')
    .setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_59bf7b4460bd03dae629af84a9c96198.gif")
    .setThumbnail("https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
    message.channel.send(myembed)
 }
 
 
   if(command === "forums") {
    let myembed = new Discord.RichEmbed()
    .setTitle('Forums!')
    .setAuthor("Astro Bot", "https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
    .setColor('RANDOM')
    .setDescription('https://astronetworksmrp.mistforums.com/')
    .setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_59bf7b4460bd03dae629af84a9c96198.gif")
    .setThumbnail("https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
    message.channel.send(myembed)
 }
 
 
    if(command === "donate") {
    let myembed = new Discord.RichEmbed()
    .setTitle('Donate!')
    .setAuthor("Astro Bot", "https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
    .setColor('RANDOM')
    .setDescription('https://astronetworksmrp.mistforums.com/donate')
    .setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_59bf7b4460bd03dae629af84a9c96198.gif")
    .setThumbnail("https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
    message.channel.send(myembed)
 }
 
 

  

    // Variables
    let servers = client.guilds.size; // Server Count
    let users = 0; // Start of user count
    let channels = client.channels.size; // Channel Count
    
    // This goes through every guild to grab an accurate memberCount;
    client.guilds.map(g => users += g.memberCount);
    
    // Form Embed
	if(command == "stats")
{
    let myembed = new Discord.RichEmbed()
        .setTitle('Server Statistics')
    	.setColor('RANDOM')
        .addField('Users ', users)
        .addField('Channels ', channels)
        .setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_59bf7b4460bd03dae629af84a9c96198.gif")
    	.setThumbnail("https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
    	message.channel.send(myembed)
    
};
	
	
	
if(command == "coinflip")
{
      function doRandHT() {
var rand = ['HEADS!','TAILS!'];

return rand[Math.floor(Math.random()*rand.length)];
}
    let myembed = new Discord.RichEmbed()
    .setTitle('You got..')
    .setAuthor("Astro Bot", "https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
    .setColor('RANDOM')
    .setDescription(doRandHT())
    .setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_59bf7b4460bd03dae629af84a9c96198.gif")
    .setThumbnail("https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png"")
    message.channel.send(myembed)
 };

	
if(command === "ip") {
let myembed = new Discord.RichEmbed()
.setAuthor("Astro Bot", "https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
.setColor('RANDOM')
.addField("Server IP:", "steam://connect/51.89.128.98:27016")
.setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_59bf7b4460bd03dae629af84a9c96198.gif")
.setThumbnail("https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
message.channel.send(myembed)
};
	

  
  if (command == "cookie") { // creates the command cookie
    if (args[0]) message.channel.send(message.author.toString() + " has given " + args[0].toString() + " a cookie! :cookie:") // sends the message saying someone has given someone else a cookie if someone mentions someone else
    else message.channel.send("Who do you want to give a cookie to? :cookie: (Correct usage: =cookie @username)") // sends the error message if no-one is mentioned
}

if (command == "8ball") { // creates the command 8ball
  if (args[0] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)])
	 
            .then(function (message) {
              message.react("🎱")
            }).catch(function() {
              //Something
             }); // if args[1], post random answer
  else message.channel.send("Ummmm, what is your question? :8ball: (Correct usage: =8ball <question>)"); // if not, error


}




  if(command === "help") {
     let myembed = new Discord.RichEmbed()
     .setTitle('Commands')
     .setAuthor("Astro Bot", "https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
     .setColor('RANDOM')
     .setDescription('These are all the commands that you can currently use on the bot. | ***More will be coming soon!***')
     .addField(':smile: Fun Commands:', '`=say, =8ball, =coinflip, =avatar` ')
     .addField(':moneybag: Server Commands:', '`=server, =players, =ip, =forums, =donate, =suggest` ')
     .addField(':gear: Discord Server Commands:', '`=ping, =info, =stats,=coins` ')
     .setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_59bf7b4460bd03dae629af84a9c96198.gif")
     .setThumbnail("https://cdn.discordapp.com/attachments/564804848818716682/564904592597450767/ANnewtest.png")
     message.channel.send(myembed)
  };


	


})




client.login(token).catch(err => console.log(err));
