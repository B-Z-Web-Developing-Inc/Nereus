const Nereus = require("./Nereus");
const CommandHandler = require("./command/CommandHandler");
const SocketHandler = require("./network/raknet/SocketHandler");

class Server {

	constructor() {
		this.maxPlayers = 20;
		this.players = [];
		this.motd = "Beta";
		console.log("This server is running Nereus v" + Nereus.VERSION + " " + Nereus.CODENAME + " targeting API version " + Nereus.API + "!");
		this.raknet = new SocketHandler(this, "192.168.254.84", 19132);
		this.commandHandler = new CommandHandler(this);
	}

	getMaxPlayers() {
		return this.maxPlayers;
	}

	getOnlinePlayers() {
		return this.players;
	}

	getMotd() {
		return this.motd;
	}

}

module.exports = Server;
