const mongoose = require("../dbs/connection");

const IPSchema = new mongoose.Schema({
  address: String,
});

const IP = mongoose.model("ipAddresses", IPSchema);
module.exports = IP;
