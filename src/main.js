// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api


import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/styles.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet',
    href: '//fonts.googleapis.com/css?family=Montserrat:700|Open+Sans:300'
  })
  //head.link.push({
  //  rel: 'stylesheet',
  //  href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
  //})

  head.meta.push({
    name: 'description',
    content: 'Mathieu Pointud - Intégrateur Web HTML CSS à Clermont-Ferrand, Puy-de-Dôme 63, Auvergne'
  })

  head.meta.push({
    name: 'keywords',
    content: 'Intégrateur HTML, Développeur Front-end'
  })
}



