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
    <link rel="stylesheet" href="css/styles.css" />
</head>
<body class="loading">
    <noscript>Veuillez activer JavaScript pour profiter de toutes les fonctionnalités !</noscript>
    <div class="wrapper">
        <div class="main">
            <div class="content" itemscope itemtype="http://schema.org/Person">
                <h1 itemprop="name"><span>Math<span>i</span>eu</span>Pointud</h1>
                <h2><span itemprop="jobTitle">Intégrateur&nbsp;HTML <strong>-</strong> Développeur&nbsp;front-end</span><br><span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"><span itemprop="addressLocality">Clermont-Ferrand</span></span></h2>
                <div class="btn-group"><a href="#" title="Lire les détails" class="btn btn-link" id="showAbout" role="button"><span>&gt;</span> À propos</a><a href="#" title="Formulaire de contact" class="btn btn-link" id="showForm" role="button"><span>&gt;</span> Me contacter</a></div>
            </div>
        </div>
        <div class="grid"></div>
        <div class="modal modal--about" tabindex="-1" role="dialog">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        Je suis <h3>Intégrateur HTML CSS JS</h3> avec 11 ans d'expérience et je travaille en agence depuis 8 ans. Je travaille sur des projets pour de l'événementiel, grands-comptes, e-commerces ou institutionnels. J'ai un grand soucis du détail pour construire des sites maintenables, responsives, accessibles et optimisés SEO. J'utilise quotidiennement <h3>SASS</h3>, <h3>JavaScript</h3> / <h3>jQuery</h3> et <h3>Gulp</h3>.
                        <a href="pdf/cv-mathieu-pointud.pdf" title="Télécharger le CV de Mathieu Pointud" class="btn btn-link" id="download-resume" role="button"><span>&gt;</span> Télécharger mon CV</a>
                    </div>
                </div>
            </div>
            <a href="#" class="close" title="Fermer" aria-label="Fermer">&times;</a>
        </div>
        <form enctype="application/x-www-form-urlencoded" id="contact-form" class="modal modal--contact form-horizontal" method="post" tabindex="-1" role="dialog">
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
                    <button type="submit" class="btn btn-link"><span>&gt;</span> <?php echo $config->get('fields.btn-send'); ?></button>
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