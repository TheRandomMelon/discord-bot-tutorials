var Discordie = require("discordie");
var client = new Discordie();

client.connect({
    token: "Mjc4Njk5NzM4MDk2OTkyMjU2.C4p7bA.RKUdgp3UX91Gbv2Dvj1j9d_vq7Q"
});

client.Dispatcher.on("GATEWAY_READY", e => {
    console.log("Username: " + client.User.username);
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
    if (e.message.content === "*ping") {
        e.message.channel.sendMessage("Pong!");
    } else if (e.message.content === "*meme") {
        e.message.channel.sendMessage("dank");
    }
});