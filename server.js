const tmi = require("tmi.js");
require("dotenv").config();

var Filter = require("bad-words"),
  filter = new Filter();

const client = new tmi.Client({
  options: { debug: true },
  connection: { reconnect: true },
  identity: {
    username: process.env.TWITCH_USERNAME,
    password: process.env.TWITCH_OAUTH_TOKEN,
  },
  channels: [process.env.TWITCH_USERNAME],
});

client.connect();

var lists = filter.list;

client.on("message", (channel, tags, message, self) => {
  // Ignore echoed messages.
  if (self) return;
  console.log(message);

  if (message.toLowerCase() === "!selam" || message.toLowerCase() === "!sa") {
    client.say(channel, `@${tags.username} selam`);
  }

  if (message.toLowerCase() === "!ping") {
    client.say(channel, `@${tags.username} Pong!`);
    console.log(message);
  }

  if (
    message.toLowerCase() === "!temizle" &&
    tags.username === process.env.TWITCH_USERNAME
  ) {
    client.clear(process.env.TWITCH_USERNAME);
  }

  if (lists.find((word) => word === message.toLowerCase())) {
    client.say(channel, `@${tags.username} küfür etme`);

    client.ban(
      process.env.TWITCH_USERNAME,
      tags.username,
      `${message} mesajınız yüzünden ban yediniz.`
    );

    client.deletemessage(process.env.TWITCH_USERNAME, message.id);
  }
});
