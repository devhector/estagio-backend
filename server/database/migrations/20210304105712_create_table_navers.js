
exports.up = knex => knex.schema.createTable('navers', table => {

    table.increments('id');
    table.text('name').notNullable();
    table.date('birthdate').notNullable();
    table.date('admission_date').notNullable();
    table.text('job_role').notNullable();

});

exports.down = knex => knex.schema.dropTable('navers');
