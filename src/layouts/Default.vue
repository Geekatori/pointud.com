<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link class="btn" to="/">POINTUD.COM</g-link>
      </strong>
      <nav class="header__nav">
        <g-link class="btn" to="/a-propos">À propos</g-link>
      </nav>
    </header>
    <div class="main">
      <g-image src="~/assets/images/servieres-copyright-aurelien-racault.jpg" class="bg" alt="" />
      <div class="bg-overlay"></div>
      <slot/>
    </div>
  </div>
</template>


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
  }

  .main {
    position: relative;
    width: 100%;
    min-height: 100vh;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left center;
  }

  .bg-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .6);
  }
</style>


<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
  console.log("On peut aussi discuter autour d'un 🍵 ou d'une 🍺 !");
</script>