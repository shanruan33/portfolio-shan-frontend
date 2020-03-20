import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        name: "Flow & Wellness Studio",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illo, id recusandae molestias illum unde pariatur, enim tempora, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illo, id recusandae molestias illum unde pariatur, enim tempora",
        label: "React E-Commerce Dev.",
        img: "flow",
        tech: ["React", "HTML/CSS", "Adobe XD"],
        category: "Web_Dev"
    },
    mutations: {
        updateDetail(state, el){
            state.name = el.name;
            state.name = el.name;
            state.label = el.label;
            state.category = el.category;
            state.description = el.description;
            state.techs = el.tech;
        }
    },
    actions: {
        updateAction({commit}, el){
            commit('updateDetail', el)
        }
    },

    getters: {
        updateName(state){
            return state.name;
        },
        updateDescription(state){
            return state.description;
        },
        updateLabel(state){
            return state.label;
        },        
        updateImg(state){
            return state.img;
        },        
        updateTech(state){
            return state.tech;
        },
        updateCategory(state){
            return state.category;
        },
    }
})