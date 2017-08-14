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
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="description" content="Mathieu Pointud - Intégrateur Web HTML CSS à Clermont-Ferrand, Puy-de-Dôme 63, Auvergne" />
    <meta name="keywords" content="Intégrateur HTML, Développeur Front-end" />
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css" />
</head>
<body class="loading">
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-4127539-8', 'auto');
        ga('send', 'pageview');
    </script>
    <noscript>Veuillez activer javaScript pour profiter de toutes les fonctionnalités !</noscript>
    <div class="wrapper">
        <div class="bg">
            <img    src="images/sublime-text-1920.jpg" 
                    srcset="images/sublime-text-768.jpg 768w, 
                            images/sublime-text-992.jpg 992w, 
                            images/sublime-text-1200.jpg 1200w, 
                            images/sublime-text-1920.jpg 1920w"
                    sizes="100vw"
                    alt="Sublime Text 3 développeur web">
        </div>
        <div class="main">
            <div class="content" itemscope itemtype="http://schema.org/Person">
                <h1><span itemprop="jobTitle">Intégrateur HTML - Développeur front-end</span><br><span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"><span itemprop="addressLocality">Clermont-Ferrand</span></span></h1>
                <h2 itemprop="name">Mathieu Pointud</h2>
                <div class="btn-group"><a href="#" title="À propos" class="btn btn-link" id="showAbout">À propos</a><a href="#" title="Me contacter" class="btn btn-link" id="showForm">Me contacter</a></div>
            </div>
        </div>
        <div class="modal modal--about">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <img src="images/mathieu-pointud-320.jpg" alt="Mathieu Pointud">
                    </div>
                    <div class="col-sm-9">
                        Je suis <h3>Intégrateur HTML CSS JS</h3> avec 10 ans d'expérience et je travaille en agence depuis 7 ans. Je travaille sur des projets pour de l'événementiel, grands-comptes, e-commerces ou institutionnels. J'ai un grand soucis du détail pour construire des sites durables, maintenables, responsives, accessibles et optimisés SEO. J'utilise quotidiennement <h3>SASS</h3>, <h3>JavaScript</h3> / <h3>jQuery</h3> et <h3>Gulp</h3>.
                        <br>
                        J'ai aussi une passion pour le vélo.
                        <a href="pdf/mathieu-pointud.pdf" title="Télécharger le CV de Mathieu Pointud" class="btn btn-default" id="download-resume">Télécharger mon CV</a>
                    </div>
                </div>
            </div>
            <a href="#" class="close" title="Fermer" aria-label="Fermer">&times;</a>
        </div>
        <form enctype="application/x-www-form-urlencoded" id="contact-form" class="modal modal--contact form-horizontal" method="post">
            <div class="container">
                <div class="form-group" id="name-field">
                    <label for="form-name"><?php echo $config->get('fields.name'); ?></label>
                    <input type="text" class="form-control" id="form-name" name="form-name" placeholder="<?php echo $config->get('fields.name'); ?>" required>
                </div>
                <div class="form-group" id="email-field">
                    <label for="form-email"><?php echo $config->get('fields.email'); ?></label>
                    <input type="email" class="form-control" id="form-email" name="form-email" placeholder="<?php echo $config->get('fields.email'); ?>" required>
                </div>
                <div class="form-group" id="subject-field">
                    <label for="form-subject"><?php echo $config->get('fields.subject'); ?></label>
                    <input type="text" class="form-control" id="form-subject" name="form-subject" placeholder="<?php echo $config->get('fields.subject'); ?>" required>
                </div>
                <div class="form-group" id="message-field">
                    <label for="form-message"><?php echo $config->get('fields.message'); ?></label>
                    <textarea class="form-control" rows="6" id="form-message" name="form-message" placeholder="<?php echo $config->get('fields.message'); ?>" required></textarea>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-default"><?php echo $config->get('fields.btn-send'); ?></button>
                </div>
            </div>
            <a href="#" class="close" title="Fermer" id="closeForm" aria-label="Fermer">&times;</a>
        </form>
    </div>  
    <script src="js/main.build.js"></script>
    <script type="text/javascript">
        /* global ContactForm */
        new ContactForm('#contact-form', {
            endpoint: './process.php'
        });
    </script>
    <!-- Le code source de ce site est disponible sur https://github.com/geekatori/pointud.com -->
</body>
</html>