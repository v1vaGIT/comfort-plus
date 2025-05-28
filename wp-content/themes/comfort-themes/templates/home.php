<?php
/*Template name: Главная страница*/
get_header(); ?>
    <section class="mainPageHeaderSection">
        <div class="mainPageHeaderSection__container">
            <div class="mainPageHeaderSection__container__textBox">
                <h1 class="mainPageHeaderSection__container__textBox__topText">ремонт в Хабаровске - быстро и качественно</h1>
                <div class="mainPageHeaderSection__container__textBox__bottomText">профессиональное<br/> преображение вашего жилья</div>
            </div>
            <a href="https://wa.me/+79142180777" class="mainPageHeaderSection__container__button">связаться</a>
        </div>
        <div class="mainPageHeaderSection__formContainer">
            <?php echo do_shortcode('[contact-form-7 id="9746a08" title="Контактная форма 1"]') ?>
        </div>
    </section>
    <section>
<!--        <div class="sectionStats">-->
<!--            <div class="sectionStats__statContainer">-->
<!--                <h3 class="odometerNumber sectionStats__statContainer__stat">0</h3>-->
<!--                <p>лет на рынке</p>-->
<!--            </div>-->
<!--            <div class="sectionStats__statContainer">-->
<!--                <h3 class="odometerNumber sectionStats__statContainer__middleStat">0%</h3>-->
<!--                <p>довольных клиентов</p>-->
<!--            </div>-->
<!--            <div class="sectionStats__statContainer">-->
<!--                <h3 class="odometerNumber sectionStats__statContainer__stat">0+</h3>-->
<!--                <p>успешный проектов</p>-->
<!--            </div>-->
<!--        </div>-->
        <div class="sectionInfo">
            <div class="sectionInfo__sectionHeader">
                <h2 class="sectionInfo__sectionHeader__title">Этапы работы</h2>
                <p class="sectionInfo__sectionHeader__transparentNumber">01</p>
            </div>
            <div class="aboutSectionContent">
                <div class="aboutSectionContent__stage">
                    <div class="aboutSectionContent__stage__imageContainer">
                        <p></p>
                        <img>
                    </div>
                    <div class="aboutSectionContent__stage__text"></div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="sectionInfo">
            <div class="sectionInfo__sectionHeader">
                <h2 class="sectionInfo__sectionHeader__title">приемущества</h2>
                <p class="sectionInfo__sectionHeader__number">02</p>
                <p class="sectionInfo__sectionHeader__transparentNumber">02</p>
            </div>
            <div class="benefitSectionContent">
                <div class="benefitSectionContent__images">
                    <?php if ( have_rows( 'advantages-images' ) ) : ?>
                        <?php while ( have_rows( 'advantages-images' ) ) : the_row(); ?>
                            <?php if ( get_sub_field( 'advantages-images-image' ) ) : ?>
                                <div class="benefitSectionContent__images__image">
                                    <img alt="advantages image" src="<?php the_sub_field( 'advantages-images-image' ); ?>" />
                                    <p class="benefitSectionContent__images__image__text"><?php the_sub_field( 'advantages-images-text' ); ?></p>
                                </div>
                            <?php endif ?>
                        <?php endwhile; ?>
                    <?php else : ?>
                        <?php // No rows found ?>
                    <?php endif; ?>
                </div>
                <p class="textContainer__text">
                    <?php the_field( 'advantages-description' ); ?>
                </p>
            </div>
        </div>
    </section>
    <section>
        <div class="sectionInfo">
            <div class="sectionInfo__sectionHeader">
                <h2 class="sectionInfo__sectionHeader__title">проекты</h2>
                <p class="sectionInfo__sectionHeader__number">03</p>
                <p class="sectionInfo__sectionHeader__transparentNumber">03</p>
            </div>
            <div class="projectSectionContent">
                <div class="projectSectionContent__images">
                    <?php if ( get_field( 'projects-left-image' ) ) : ?>
                    <div class="projectSectionContent__images__image">
                            <img alt="projects image" src="<?php the_field( 'projects-left-image' ); ?>" />
                    </div>
                    <?php endif ?>
                    <?php if ( get_field( 'projects-left-image' ) ) : ?>
                        <div class="projectSectionContent__images__image">
                            <img alt="projects image" src="<?php the_field( 'projects-right-image' ); ?>" />
                        </div>
                    <?php endif ?>
                </div>
                <div class="projectSectionContent__top__textContainer">
                    <p class="textContainer__text">
                        <?php the_field( 'description' ); ?>
                    </p>
                    <a href="/project" class="textContainer__link">смотреть все проекты</a>
                </div>
            </div>
        </div>
        <div class="swiper projectSection__sliderContainer">
            <div class="swiper-wrapper">
                <?php $slider_images_urls = get_field( 'slider-images' ); ?>
                <?php if ( $slider_images_urls ) :  ?>
                    <?php foreach ( $slider_images_urls as $slider_images_url ): ?>
                        <div class="swiper-slide">
                            <img class="projectSection__sliderContainer__slider__imageContainer__image"
                                 alt="slider image" src="<?php echo esc_url( $slider_images_url ); ?>" />
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </div>
        <div class="projectSection__scrollbarContainer">
            <div class="projectSection__scrollbar swiper-scrollbar"></div>
        </div>
    </section>
    <section>
        <div class="sectionInfo">
            <div class="sectionInfo__sectionHeader">
                <h2 class="sectionInfo__sectionHeader__title">отзывы</h2>
                <p class="sectionInfo__sectionHeader__number">04</p>
                <p class="sectionInfo__sectionHeader__transparentNumber">04</p>
            </div>
            <div class="feedbackSection__sliderContainer">
                <div class="feedbackSection__sliderContainer__arrow prev">
                    <svg viewBox="0 0 62 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="svgArrow" d="M0.585781 16.4142C-0.195267 15.6332 -0.195267 14.3668 0.585781 13.5858L13.3137 0.857864C14.0948 0.0768156 15.3611 0.0768156 16.1421 0.857864C16.9232 1.63891 16.9232 2.90524 16.1421 3.68629L4.82842 15L16.1421 26.3137C16.9232 27.0948 16.9232 28.3611 16.1421 29.1421C15.3611 29.9232 14.0948 29.9232 13.3137 29.1421L0.585781 16.4142ZM62 17H2V13H62V17Z"/>
                    </svg>
                </div>
                <div class="feedbackSection__sliderContainer__slider">
                    <?php if ( have_rows( 'comment' ) ) : ?>
                        <?php while ( have_rows( 'comment' ) ) : the_row(); ?>
                            <?php if ( get_sub_field( 'comment-image' ) ) : ?>
                            <div class="feedbackSection__sliderContainer__slider__content">
                                <div class="feedbackSection__sliderContainer__slider__content__image">
                                    <img alt="comment-image" src="<?php the_sub_field( 'comment-image' ); ?>" />
                                </div>
                                <div class="feedbackSection__sliderContainer__slider__content__text">
                                    <p class="textContainer__text ">
                                        <?php the_sub_field( 'comment-description' ); ?>
                                    </p>
                                    <h3>Название услуги: <?php the_sub_field( 'comment-offer-name' ); ?></h3>
                                </div>
                            </div>
                            <?php endif ?>
                        <?php endwhile; ?>
                    <?php else : ?>
                        <?php // No rows found ?>
                    <?php endif; ?>
                </div>
                <div class="feedbackSection__sliderContainer__arrow next">
                    <svg viewBox="0 0 62 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="svgArrow" d="M61.4142 16.4142C62.1953 15.6332 62.1953 14.3668 61.4142 13.5858L48.6863 0.857864C47.9052 0.0768156 46.6389 0.0768156 45.8579 0.857864C45.0768 1.63891 45.0768 2.90524 45.8579 3.68629L57.1716 15L45.8579 26.3137C45.0768 27.0948 45.0768 28.3611 45.8579 29.1421C46.6389 29.9232 47.9052 29.9232 48.6863 29.1421L61.4142 16.4142ZM0 17H60V13H0V17Z"/>
                    </svg>
                </div>
            </div>
            <div class="feedbackSectionContent">
                <a class="textContainer__link">посмотреть все отзывы</a>
            </div>
        </div>
    </section>
<?php
get_footer();
?>
