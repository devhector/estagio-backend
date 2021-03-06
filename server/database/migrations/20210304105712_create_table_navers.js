
exports.up = knex => knex.schema.createTable('navers', table => {

    table.increments('id');
    table.string('name').notNullable();
    table.string('job_role').notNullable();
    table.date('birthdate').notNullable();
    table.date('admission_date').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

});

exports.down = knex => knex.schema.dropTable('navers');
