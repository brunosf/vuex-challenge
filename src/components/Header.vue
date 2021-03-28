<template>
  <header class="header" :class="classModifier">
    <slot name="cover"> </slot>
    <div class="header__button-back">
      <slot name="buttonBack"> </slot>
    </div>

    <div class="header__headline">
      <h1 class="header__title">{{ title }}</h1>
      <p class="header__subtitle">{{ subtitle }}</p>
    </div>

    <img v-if="icon" :src="getImage(icon)" class="header__icon" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "Perguntas frequentes"
    },
    subtitle: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      required: false
    },
    buttonBack: {
      type: Boolean,
      default: false
    },
    classModifier: {
      type: String,
      default: ""
    }
  },
  methods: {
    getImage(icon: string) {
      return icon ? require(`@/assets/images/${icon}`) : "";
    }
  }
});
</script>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-auto-flow: row;
  align-items: flex-start;

  &--questions {
    grid-auto-flow: column;
    grid-template-columns: auto 1fr 40px;
    grid-template-rows: 70px;
    border-bottom: 1px solid #5d6681;

    gap: 10px;
    .header__headline {
      padding: 0;
    }
  }

  &--answer {
    grid-auto-flow: column;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 70px;

    gap: 10px;
    .header__headline {
      padding: 0;
    }
    .header__title {
      font-size: 16px;
      font-weight: 400;
      padding: 8px 0;
    }
  }
  &__headline {
    display: grid;
    row-gap: 5px;
    padding: 0 30px;
  }
  &__title {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
  &__subtitle {
    font-size: 13px;
    color: #fff;
  }
  &__icon {
    width: 25px;
  }
}
</style>
