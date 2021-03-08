const knex = require("../database");


module.exports = {

    async index(request, response, next) {

        try {
            
            const navers = await knex('navers');
            let results = [];

            for(let i = 0; i < navers.length; i++){

                navers[i].birthdate =  new Date(navers[i].birthdate).toISOString().slice(0,10);
                navers[i].admission_date = new Date(navers[i].admission_date).toISOString().slice(0,10);
                
                results.push({
                    id: navers[i].id,
                    name: navers[i].name,
                    birthdate: navers[i].birthdate, 
                    admission_date: navers[i].admission_date,
                    job_role: navers[i].job_role
                });
                
            }
    
            return response.json(results);

        } catch (error) {

            next(error);
            
        }

        
    },

    async store(request, response, next){

        try {

            const {	name, birthdate, admission_date, job_role, projects } = request.body;
    
            const navers = await knex('navers').insert({
                name, 
                birthdate, 
                admission_date,
                job_role
            }).returning(['id']);

            let naver = navers[0];

            for(let i = 0; i < projects.length; i++){
                await knex('projects_navers').insert({
                    naver_id: naver.id,
                    project_id: projects[i]
                });
            }

            return response.status(201).json({
                id: naver.id,
                name,
                birthdate,
                admission_date,
                job_role,
                projects
            });

        } catch (error) {
            
            next(error);

        }

    },

    async show(request, response, next){

        try {

            const { id } = request.params;

            let navers = await knex('navers').where('id', id);

            let {birthdate, admission_date} = navers[0];

            navers[0].birthdate =  new Date(birthdate).toISOString().slice(0,10);
            navers[0].admission_date = new Date(admission_date).toISOString().slice(0,10);


            const naver = {
                id: navers[0].id,
                name: navers[0].name,
                birthdate: navers[0].birthdate,
                admission_date: navers[0].admission_date,
                job_role: navers[0].job_role
            } 

            naver.projects = await knex('projects_navers')
                .select("projects.id", "projects.name")
                .innerJoin("navers", "navers.id", "projects_navers.naver_id")
                .innerJoin("projects", "projects.id", "projects_navers.project_id")
                .where("navers.id", id);

            return response.json(naver);
            
        } catch (error) {

            next(error);
            
        }

    }

}