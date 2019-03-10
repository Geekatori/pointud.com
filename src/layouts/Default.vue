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
    font-size: 14px;
    font-weight: 300;
    letter-spacing: .2px;
    line-height: 1.8;
    color: #777;
    margin: 0;
  }
  a {
    text-decoration: none;
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
    color: #ececec;
    padding: 2px 15px;
    background-color: #111;
    text-transform: uppercase;
    letter-spacing: 2px;
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
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 2px 15px;
  }
  .header__nav__link:hover,
  .header__nav__link:focus {
    color: #ececec;
    background-color: #111;
  }
  .main {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url(/sublime-text-1920.jpg);
    background-position: 95% top;
    background-size: 250%;
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
    background: rgba(0, 0, 0, .1);
  }
  h1 {
    font-family: "Montserrat", "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
    color: #111;
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
    color: #999;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 1.07em;
    line-height: 1.1;
    letter-spacing: 3px;
  }
</style>
