<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package test
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <link rel="stylesheet" href="https://cdn.knightlab.com/libs/juxtapose/latest/css/juxtapose.css">
    <script src="https://api-maps.yandex.ru/2.1/?apikey=58ca9c34-56a1-448b-a900-60fe01698636&lang=ru_RU" type="text/javascript"></script>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="mainContainer">
    <dialog class="burgerMenuModal">
        <div class="burgerMenuModal__panel">
            <div class="burgerMenuModal__panel__links">
                <a href="/projects" class="burgerMenuModal__panel__links__link">Проекты</a>
                <a href="/offers" class="burgerMenuModal__panel__links__link">Услуги</a>
                <a href="/contacts" class="burgerMenuModal__panel__links__link">Контакты</a>
                <a href="/faq" class="burgerMenuModal__panel__links__link">Вопрос-ответ</a>
            </div>
        </div>
    </dialog>
    <div class="modalButton">
        <div class="modalButton__icon">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="menu">
        <a href="/" class="menu__logo"></a>
        <div class="menu__buttonsContainer">
            <a href="/project" class="menu__buttonsContainer__button">Проекты</a>
            <a href="/offers" class="menu__buttonsContainer__button">Услуги</a>
            <a href="/contacts" class="menu__buttonsContainer__button">Контакты</a>
            <a href="/faq" class="menu__buttonsContainer__button">Вопрос-ответ</a>
        </div>
    </div>
    <div class="content">
