<template>
    <article class="card">
      <div class="icon-group">
        <img :src="images.main" alt="Main icon" class="main-icon" />
        <div class="secondary-icons">
          <img
            v-for="(icon, index) in images.secondary"
            :key="index"
            :src="icon"
            :alt="`Secondary icon ${index + 1}`"
            class="secondary-icon"
          />
        </div>
      </div>

      <h2 class="card-title">{{ title }}</h2>

      <p v-if="description" class="card-description">{{ description }}</p>

      <div v-if="showAskAnything" class="ask-anything">
        <span>Ask Anything</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/209ec68665844378a4b0f7684859fea6/51f32e827c33108aa6b8748ce5818ee912499bbf3f82d156ebebaae3ac70a1cb?placeholderIfAbsent=true"
          alt="Ask icon"
          class="ask-icon"
        />
      </div>
    </article>
  </template>

  <script lang="ts">
  import { defineComponent, type PropType } from "vue";

  interface ImageSet {
    main: string;
    secondary: string[];
  }

  export default defineComponent({
    name: "ContentCard",
    props: {
      images: {
        type: Object as PropType<ImageSet>,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        default: "",
      },
      showAskAnything: {
        type: Boolean,
        default: false,
      },
    },
  });
  </script>

  <style scoped>
  .card {
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 8px 8px 117px rgba(0, 0, 0, 0.05);
    width: 100%;
    max-width: 357px;
    padding: 20px 21px 34px;
    overflow: hidden;
  }

  .icon-group {
    display: flex;
    width: 100%;
    align-items: stretch;
    gap: 20px;
    justify-content: space-between;
  }

  .main-icon {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }

  .secondary-icons {
    display: flex;
    align-items: stretch;
    gap: 36px;
  }

  .secondary-icon {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }

  .card-title {
    color: #565451;
    font-family:
      Guillon,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: -0.3px;
    margin-top: 21px;
  }

  .card-description {
    color: #817e7a;
    font-family:
      Guillon,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.26px;
    margin-top: 20px;
  }

  .ask-anything {
    justify-content: flex-end;
    align-items: start;
    border-radius: 8px;
    box-shadow: 8.344px 8.344px 116.822px 0px rgba(0, 0, 0, 0.05);
    background-color: #eeece9;
    align-self: start;
    display: flex;
    margin-right: -22px;
    width: 100%;
    padding: 20px 41px;
    gap: 40px 100px;
    overflow: hidden;
    font-family:
      Guillon,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 20px;
    color: #aca8a3;
    font-weight: 400;
    letter-spacing: -0.3px;
  }

  .ask-icon {
    width: 42px;
    aspect-ratio: 1.14;
    object-fit: contain;
  }
  </style>
