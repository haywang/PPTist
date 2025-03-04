<template>
    <nav class="navigation">
      <div class="nav-item ai-chat">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/209ec68665844378a4b0f7684859fea6/ef0f29c18b1fab08061f491600b543afe7a5049325843b92d547d86ca05e06b3?placeholderIfAbsent=true"
          alt="AI Chat icon"
          class="nav-icon"
        />
        <span class="nav-text">Ai Chat</span>
      </div>
      <div class="nav-item">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/209ec68665844378a4b0f7684859fea6/3c03f3e9e4bd2aa472f288e63b99c579b4bdfe6d63b3da546fd556096d5141b9?placeholderIfAbsent=true"
          alt="Templates icon"
          class="nav-icon"
        />
        <span class="nav-text">Templates</span>
      </div>
      <div class="nav-item review">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/209ec68665844378a4b0f7684859fea6/fe2b83d4d59a1908e43bdc094eab4b9939f4d0e32d6bf01efbf6c013184d2ce5?placeholderIfAbsent=true"
          alt="Review icon"
          class="nav-icon"
        />
        <span class="nav-text">Review</span>
      </div>
    </nav>
  </template>

  <script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "NavigationBar",
  });
  </script>

  <style scoped>
  .navigation {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 8px 8px 117px rgba(0, 0, 0, 0.05);
    align-self: stretch;
    display: flex;
    width: 100%;
    align-items: stretch;
    /* gap: 20px; */
    /* overflow: hidden; */
    font-family:
      Guillon,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 14px;
    color: #565451;
    font-weight: 400;
    letter-spacing: -0.21px;
    line-height: 1;
    justify-content: space-between;
  }

  .nav-item {
    display: flex;
    padding: 8px 26px;
    flex-direction: column;
    align-items: center;
  }

  .ai-chat {
    background-color: rgba(209, 219, 248, 1);
    color: rgba(0, 0, 0, 1);
  }

  .review {
    border-left: 1px solid rgba(238, 236, 233, 1);
  }

  .nav-icon {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }

  .nav-text {
    margin-top: 4px;
  }
  </style>
