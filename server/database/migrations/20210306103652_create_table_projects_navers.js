
exports.up = knex => knex.schema.createTable('projects_navers', table => {

    table.increments('id').primary();
    table.integer('naver_id').references('id').inTable('navers').notNullable();
    table.integer('project_id').references('id').inTable('projects').notNullable();

});

exports.down = knex => knex.schema.dropTable('projects_navers');
