
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          name: "Projeto Ótimo"
        },
        {
          id: 2,
          name: "Projeto revolucionário"
        },
        {
          id: 3,
          name: "Projeto inovador"
        }
      ]);
    });
};
