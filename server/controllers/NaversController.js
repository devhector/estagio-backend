const knex = require("../database");


module.exports = {

    async index(request, response) {

        const results = await knex('navers');

        return response.json(results);
        
    },

    async store(request, response){

        const {	name, birthdate, admission_date, job_role } = request.body;

        await knex('navers').insert({
            name, 
            birthdate, 
            admission_date,
            job_role
        })

        return response.json({
            message: "Registered Navers"
        });

    }

}