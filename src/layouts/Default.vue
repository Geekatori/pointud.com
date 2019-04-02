<template>
  <div class="layout">
    <header class="header">
      <strong class="header__logo">
        <g-link class="header__logo__link" to="/">POINTUD.COM</g-link>
      </strong>
      <nav class="header__nav">
        <g-link class="header__nav__link" to="/about">À propos</g-link>
        <g-link class="header__nav__link" to="/contact">Me contacter</g-link>
      </nav>
    </header>
    <div class="main">
      <g-image src="~/assets/images/sublime-text-1920.jpg" class="bg" />
      <div class="bg-overlay"></div>
      <div class="content">
        <slot/>
      </div>
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