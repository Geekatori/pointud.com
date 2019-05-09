<template>
  <div class="bg">
    <g-image src="~/assets/images/servieres-copyright-aurelien-racault.jpg" class="bg__image" alt="" />
    <div class="bg__overlay" />
  </div>
</template>

<script>
  export default {
    name: 'Background'
  }
</script>

<style scoped lang="scss">
  .bg {
    &__image {
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
    &__overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, .6);
    }
  }
</style>

