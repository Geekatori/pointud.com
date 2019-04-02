<template>
  <Layout>
    <form enctype="application/x-www-form-urlencoded" id="contact-form" method="post" tabindex="-1">
      <div class="form-group" id="name-field">
        <label for="form-name">Nom</label>
        <input type="text" class="form-control" id="form-name" name="form-name" required=""></div>
      </div>
      <div class="form-group" id="email-field">
        <label for="form-email">Courriel</label>
        <input type="email" class="form-control" id="form-email" name="form-email" required=""></div>
      </div>
      <div class="form-group" id="subject-field">        
        <label for="form-subject">Sujet</label>
        <input type="text" class="form-control" id="form-subject" name="form-subject"required=""></div>
      </div>
      <div class="form-group" id="message-field">        
        <label for="form-message">Message</label>
        <textarea class="form-control" rows="6" id="form-message" name="form-message" required=""></textarea>
      </div>
      <div class="form-group">
        <button type="submit" class="btn">Envoyer</button>
      </div>
      <small class="required">Tous les champs sont requis.</small>
    </form>
  </Layout>
</template>

<style scoped>
  .btn {
    display: table;
    margin: 1.5rem auto;
  }
</style>

<script>
export default {
  metaInfo: {
    title: 'À propos'
  }
}
</script>
