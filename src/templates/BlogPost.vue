<template>
  <Layout>
    <div class="content">
      <div class="article">
        <h1>{{ $page.blogPost.title }}</h1>
        <p>Publié le {{ $page.blogPost.date }}</p>
        <!-- <em class="reading-time">Temps total de lecture estimé&nbsp;: <span></span>min</em> -->
        <div id="eta" class="article__content" v-html="$page.blogPost.content" />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.blogPost.title
    };
  }
};
/*
  function getText(e) {
      let ret = '';
      let length = e.childNodes.length;

      for (let i = 0; i < length; i++) {
          let node = e.childNodes[i];
          if(node.nodeType != 8) {
              ret += node.nodeType != 1 ? node.nodeValue : getText(node);
          }
      }
      return ret;
  }

  document.addEventListener('DOMContentLoaded', function() {
    const eta = document.getElementById('eta');
    let wordCount = getText(eta).split(/[^\s]+/g).length;
    let time = Math.round(wordCount / 200);
    document.querySelector('.reading-time span').innerHTML = time;
  }, false);
  */
</script>
<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
    }
  }
</page-query>

<style scoped lang="scss">
.article {
  padding-left: 15px;
  padding-right: 15px;
}
</style>
