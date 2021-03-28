/** @format */

import { createStore } from "vuex";
import db from "@/utils/db.json";

export default createStore({
  state: {
    categories: [],
    questions: [],
    answers: [],
    currentSection: "Categories"
  },
  mutations: {
    SET_CATEGORIES(state, payload) {
      state.categories = payload;
    },
    SET_QUESTIONS(state, payload) {
      state.questions = payload;
    },
    SET_ANSWERS(state, payload) {
      state.answers = payload;
    },
    CHANGE_SECTION(state, payload) {
      state.currentSection = payload;
    }
  },
  actions: {
    fetchAllFaq(context) {
      const faq = db;
      context.commit("SET_CATEGORIES", faq.faqCategories);
    },
    selectQuestions(context, item) {
      context.commit("CHANGE_SECTION", "Questions");
      context.commit("SET_QUESTIONS", item);
    },
    selectAnswers(context, item) {
      context.commit("CHANGE_SECTION", "Answer");
      context.commit("SET_ANSWERS", item);
    },
    comeBackSetion(context) {
      if (context.state.currentSection === "Answer") {
        context.commit("CHANGE_SECTION", "Questions");
        return;
      }

      context.commit("CHANGE_SECTION", "Categories");
    }
  },
  getters: {
    $categories(state) {
      return state.categories;
    },
    $questions(state) {
      return state.questions;
    },
    $answer(state) {
      return state.answers;
    },
    $currentSection(state) {
      return state.currentSection;
    }
  }
});
