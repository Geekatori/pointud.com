<template>
  <Layout>
    <g-image src="~/assets/images/servieres-copyright-aurelien-racault.jpg" class="bg" alt="" />
    <div class="bg-overlay"></div>
    <div class="content">
      <div itemscope itemtype="http://schema.org/Person">
        <h1 itemprop="name">Mathieu Pointud</h1>
        <h2>
          <span itemprop="jobTitle">Intégrateur HTML <span class="sep">-</span> Développeur front-end</span><br>
          <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
            <span itemprop="addressLocality">Clermont-Ferrand</span>
          </span>
        </h2>
      </div>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
  .content {
    width: 100%;
    max-width: 100%;
    padding: 75px 10%;
    position: absolute;
    margin: 0;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    @media (min-width: 768px) {
      top: 33%;
    }
    @media (min-height: 480px) {
      top: 33%;
    }
  }

  h1 {
    font-size: 5rem;
    margin-bottom: 0;
  }

  h2 {
    font-size: 1.8rem;
    letter-spacing: 1.4px;
    line-height: 1.8;
    margin-bottom: 0;
    text-transform: uppercase;
    @media (max-width: 767px) {
      font-size: 1.7rem;
      .sep {
        text-indent: -9999px;
        display: block;
        font-size: 1px;
      }
    }
  }
</style>

<script>
export default {
  metaInfo: {
    title: 'Intégrateur Web HTML CSS - Développeur Front End à Clermont-Ferrand'
  }
}
</script>
