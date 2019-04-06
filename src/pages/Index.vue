<template>
  <Layout>
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
    text-align: center;
    @media (min-width: 768px) {
      top: 33%;
    }
    @media (min-height: 480px) {
      top: 33%;
    }
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 300;
    letter-spacing: 1.5px;
    line-height: 1.8;
    margin-bottom: 0;
    margin-top: 10px;
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
