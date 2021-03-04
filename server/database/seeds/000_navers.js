
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('navers').del()
    .then(function () {
      // Inserts seed entries
      return knex('navers').insert([
        {
          name: 'hector',
          birthdate: '1993-11-03',
          admission_date: '2021-04-12',
          job_role: 'Desenvolvedor'
        }
      ]);
    });
};
