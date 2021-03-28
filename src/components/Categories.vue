<template>
  <div class="categories">
    <Header subtitle="Escolha a categoria desejada">
      <template #cover>
        <img
          class="header__image"
          src="@/assets/images/astronaut.svg"
          alt="Astronauta no espaço"
        />
      </template>
    </Header>
    <ul class="categories__list">
      <li
        class="categories__item"
        v-for="item in categories"
        :key="item.id"
        @click="selectCategory(item)"
      >
        <img
          :src="require(`@/assets/images/${item.icon}`)"
          class="categories__item-icon"
        />
        <p class="categories__item-name">{{ item.title }}</p>
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
      categories: [] as Category[]
    };
  },
  created() {
    this.categories = this.$store.getters["$categories"];
  },
  methods: {
    selectCategory(item: Category) {
      this.$store.dispatch("selectQuestions", item);
      this.$emit("selectedSection");
    }
  }
});
</script>

<style lang="scss" scoped>
.categories {
  &__list {
    display: grid;
    grid-gap: 10px;
    margin-top: 30px;
  }
  &__item {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 20px;
    padding: 10px 30px;
    cursor: pointer;

    &:hover {
      background-color: #5d6681;
    }
  }
  &__item-icon {
    width: 25px;
  }
  &__item-name {
    font-size: 16px;
    color: #fff;
  }
}
</style>
