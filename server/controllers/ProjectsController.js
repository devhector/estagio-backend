const knex = require("../database");


module.exports = {

    async index(request, response, next) {

        try {
            
            const projects = await knex('projects');
            let results = [];

            for(let i = 0; i < projects.length; i++){
                results.push({
                    id: projects[i].id,
                    name: projects[i].name
                });
            }
            
            return response.json(results);

        } catch (error) {

            next(error);
            
        }

        
    },

    async store(request, response, next){

        try {

            const {	name, navers } = request.body;
    
            const project = await knex('projects').insert({ name }).returning(['id']);

            for(let i = 0; i < navers.length; i++){
                await knex('projects_navers').insert({
                    naver_id: navers[i],
                    project_id: project[0].id
                });
            }

            return response.status(201).json({
                id: project[0].id,
                name
            });

        } catch (error) {
            
            next(error);

        }

    },

    async show(request, response, next){

        try {

            const { id } = request.params;

            let projects = await knex('projects').where('id', id);

            const project = {
                id: projects[0].id,
                name: projects[0].name
            } 

            let navers = await knex('projects_navers')
                .select(
                    "navers.id", 
                    "navers.name", 
                    "navers.birthdate", 
                    "navers.admission_date", 
                    "navers.job_role"
                    )
                .innerJoin("navers", "navers.id", "projects_navers.naver_id")
                .innerJoin("projects", "projects.id", "projects_navers.project_id")
                .where("projects.id", id);


            for(let i = 0; i < navers.length; i++){

                navers[i].birthdate = new Date(navers[i].birthdate).toISOString().slice(0,10);
                navers[i].admission_date = new Date(navers[i].admission_date).toISOString().slice(0,10);

            }

            project.navers = navers;

            return response.json(project);
            
        } catch (error) {

            next(error);
            
        }

    }

}