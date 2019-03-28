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
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
  }
  body {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: .2px;
    line-height: 1.8;
    color: #fff;
    margin: 0;
  }
  h1 {
    font-family: "Montserrat", "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
    color: #fff;
    text-transform: uppercase;
    font-size: 6em;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: 2px;
    margin: 0;
  }
  h2 {
    margin-top: 100px;
    margin-bottom: 0;
    color: #fff;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 1.8;
    letter-spacing: 3px;
  }
  h3 {
    display: inline;
    font-size: 18px;
    font-weight: 300;
  }
  a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 2px 15px;
  }
  a:hover,
  a:focus {
    color: #111;
    background-color: #fff;
  }
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 75px;
    background-color: #fff;
    border: 1px solid #ececec;
    z-index: 1030;
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
  }
  .header__logo__link {
    color: #fff;
    background-color: #111;
  }
  .header__logo__link:hover,
  .header__logo__link:focus {
    color: #111;
    background-color: #fff;
  }
  .header__nav {
    margin-left: auto;
  }
  .header__nav__link {
    color: #111;
    background-color: #fff;
  }
  .header__nav__link:hover,
  .header__nav__link:focus {
    color: #fff;
    background-color: #111;
  }
  .main {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url(/sublime-text-1920.jpg);
    background-position: left center;
    background-size: cover;
  }
  .content {
    padding-left: 10%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .bg-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(17, 17, 17, .2);
  }
</style>
