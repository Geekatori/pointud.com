<?php
require_once './vendor/autoload.php';

$helperLoader = new SplClassLoader('Helpers', './vendor');
$helperLoader->register();

use Helpers\Config;

$config = new Config;
$config->load('./config/config.php');

?><!DOCTYPE html>
<html lang="fr-FR">
<head>
    <title>Intégrateur Web HTML/CSS - Développeur Front End à Clermont-Ferrand</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="description" content="Mathieu Pointud - Intégrateur Web HTML CSS à Clermont-Ferrand, Puy-de-Dôme 63, Auvergne">
    <meta name="keywords" content="Intégrateur HTML, Développeur Front-end">
    <style>
        *,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar}@-ms-viewport{width:device-width}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-weight:300;line-height:1.2;text-align:left;background-color:#2c2d26}html{font-size:10px}body{font-size:2rem;overflow:hidden;color:#fff}@media screen and (max-width:768px){body{font-size:1.7rem}}
    </style>
    <link rel="preload" href="css/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="css/styles.css"></noscript>
</head>
<body class="loading">
    <script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-4127539-8', 'auto');ga('send', 'pageview');</script>
    <noscript>Veuillez activer JavaScript pour profiter de toutes les fonctionnalités !</noscript>
    <script>!function(n){"use strict";n.loadCSS||(n.loadCSS=function(){});var o=loadCSS.relpreload={};if(o.support=function(){var e;try{e=n.document.createElement("link").relList.supports("preload")}catch(t){e=!1}return function(){return e}}(),o.bindMediaToggle=function(t){var e=t.media||"all";function a(){t.media=e}t.addEventListener?t.addEventListener("load",a):t.attachEvent&&t.attachEvent("onload",a),setTimeout(function(){t.rel="stylesheet",t.media="only x"}),setTimeout(a,3e3)},o.poly=function(){if(!o.support())for(var t=n.document.getElementsByTagName("link"),e=0;e<t.length;e++){var a=t[e];"preload"!==a.rel||"style"!==a.getAttribute("as")||a.getAttribute("data-loadcss")||(a.setAttribute("data-loadcss",!0),o.bindMediaToggle(a))}},!o.support()){o.poly();var t=n.setInterval(o.poly,500);n.addEventListener?n.addEventListener("load",function(){o.poly(),n.clearInterval(t)}):n.attachEvent&&n.attachEvent("onload",function(){o.poly(),n.clearInterval(t)})}"undefined"!=typeof exports?exports.loadCSS=loadCSS:n.loadCSS=loadCSS}("undefined"!=typeof global?global:this);</script>
    <div class="wrapper">
        <div class="bg">
            <img src="images/sublime-text-1920.jpg" srcset="images/sublime-text-768.jpg 768w, images/sublime-text-992.jpg 992w, images/sublime-text-1200.jpg 1200w, images/sublime-text-1920.jpg 1920w" sizes="100vw" alt="">
        </div>
        <div class="main">
            <div class="content" itemscope="" itemtype="http://schema.org/Person">
                <h1 itemprop="name">Mathieu Pointud</h1>
                <h2><span itemprop="jobTitle">Intégrateur HTML - Développeur front-end</span><br><span itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress"><span itemprop="addressLocality">Clermont-Ferrand</span></span></h2>
                <div class="btn-group"><a href="#" title="Lire les détails" class="btn btn-link" id="showAbout" role="button">À propos</a><a href="#" title="Formulaire de contact" class="btn btn-link" id="showForm" role="button">Me contacter</a></div>
            </div>
        </div>
        <div class="modal modal--about" tabindex="-1">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <img src="images/mathieu-pointud-320.jpg" alt="Mathieu Pointud">
                    </div>
                    <div class="col-sm-9">
                        Je suis <h3>Intégrateur HTML CSS JS</h3> avec 10 ans d'expérience et je travaille en agence depuis 7 ans. Je travaille sur des projets pour de l'événementiel, grands-comptes, e-commerces ou institutionnels. J'ai un grand soucis du détail pour construire des sites durables, maintenables, responsives, accessibles et optimisés SEO. J'utilise quotidiennement <h3>SASS</h3>, <h3>JavaScript</h3> / <h3>jQuery</h3> et <h3>Gulp</h3>.
                        <br>
                        J'ai aussi une passion pour le vélo.
                        <a href="pdf/cv-mathieu-pointud.pdf" title="Télécharger le CV de Mathieu Pointud" class="btn btn-default" id="download-resume" role="button">Télécharger mon CV</a>
                    </div>
                </div>
            </div>
            <a href="#" class="close" title="Fermer" aria-label="Fermer">&times;</a>
        </div>
        <form enctype="application/x-www-form-urlencoded" id="contact-form" class="modal modal--contact form-horizontal" method="post" tabindex="-1">
            <div class="container">
                <div class="form-group" id="name-field">
                    <label for="form-name"><span><?php echo $config->get('fields.name'); ?></span></label>
                    <input type="text" class="form-control" id="form-name" name="form-name" placeholder="<?php echo $config->get('fields.name'); ?>" required>
                </div>
                <div class="form-group" id="email-field">
                    <label for="form-email"><span><?php echo $config->get('fields.email'); ?></span></label>
                    <input type="email" class="form-control" id="form-email" name="form-email" placeholder="<?php echo $config->get('fields.email'); ?>" required>
                </div>
                <div class="form-group" id="subject-field">
                    <label for="form-subject"><span><?php echo $config->get('fields.subject'); ?></span></label>
                    <input type="text" class="form-control" id="form-subject" name="form-subject" placeholder="<?php echo $config->get('fields.subject'); ?>" required>
                </div>
                <div class="form-group" id="message-field">
                    <label for="form-message"><span><?php echo $config->get('fields.message'); ?></span></label>
                    <textarea class="form-control" rows="6" id="form-message" name="form-message" placeholder="<?php echo $config->get('fields.message'); ?>" required></textarea>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-default"><?php echo $config->get('fields.btn-send'); ?></button>
                </div>
            </div>
            <small class="required">Tous les champs sont requis.</small>
            <a href="#" class="close" title="Fermer" id="closeForm" aria-label="Fermer">&times;</a>
        </form>
    </div>  
    <script src="js/main.build.js"></script>
    <script type="text/javascript">new ContactForm('#contact-form', {endpoint: './process.php'});</script>
    <!-- Le code source de ce site est disponible sur https://github.com/geekatori/pointud.com -->
</body>
</html>