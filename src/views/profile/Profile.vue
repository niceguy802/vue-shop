<template>
  <div>
    <NavBar class="profile">
      <template v-slot:center>
        个人中心
      </template>
    </NavBar>
    <div class="profile-content">
      <p>功能待完善</p>
    </div>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navBar/NavBar";

  export default {
    name: "Profile",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .profile {
    background: var(--color-tint);
    color: #fff;
  }

  .profile-content {
    width: 100vw;
    height: 100vh;
    /*margin: 44px auto 0;*/
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p{
    font-size: 35px;
  }
</style>
