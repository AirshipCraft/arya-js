const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("status")
    .setDescription("Checks status of the Minecraft server."),
  async execute(interaction) {

    let url = `http://mcapi.us/server/status?ip=play.airshipcraft.tk&port=25565`;
		
		(async () => {
			try {
				const { online, players } = await fetch(url).then(response => response.json());

				let status = "Offline"
				let color = 16711680
				if (online) {
					status = "Online";
					color = 65280
				}

				const embed = {
					"author": {
					"name": `AirshipCraft Server Status`,
					"url": `https://www.airshipcraft.tk/home`,
					"icon_url": `https://raw.githubusercontent.com/notzune/arya-bot/main/%20server-icon.png?token=GHSAT0AAAAAABZGGBIQSLOUBE5YBSGJVM76Y63CX6A`
					},
					"color": color,
					"fields": [
					{
						"name": "Status:",
						"value": status,
						"inline": true
					},
					{
						"name": "Players Online:",
						"value": `**${players.now}** / **${players.max}**`,
						"inline": true
					}
					],
					"footer": {
					"text": `IP: play.airshipcraft.tk, Port: 25565`
					}
				};
				await interaction.reply({ embeds: [embed] });

			} catch (error) {
				console.log(error);
				return interaction.reply('Error while getting Minecraft server status...');
			}
        })();
  },
};