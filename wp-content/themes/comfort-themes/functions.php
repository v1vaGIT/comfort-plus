<?php

add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_script('jquery-cdn', 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js', array(), null, false);
    wp_enqueue_script('slick-js', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', array('jquery-cdn'), null, false);
    wp_enqueue_style( 'main-style', get_stylesheet_uri(), [], filemtime( get_stylesheet_directory() . '/style.css' ) );
    wp_enqueue_script('scroll', 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js', array('jquery-cdn'), null, false);
    if (is_page_template('templates/contacts.php')) {
        wp_enqueue_script( 'contact-script', get_template_directory_uri() . '/dist/contacts.js', ['jquery-cdn'], filemtime( get_stylesheet_directory() . '/dist/contacts.js' ), true );
    }
    if (is_page_template('templates/home.php')) {
        add_filter('wpcf7_autop_or_not', '__return_false');
        wp_enqueue_script( 'home-script', get_template_directory_uri() . '/dist/home.js', ['jquery-cdn'], filemtime( get_stylesheet_directory() . '/dist/home.js' ), true );
    }
    if (is_page_template('templates/faq.php')) {
        wp_enqueue_script( 'faq-script', get_template_directory_uri() . '/dist/faq.js', ['jquery-cdn'], filemtime( get_stylesheet_directory() . '/dist/faq.js' ), true );
    }
    if (is_page_template('templates/offers.php')) {
        wp_enqueue_script( 'offers-script', get_template_directory_uri() . '/dist/offers.js', ['jquery-cdn'], filemtime( get_stylesheet_directory() . '/dist/offers.js' ), true );
    }
    if (is_post_type_archive('project')) {
        wp_enqueue_script( 'projects-script', get_template_directory_uri() . '/dist/projects.js', ['jquery-cdn'], filemtime( get_stylesheet_directory() . '/dist/projects.js' ), true );
    }
    if (is_singular('project')) {
        wp_enqueue_script('before-after-slider', 'https://cdn.knightlab.com/libs/juxtapose/latest/js/juxtapose.min.js', array('jquery-cdn'), null, false);
        wp_enqueue_script( 'project-script', get_template_directory_uri() . '/dist/projectDetail.js', ['jquery-cdn', 'before-after-slider'], filemtime( get_stylesheet_directory() . '/dist/projectDetail.js' ), true );
        $acf_data = [
            'beforeImage' => get_field( 'before-after-slider-before-image' ),
            'afterImage' => get_field( 'before-after-slider-after-image' ),
        ];

        wp_localize_script('project-script', 'projectFields', $acf_data);
    }
} );

