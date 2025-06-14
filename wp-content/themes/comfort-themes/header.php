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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <link rel="stylesheet" href="https://cdn.knightlab.com/libs/juxtapose/latest/css/juxtapose.css"/>
    <script src="https://api-maps.yandex.ru/2.1/?apikey=58ca9c34-56a1-448b-a900-60fe01698636&lang=ru_RU" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/inputmask/5.0.8/inputmask.min.js"></script>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="mainContainer">
    <div class="hiddenButtons">
        <div class="hiddenButtons__scrollToTopButton">
            <svg width="30" height="62" viewBox="0 0 30 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4142 0.585781C15.6332 -0.195267 14.3668 -0.195267 13.5858 0.585781L0.857862 13.3137C0.0768135 14.0948 0.0768136 15.3611 0.857862 16.1421C1.63891 16.9232 2.90524 16.9232 3.68629 16.1421L15 4.82842L26.3137 16.1421C27.0948 16.9232 28.3611 16.9232 29.1421 16.1421C29.9232 15.3611 29.9232 14.0948 29.1421 13.3137L16.4142 0.585781ZM17 62L17 2L13 2L13 62L17 62Z" fill="var(--additionalColor)"/>
            </svg>
        </div>
        <div class="hiddenButtons__contactButtonContainer">
            <div class="hiddenButtons__contactButtonContainer__panel">
                <a target="_blank" href="https://wa.me/+79142180777">
                    <svg width="45" height="30" viewBox="0 0 45 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1V29C0 29.5523 0.447715 30 1 30H22.5H44C44.5523 30 45 29.5523 45 29V1C45 0.447716 44.5523 0 44 0H22.5H1ZM23 18.1483C22.6906 18.3269 22.3094 18.3269 22 18.1483L5.5 8.62201C5.1906 8.44338 5 8.11325 5 7.75598V6.73205C5 5.96225 5.83333 5.48112 6.5 5.86602L22 14.815C22.3094 14.9936 22.6906 14.9936 23 14.815L38.5 5.86603C39.1667 5.48112 40 5.96225 40 6.73205V7.75598C40 8.11325 39.8094 8.44338 39.5 8.62201L23 18.1483Z" fill="var(--additionalColor)"/>
                    </svg>
                </a>
                <a href="tel:+7(4212)00-00-00">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.9566 25.9131C19.132 23.6035 16.1044 20.5759 13.7948 15.7512C13.4417 15.0136 13.6151 14.1377 14.1934 13.5594L17.2255 10.5273C17.616 10.1368 17.616 9.50364 17.2255 9.11312L8.49079 0.378432C8.25437 0.142009 7.91411 0.0378127 7.58794 0.11131C3.96714 0.927192 1.64651 2.49571 0.337945 6.83348C0.0902111 7.6547 0.184465 8.54172 0.536673 9.32384C7.52607 24.8447 15.0634 31.5354 29.1854 37.6964C29.6344 37.8923 30.1461 37.9189 30.6037 37.7443C33.9911 36.4515 36.9286 34.1091 37.8807 30.41C37.9641 30.0862 37.8572 29.7449 37.6208 29.5084L30.5956 22.4832C30.2051 22.0927 29.5711 22.0919 29.1805 22.4824L26.1485 25.5144C25.5702 26.0927 24.6943 26.2662 23.9566 25.9131Z" fill="var(--additionalColor)"/>
                    </svg>
                </a>
            </div>
            <div class="hiddenButtons__contactButtonContainer__button">
                <svg width="49" height="44" viewBox="0 0 49 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8428 1H45.4688C46.8813 1.00015 48 2.12382 48 3.47754V21.7344C48 23.0881 46.8813 24.2118 45.4688 24.2119H44.5859C43.3981 24.2119 42.4082 25.1641 42.4082 26.3711V32.6758L39.3525 29.667L37.6504 27.9912V31.5869C37.6504 32.9407 36.5319 34.0644 35.1191 34.0645H20.1074C19.6066 34.0645 19.1212 34.236 18.7334 34.5488L18.5732 34.6914L11.5459 41.6104V36.2236C11.5457 35.0168 10.5559 34.0645 9.36816 34.0645H3.53125C2.11866 34.0643 1 32.9406 1 31.5869V11.2051C1.00011 9.85145 2.11873 8.72769 3.53125 8.72754H13.3115V3.47754C13.3115 2.12376 14.4301 1.00004 15.8428 1Z" stroke="#88C23F" stroke-width="2"/>
                </svg>
            </div>
        </div>
    </div>
    <dialog class="burgerMenuModal">
        <div class="burgerMenuModal__panel">
            <div class="burgerMenuModal__panel__links">
                <a href="/project" class="burgerMenuModal__panel__links__link">Проекты</a>
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
            <a href="/faq" class="menu__buttonsContainer__button">+7 (4212) 00-00-00</a>
        </div>
    </div>
    <div class="content">
