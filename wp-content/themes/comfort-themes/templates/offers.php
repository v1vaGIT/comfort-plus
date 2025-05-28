<?php
/*Template name: Страница услуг*/
get_header(); ?>

    <section class="headerSection">
        <h2 class="headerSection__title offersPageHeaderSection__title">услуги</h2>
        <div class="headerSection__background offersPageHeaderSection__background"></div>
    </section>
    <?php if ( have_rows( 'offers-item' ) ) :
        while ( have_rows( 'offers-item' ) ) : the_row();?>
            <section>
                <div class="sectionInfo offersPageSectionInfo">
                    <div class="sectionInfo__sectionHeader">
                        <h2 class="sectionInfo__sectionHeader__title"><?php the_sub_field( 'offers-item-title' ); ?>В</h2>
                        <div class="sectionInfo__sectionHeader__svgContainer">
                            <svg class="sectionInfo__sectionHeader__svgContainer__svg" width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="11" r="11"/>
                            </svg>
                        </div>
                    </div>
                    <?php if ( get_sub_field( 'offers-item-description' ) ) :?>
                        <div class="scrollSliderSectionContent offersPageSectionContent">
                            <div id="slider1" class="swiper scrollSliderSectionContent__slider">
                                <div><?php get_row_index()?></div>
                                <div class="swiper-wrapper scrollSliderSectionContent__slider__images">
                                    <?php if ( get_sub_field( 'offers-item-left-image') and get_sub_field('offers-item-description') ) : ?>
                                    <div class="swiper-slide scrollSliderSectionContent__slider__images__imageContainer">
                                        <img alt="sectionImage"
                                             class="scrollSliderSectionContent__slider__images__imageContainer__image"
                                             src="<?php the_sub_field( 'offers-item-left-image' ); ?>" />
                                    </div>
                                    <?php endif ?>
                                    <?php if ( get_sub_field( 'offers-item-left-image') and get_sub_field('offers-item-description') ) : ?>
                                    <div class="swiper-slide scrollSliderSectionContent__slider__images__imageContainer">
                                        <img alt="sectionImage"
                                             class="scrollSliderSectionContent__slider__images__imageContainer__image"
                                             src="<?php the_sub_field( 'offers-item-right-image' ); ?>" />
                                    </div>
                                    <?php endif ?>
                                </div>
                            </div>
                            <div class="scrollSliderSectionContent__scrollbarContainer">
                                <div id="scrollbar1" class="scrollSliderSectionContent__scrollbar swiper-scrollbar"></div>
                            </div>
                            <div class="scrollSliderSectionContent__top__textContainer">
                                <p class="textContainer__text">
                                    <?php the_sub_field( 'offers-item-description' ); ?>
                                </p>
                            </div>
                        </div>
                    <?php endif ?>
                </div>
                <?php if (!have_rows('offers-item-description') and have_rows( 'offers-item-subitem' )) :
                while ( have_rows( 'offers-item-subitem' ) ) : the_row(); ?>
                    <div class="flatSectionOffersPage">
                        <div class="flatSectionOffersPage__offerElement">
                            <h3 class="flatSectionOffersPage__offerElement__title">
                                <?php the_sub_field( 'offers-item-subitem-title' ); ?>
                            </h3>
                            <div class="flatSectionOffersPage__offerElement__content">
                                <div class="flatSectionOffersPage__offerElement__content__images">
                                    <div class="flatSectionOffersPage__offerElement__content__images__image">
                                        <?php $offers_item_subitem_left_image = get_sub_field( 'offers-item-subitem-left-image' );
                                        if ( $offers_item_subitem_left_image ) : ?>
                                            <img src="<?php echo esc_url( $offers_item_subitem_left_image['url'] ); ?>" alt="<?php echo esc_attr( $offers_item_subitem_left_image['alt'] ); ?>" />
                                        <?php endif; ?>
                                    </div>
                                    <div class="flatSectionOffersPage__offerElement__content__images__image">
                                        <?php $offers_item_subitem_right_image = get_sub_field( 'offers-item-subitem-right-image' );
                                        if ( $offers_item_subitem_right_image ) : ?>
                                            <img src="<?php echo esc_url( $offers_item_subitem_right_image['url'] ); ?>" alt="<?php echo esc_attr( $offers_item_subitem_right_image['alt'] ); ?>" />
                                        <?php endif; ?>
                                    </div>
                                </div>
                                <p class="flatSectionOffersPage__offerElement__content__text">
                                    <?php the_sub_field( 'offers-item-subitem-description' ); ?>
                                </p>
                            </div>
                        </div>
                    </div>
                <?php endwhile; ?>
                <?php endif; ?>
            </section>
        <?php endwhile; ?>
    <?php else : ?>
        <?php // No rows found ?>
    <?php endif; ?>
    <section class="endPageLink">
        <p class="endPageLink__topText">Не нашли нужной услуги?</p>
        <div class="endPageLink__bottomTextContainer">
            <h3 class="endPageLink__bottomTextContainer__text">Свяжитесь с нами<br>
                мы найдем решение
            </h3>
            <a href="https://wa.me/+79142180777" class="endPageLink__bottomTextContainer__link">связаться с нами</a>
        </div>
    </section>
    </div>

<?php
get_footer();
