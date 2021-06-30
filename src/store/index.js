import { createStore } from 'vuex'

export default createStore({
  state: {
    boutonsMenu: [
      {
        ordre:1,
        intitule:"Qui-suis je ?",
        logo: "@/assets/boutons/kevin.png"
      },
      {
        ordre:2,
        intitule:"Créations",
        logo: "@/assets/boutons/webDesignBrush.svg"
      },
      {
        ordre:3,
        intitule:"Blog",
        logo: "@/assets/boutons/webDesignBrush.svg"
      },
      {
        ordre:4,
        intitule:"Labo & Bazar",
        logo: "@/assets/boutons/webDesignBrush.svg"
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
