
exports.up = function(knex) {//criação da tabela
    return knex.schema.createTable('incidents',function(table){//cria a tabela
      table.increments();//chave primária com incremento

      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();

      table.string('ong_id').notNullable();

      table.foreign('ong_id').references('id').inTable('ongs');//chave estrangeira da tabela ong
    })
  };
  
  exports.down = function(knex) {//deleta a tabela
    return knex.schema.dropTable('incidents');
  };
  