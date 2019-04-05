<template>
  <Layout>
    <h1>Mathieu Pointud</h1>
    <div class="media">
      <g-image src="~/assets/images/mathieu-pointud.jpg" alt="Mathieu Pointud" width="170" height="170" fit="contain" />
      <div class="media-body">        
        Je suis <strong>Intégrateur HTML CSS JS</strong> avec 11 ans d'expérience et je travaille en agence web depuis 9 ans. Je travaille sur des projets pour de l'événementiel, grands-comptes, e-commerces ou institutionnels. J'ai un grand soucis du détail pour construire des sites responsives, accessibles et optimisés <strong>SEO</strong>. <br>J'utilise quotidiennement <strong>SASS</strong>, <strong>Javascript</strong> / <strong>jQuery</strong> et <strong>Git</strong>. <br><br>
        <a href="pdf/cv-mathieu-pointud.pdf" title="Télécharger le CV de Mathieu Pointud" class="btn" role="button">Télécharger mon CV</a>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
  h1 {
    font-size: 1.4rem;
  }
  @media (max-width: 767px) {
    h1 {
      font-size: 1.4rem;
      text-align: center;
    }
  }
  img {
    margin-top: 11px;
  }
  .btn {
    margin-left: -15px;
  }
</style>

<script>
export default {
  metaInfo: {
    title: 'À propos de Mathieu Pointud'
  }
}
</script>
