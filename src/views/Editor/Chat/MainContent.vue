<template>
    <section class="content-container">
      <!-- <NavigationBar /> -->
      <h1 class="main-headline">
        This headline emphasizes the range of experiences available and uses
        alliteration
      </h1>

      <ContentCard
        class="content-card"
        :images="{
          main: 'https://cdn.builder.io/api/v1/image/assets/209ec68665844378a4b0f7684859fea6/957443d3bb27e3043f9565c993a2e7880d708c2310fefd65a4709f6ce0852a14?placeholderIfAbsent=true',
          secondary: [
            'https://cdn.builder.io/api/v1/image/assets/209ec68665844378a4b0f7684859fea6/33e3a96b6d07466df97673a62d70e49bbadf6daf3815514323508d345b98f9e2?placeholderIfAbsent=true',
            'https://cdn.builder.io/api/v1/image/assets/209ec68665844378a4b0f7684859fea6/88806a03226606615c74f0f9a5e2491c2b78d5250f3ec91e5842a1e2f412be1f?placeholderIfAbsent=true',
          ],
        }"
        title="Mastering the North Shore: Your Complete Guide to Hawaii's Legendary Surf Spots"
        description="This headline takes an authoritative approach and positions the place as a comprehensive resource"
      />

      <ContentCard
        class="content-card"
        :images="{
          main: 'https://cdn.builder.io/api/v1/image/assets/209ec68665844378a4b0f7684859fea6/8bbf10efc24bc8e4360cfa6f4cf909b61d3a6435e917fd2cdc58b9ef6a39e363?placeholderIfAbsent=true',
          secondary: [
            'https://cdn.builder.io/api/v1/image/assets/209ec68665844378a4b0f7684859fea6/a04334b244ee0084dd865fb1306695df6fb643965c0223260df198349f0da2ac?placeholderIfAbsent=true',
            'https://cdn.builder.io/api/v1/image/assets/209ec68665844378a4b0f7684859fea6/4abc13dfcb6d9aa110b8ef0124088472961996daa9a23d2a14a85b979f2e4d01?placeholderIfAbsent=true',
          ],
        }"
        title="Mastering the North Shore: Your Complete Guide to Hawaii's Legendary Surf Spots"
        description="This headline takes an authoritative approach and positions the place as a comprehensive resource"
      />

      <ContentCard
        class="content-card"
        :images="{
          main: 'https://cdn.builder.io/api/v1/image/assets/209ec68665844378a4b0f7684859fea6/957443d3bb27e3043f9565c993a2e7880d708c2310fefd65a4709f6ce0852a14?placeholderIfAbsent=true',
          secondary: [
            'https://cdn.builder.io/api/v1/image/assets/209ec68665844378a4b0f7684859fea6/33e3a96b6d07466df97673a62d70e49bbadf6daf3815514323508d345b98f9e2?placeholderIfAbsent=true',
            'https://cdn.builder.io/api/v1/image/assets/209ec68665844378a4b0f7684859fea6/88806a03226606615c74f0f9a5e2491c2b78d5250f3ec91e5842a1e2f412be1f?placeholderIfAbsent=true',
          ],
        }"
        title="Mastering the North Shore: Your Complete Guide to Hawaii's Legendary Surf Spots"
        showAskAnything
      />
    </section>
  </template>

  <script lang="ts">
  import { defineComponent } from "vue";
  import NavigationBar from "./NavigationBar.vue";
  import ContentCard from "./ContentCard.vue";

  export default defineComponent({
    name: "MainContent",
    components: {
      NavigationBar,
      ContentCard,
    },
  });
  </script>

  <style scoped>
  .content-container {
    border-right: 1px solid var(--Neutral-400, #dfdbd5);
    border-left: 1px solid var(--Neutral-400, #dfdbd5);
    display: flex;
    margin-left: auto;
    margin-right: auto;
    max-width: 480px;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
  }

  .main-headline {
    color: rgba(0, 0, 0, 1);
    font-size: 20px;
    font-family:
      Guillon,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.3px;
    margin-top: 30px;
  }

  .content-card {
    margin-top: 53px;
  }

  .content-card:first-of-type {
    margin-top: 31px;
  }
  </style>
