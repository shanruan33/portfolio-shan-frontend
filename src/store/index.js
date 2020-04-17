import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        name: "Flow & Wellness Studio",
        description:
            "This is a full-frontend SPA shopping Web App for choosing and purchasing studio classes, created with React. The development includes a landing page with featured products and services, a product listing page with filters, a product description page, and a shopping cart with checkout function (Paypal). Customized API and responsive design are also applied for faster and better user experience.",
        label: "React E-Commerce",
        img: "flow",
        tech: ["React: State & Lifecycle Management, Router DOM, Context (Provider, Consumer), React Icon, Hook (State, Effect), Event Handler, etc.", "HTML/CSS: Structure and Responsive Design", "Contentful: Content Management & Data Retrieve", "Paypal & Stripe: Payment Management"],
        category: "Web_Dev",
        url: "https://flowandwellnessstudio.netlify.com/",
        btn: "View Demo"
    },
    mutations: {
        updateDetail(state, el) {
            state.name = el.name;
            state.img = el.img;
            state.label = el.label;
            state.category = el.category;
            state.description = el.description;
            state.tech = el.tech;
            state.url = el.url;
            state.btn = el.btn;
        }
    },
    actions: {
        updateAction({ commit }, el) {
            commit('updateDetail', el)
        }
    },

    getters: {
        updateName(state) {
            return state.name;
        },
        updateDescription(state) {
            return state.description;
        },
        updateLabel(state) {
            return state.label;
        },
        updateImg(state) {
            return state.img;
        },
        updateTech(state) {
            return state.tech;
        },
        updateCategory(state) {
            return state.category;
        },
        updateUrl(state) {
            return state.url;
        },
        updateBtn(state) {
            return state.btn;
        },
    }
})