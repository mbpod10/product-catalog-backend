const mongoose = require("../dbs/connection");

const IPSchema = new mongoose.Schema({
  IPaddress: String,
  server: String,
});

const IP = mongoose.model("ipAddresses", IPSchema);
module.exports = IP;
