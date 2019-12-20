<template>
  <div class="layout">
    <header class="header">
      <g-link class="btn" data-hover="POINTUD.COM" to="/">POINTUD.COM</g-link>
      <nav class="header__nav">
        <!-- <g-link class="btn" data-hover="Blog" to="/blog">Blog</g-link> -->
        <g-link class="btn" data-hover="À propos" to="/a-propos">À propos</g-link>
      </nav>
    </header>
    <div class="main">
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
console.log("On peut aussi discuter autour d'une 🍺 !");
</script>

<style scoped lang="scss">
.header {
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 75px;
  background-color: transparent;
  z-index: 1030;
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;

  &__nav {
    margin-left: auto;
  }

  .btn {
    + .btn {
      margin-left: 1.5rem;
    }
  }
}

.main {
  position: relative;
  width: 100%;
  min-height: 100vh;
}
</style>
