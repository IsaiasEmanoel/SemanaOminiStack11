
exports.up = function(knex) {//criação da tabela
  return knex.schema.createTable('ongs',function(table){//cria a tabela
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();//tamanho do texto armazenado(2)
  })
};

exports.down = function(knex) {//deleta a tabela
  return knex.schema.dropTable('ongs');
};
