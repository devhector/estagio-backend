
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('navers').del()
    .then(function () {
      // Inserts seed entries
      return knex('navers').insert([
        {
          id: 1,
          name: 'hector',
          birthdate: '1993-11-03',
          admission_date: '2021-04-12',
          job_role: 'Desenvolvedor'
        },
        {
          id: 2,
          name: 'Fulano',
          birthdate: '1995-08-07',
          admission_date: '2020-02-11',
          job_role: 'Desenvolvedor'
        },
        {
          id: 3,
          name: 'Ciclano',
          birthdate: '1999-09-23',
          admission_date: '2018-11-12',
          job_role: 'Desenvolvedor'
        }        
      ]);
    });
};
