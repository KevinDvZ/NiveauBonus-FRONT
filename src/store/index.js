import { createStore } from 'vuex'
import { fastRequire } from './fastRequire';

export default createStore({
  state: {
    boutonsMenu: [
      {
        ordre:1,
        intitule:"Qui-suis je ?",
        logo: fastRequire('boutons/kevin', 'png')
      },
      {
        ordre:2,
        intitule:"Créations",
        logo: fastRequire('boutons/webDesignBrush','svg')
      },
      {
        ordre:3,
        intitule:"Blog",
        logo: fastRequire('boutons/typeWriter','svg')
      },
      {
        ordre:4,
        intitule:"Labo & Bazar",
        logo: fastRequire('boutons/fiole','svg')
      },
    ]


  },
  getters: {
    boutonsMenu(state) {
      return state.boutonsMenu;
    }
  },

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
