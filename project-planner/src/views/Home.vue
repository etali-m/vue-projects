<template>
    <div class="home">
        <FilterNav @filterChange="current = $event" :current="current"/> 
        <div v-if="projects.length">
            <div v-for="project in filteredProjects" :key="project.id">
                <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />
            </div>
        </div>
    </div>
</template>

<script>
import SingleProject from '@/components/SingleProject.vue';
import FilterNav from '@/components/FilterNav.vue';

export default {
    components : {SingleProject, FilterNav},
    data() {
        return {
            projects : [],
            current : 'all',
        }
    },
    mounted() {
        fetch('http://localhost:3000/projects')
        .then(res => res.json())
        .then(data => this.projects = data)
        .catch(err => console.log(err))
    },
    methods: {
        handleDelete(id) {
            //effacer la projet du tableau simplement en filtrant
        this.projects = this.projects.filter(project => {
            return project.id !== id
        })
        },
        handleComplete(id) {
            //Mettre à jour la liste projects avec la valeur modifiée
            let p = this.projects.find(project => {
                return project.id === id
            })
            p.complete = !p.complete 
        },
    },
    computed : {
        /* Un tableau qui contient les projets filtré par l'utilisateur */
        filteredProjects() {
            if (this.current === 'completed') {
                return this.projects.filter(project => project.complete)
            }
            if (this.current === 'ongoing') {
                return this.projects.filter(project => !project.complete)
            } 
            return this.projects
        },
    },
}

</script>

<style>

</style>
