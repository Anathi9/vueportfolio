import { createStore } from 'vuex'
const dataUrl = 'https://anathi9.github.io/portfolio_Data/data/'

export default createStore({
  state: {
    about: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null,
  },
  getters: {
  },
  mutations: {
    setAbout(state, value) {
      state.about = value
    },
    setEducation(state, value) {
      console.log('valueee');
      console.log(value);
      state.education = value
    },
    setSkills(state, value) {
      state.skills = value
    },
    setTestimonials(state, value) {
      state.testimonials = value
    },
    setProjects(state, value) {
      state.projects = value
    }
  },
  actions: {
    async fetchProjects(context){
      let res = await fetch(dataUrl)
      let {projects} = await res.json()
      context.commit('setProjects', projects)
    },
    async fetchEducation(context) {
      let{education} = await (await fetch(dataUrl)).json()
      context.commit('setEducation', education)
    },
    async fetchSkills(context) {
      let{skills} = await (await fetch(dataUrl)).json()
      console.log(skills);
      context.commit('setSkills', skills)
    },
    async fetchTestimonials(context) {
      let{testimonials} = await (await fetch(dataUrl)).json()
      console.log(testimonials);
      context.commit('setTestimonials',testimonials )
    }
  },
  modules: {
  }
})
