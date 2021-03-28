<template>
  <div class="question">
    <Header
      :title="title"
      subtitle="Selecione uma pergunta"
      :icon="icon"
      buttonBack
      classModifier="header--questions"
    >
      <template #buttonBack>
        <button @click="comeBackSetion" class="question__button">
          <img src="@/assets/images/arrow-left.svg" alt="Voltar" />
        </button>
      </template>
    </Header>

    <ul class="question__list">
      <li
        class="question__item"
        v-for="item in questions"
        :key="item.id"
        @click="selectQuestion(item)"
      >
        <p class="question__name">{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import { Category } from "@/models";

export default defineComponent({
  components: {
    Header
  },
  data() {
    return {
      questions: [] as Category[],
      title: "",
      icon: ""
    };
  },
  mounted() {
    this.title = this.$store.getters["$questions"].title;
    this.icon = this.$store.getters["$questions"].icon;
    this.questions = this.$store.getters["$questions"].questions;
  },
  methods: {
    selectQuestion(item: Category) {
      this.$store.dispatch("selectAnswers", item);
      this.$emit("selectedSection");
    },
    comeBackSetion() {
      this.$store.dispatch("comeBackSetion");
      this.$emit("selectedSection");
    }
  }
});
</script>

<style lang="scss" scoped>
.question {
  &__list {
    display: grid;
    grid-gap: 10px;
    margin-top: 30px;
  }
  &__item {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: #5d6681;
    }
  }
  &__name {
    font-size: 16px;
    color: #fff;
  }
  &__button {
    border: 0;
    background: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #26282c;
    }
  }
}
</style>
