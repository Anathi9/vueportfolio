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
      console.log(education);
      context.commit('setEducation', education)
    }
  },
  modules: {
  }
})
