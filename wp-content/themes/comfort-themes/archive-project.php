<?php
get_header(); ?>

<?php $args = array(
    'post_type'   => 'project',
    'post_status' => 'publish',
    'order'       => 'DESC',
    'orderby'     => 'DATE',
);
$query = new WP_Query( $args ); ?>

    <section class="headerSection">
        <h2 class="headerSection__title">наши<br> проекты</h2>
        <div class="headerSection__background faqPageHeaderSection__background"></div>
    </section>
    <?php if ( $query->have_posts() ) :
        while ( $query->have_posts() ) : $query->the_post(); ?>
        <?php $index = $query->current_post + 1; ?>
            <section>
                <div class="sectionInfo projectPageSectionInfo">
                    <div class="sectionInfo__sectionHeader">
                        <h2 class="sectionInfo__sectionHeader__title"><?php echo get_the_title() ?></h2>
                        <p class="sectionInfo__sectionHeader__number">
                            <?php if ($index < 10): ?>
                                0<?php echo $index;
                            else:
                                echo $index; endif; ?>
                        </p>
                        <p class="sectionInfo__sectionHeader__transparentNumber">
                            <?php if ($index < 10): ?>
                                0<?php echo $index;
                            else:
                                echo $index; endif; ?>
                        </p>
                    </div>
                    <div class="scrollSliderSectionContent">
                        <div class="swiper scrollSliderSectionContent__slider">
                            <div class="swiper-wrapper scrollSliderSectionContent__slider__images">
                                <?php if ( get_field( 'left-image' ) ) : ?>
                                    <div class="swiper-slide scrollSliderSectionContent__slider__images__imageContainer">
                                        <img class="scrollSliderSectionContent__slider__images__imageContainer__image"
                                             src="<?php the_field( 'left-image' ); ?>">
                                    </div>
                                <?php endif ?>
                                <?php if ( get_field( 'right-image' ) ) : ?>
                                    <div class="swiper-slide scrollSliderSectionContent__slider__images__imageContainer">
                                        <img class="scrollSliderSectionContent__slider__images__imageContainer__image"
                                             src="<?php the_field( 'right-image' ); ?>">
                                    </div>
                                <?php endif ?>
                            </div>
                        </div>
                        <div class="scrollSliderSectionContent__scrollbarContainer">
                            <div id="scrollbar1" class="scrollSliderSectionContent__scrollbar swiper-scrollbar"></div>
                        </div>
                        <div class="scrollSliderSectionContent__top__textContainer">
                            <p class="textContainer__text">
                                <?php the_field( 'description' ); ?>
                            </p>
                            <a href="<?php echo get_the_permalink(); ?>" class="textContainer__link">смотреть подробнее</a>
                        </div>
                    </div>
                </div>
                <?php $slider_images_urls = get_field( 'slider-images' ); ?>
                <?php if ( $slider_images_urls ) :  ?>
                <div class="sliderWrapper">
                    <div class="swiper slider__sliderContainer">
                        <div class="swiper-wrapper">
                            <?php foreach ( $slider_images_urls as $slider_images_url ): ?>
                            <div class="swiper-slide">
                                <img class="slider__sliderContainer__slider__imageContainer__image"
                                     src="<?php echo esc_url( $slider_images_url ); ?>">
                            </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
                <?php if (count($slider_images_urls) > 4) : ?>
                <div class="slider__scrollbarContainer">
                    <div class="slider__scrollbar swiper-scrollbar"></div>
                </div>
                <?php endif; ?>
                <?php endif; ?>
            </section>
        <?php endwhile;
        wp_reset_postdata();
    endif; ?>
    <section class="endPageLink">
        <p class="endPageLink__topText projectEndPageLink__topText">ХОЧЕШЬ ТАКЖЕ?</p>
        <div class="endPageLink__bottomTextContainer">
            <h3 class="endPageLink__bottomTextContainer__text projectEndPageLink__bottomTextContainer__text">
                МЫ ПОМОЖЕМ!
            </h3>
            <a href="https://wa.me/+79142180777" class="endPageLink__bottomTextContainer__link">связаться с нами</a>
        </div>
    </section>
    </div>
<?php
get_footer();
