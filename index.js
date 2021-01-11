const Discord = require('discord.js')
const client = new Discord.Client();
const fs = require('fs');

const G = fs.readFileSync('g.dat', 'utf8').split('\r\n');
const M = fs.readFileSync('m.dat', 'utf8').split('\r\n');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }

generateResponse = function() {
    return G.random().capitalize() + " " + M.random().capitalize() + "!";
}

client.on('message', msg =>{
    if(msg.content.toLowerCase() === 'gm')
        msg.reply(generateResponse());
});

client.login('') // Enter your token here!