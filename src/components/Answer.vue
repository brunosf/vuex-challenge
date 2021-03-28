<template>
  <div class="answer">
    <Header :title="title" classModifier="header--answer">
      <template #buttonBack>
        <button @click="comeBackSetion" class="answer__button">
          <img src="@/assets/images/arrow-left.svg" alt="Voltar" />
        </button>
      </template>
    </Header>
    <p class="answer__content" v-html="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  components: {
    Header
  },
  data() {
    return {
      title: "",
      content: ""
    };
  },
  mounted() {
    this.title = this.$store.getters["$answer"].title;
    this.content = this.$store.getters["$answer"].content;
  },
  methods: {
    comeBackSetion() {
      this.$store.dispatch("comeBackSetion");
      this.$emit("selectedSection");
    }
  }
});
</script>

<style lang="scss" scoped>
.answer {
  &__content {
    font-size: 13px;
    color: #fff;
    padding: 0 20px;
  }
  &__button {
    border: 0;
    background: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #26282c;
    }
  }
}
</style>
