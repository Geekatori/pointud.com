// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api


import DefaultLayout from '~/layouts/Default.vue'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet',
    href: '//fonts.googleapis.com/css?family=Montserrat:700|Open+Sans:300'
  })
  //head.link.push({
  //  rel: 'stylesheet',
  //  href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
  //})
}

import '~/assets/normalize.css'

import '~/assets/styles.scss'
