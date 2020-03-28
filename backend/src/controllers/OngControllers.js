const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(request, response) {
    const ongs = await connection("ongs").select("*");

    response.json(ongs);
  }, 
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString("HEX"); //CRIA UMA COMBINAÇÃO HEXADECIMAL DE 4 BYTES
    await connection("ongs").insert({
      name,
      id,
      email,
      whatsapp,
      city,
      uf
    });
    return response.json({ id });
  }
};
