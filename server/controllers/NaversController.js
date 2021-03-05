const knex = require("../database");


module.exports = {

    async index(request, response) {

        const results = await knex('navers');

        return response.json(results);
        
    },

    async store(request, response, next){

        try {

            const {	name, birthdate, admission_date, job_role } = request.body;
    
            const naver = await knex('navers').insert({
                name, 
                birthdate, 
                admission_date,
                job_role
            }).returning(['id', 'name', 'birthdate', 'admission_date', 'job_role']);
    
            return response.status(201).json(naver);
            
        } catch (error) {
            
            next(error);

        }

    }

}