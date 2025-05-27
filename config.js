require('dotenv').config();

module.exports = {
    token: process.env.DISCORD_TOKEN,
    clientid: process.env.CLIENT_ID,
    guildid: process.env.GUILD_ID,
    ownerid: process.env.OWNER_IDS.split(','), // Converts comma-separated string into an array
    webhook: process.env.WEBHOOK_URL
};
