<template>
  <Layout>
    <div class="content">
      <h1>Blog</h1>
      <ul>
        <li v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
          <h2><router-link :to="node.path" v-html="node.title" /></h2>
          <em v-html="node.date"/>
          <p v-html="node.description"/>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
  query Blog ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          _id
          title
          date (format: "D MMMM, YYYY")
          description
          path
        }
      }
    }
  }
</page-query>

<style scoped lang="scss">
  h1 {
    text-align: center;
  }
  h2 {
    margin-bottom: 0;
  }
</style>