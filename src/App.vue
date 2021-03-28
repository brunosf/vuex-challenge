<template>
  <div class="container">
    <transition
      :appear="false"
      mode="out-in"
      :class="[
        'animate__animated animate__faster',
        { animate__slideInRight: transitionClassEnter },
        { animate__slideInLeft: !transitionClassEnter }
      ]"
    >
      <component :is="currentSection" @selectedSection="changeSection" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Categories from "@/components/Categories.vue";
import Questions from "@/components/Questions.vue";
import Answer from "@/components/Answer.vue";
import "@/assets/css/main.css";

export default defineComponent({
  name: "App",
  components: {
    Categories,
    Questions,
    Answer
  },
  data() {
    return {
      currentSection: "Categories",
      transitionClassEnter: true
    };
  },
  created() {
    this.$store.dispatch("fetchAllFaq");
  },
  methods: {
    changeSection(to = "next") {
      if (to === "back") {
        this.transitionClassEnter = false;
        this.currentSection = this.$currentSection;
        return;
      }
      this.transitionClassEnter = true;
      this.currentSection = this.$currentSection;
    }
  },
  computed: {
    $currentSection() {
      return this.$store.getters["$currentSection"];
    }
  }
});
</script>

<style lang="scss">
.container {
  padding: 2rem 0.375rem;
  padding-bottom: 0.875rem;
  background-image: linear-gradient(180deg, #3f4452, #26282c);
  border-radius: 15px;
  box-shadow: 0 8px 21px 3px rgb(0 0 0 / 19%);
  overflow: hidden;
  position: relative;
}
</style>
