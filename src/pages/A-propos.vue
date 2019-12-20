<template>
  <Layout>
    <Background />
    <div class="content">
      <h1>Mathieu Pointud</h1>
      <div class="media">
        <g-image src="~/assets/images/mathieu-pointud.jpg" alt="Mathieu Pointud" width="170" height="170" fit="contain" />
        <div class="media-body">
          Je suis <strong>Intégrateur HTML CSS JS</strong> avec 11 ans d'expérience et je travaille en agence web depuis 10 ans. Je travaille sur des projets pour de l'événementiel, grands-comptes, e-commerces ou institutionnels. J'ai un grand soucis du détail pour construire des sites responsives, accessibles et optimisés <strong>SEO</strong>. <br />J'utilise quotidiennement <strong>SASS</strong>, <strong>Javascript</strong> / <strong>jQuery</strong> et <strong>Git</strong>. <br /><br />
          <a href="pdf/cv-mathieu-pointud.pdf" title="Télécharger le CV de Mathieu Pointud (nouvelle fenêtre)" class="btn" data-hover="Télécharger mon CV" target="_blank">Télécharger mon CV</a>
          <br /><br />
          <a href="https://www.linkedin.com/in/mathieu-pointud-29986659/" title="Voir mon profil Linkedin (nouvelle fenêtre)" class="btn" data-hover="Mon profil Linkedin" target="_blank">Mon profil Linkedin</a>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Background from "~/components/Background.vue";

export default {
  components: {
    Background
  },
  metaInfo: {
    title: "À propos de Mathieu Pointud"
  }
};
</script>

<style scoped lang="scss">
strong {
  font-weight: 400;
}
h1 {
  font-size: 1.55rem;
  margin-bottom: 0;
  letter-spacing: 2px;
  @media (max-width: 767px) {
    text-align: center;
  }
}
.media {
  display: flex;
  align-items: flex-start;

  img {
    margin-right: 30px;
    margin-top: 10px;
    opacity: 0.9;
  }

  &-body {
    flex: 1;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;

    img {
      margin-right: 0;
      margin-bottom: 30px;
    }
  }
}
</style>
