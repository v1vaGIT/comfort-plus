<?php
get_header(); ?>

    <section class="projectPageHeaderSection">
        <h2 class="headerSection__title offersPageHeaderSection__title">просмотр</h2>
        <div id="beforeAfterSlider" class="projectDetailHeaderSection__background"></div>
    </section>
    <section>
        <div class="sectionInfo">
            <div class="sectionInfo__sectionHeader">
                <h2 class="sectionInfo__sectionHeader__title">ДО</h2>
                <p class="sectionInfo__sectionHeader__number">01</p>
                <p class="sectionInfo__sectionHeader__transparentText">до</p>
            </div>
            <div class="detailBeforeSectionContent">
                <p class="detailBeforeSectionContent__text">
                    <?php the_field( 'before-section-description' ); ?>
                </p>
                <?php $before_section_images_urls = get_field( 'before-section-images' ); ?>
                <?php if ( $before_section_images_urls ) :  ?>
                    <div class="detailBeforeSectionContent__imagesContainer">
                        <?php foreach ( $before_section_images_urls as $before_section_images_url ): ?>
                            <div class="detailBeforeSectionContent__imagesContainer__imageContainer">
                                <img class="detailBeforeSectionContent__imagesContainer__imageContainer__image" src="<?php echo esc_url( $before_section_images_url ); ?>" alt="slider image"/>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <div class="detailBeforeSectionContent__sliderWrapper">
                        <div id="before" class="swiper detailBeforeSectionContent__slider">
                            <div class="swiper-wrapper detailBeforeSectionContent__slider__images">
                                <?php foreach ( $before_section_images_urls as $before_section_images_url ): ?>
                                    <div class="swiper-slide detailBeforeSectionContent__slider__imageContainer">
                                        <img class="detailBeforeSectionContent__slider__imageContainer__image" src="<?php echo esc_url( $before_section_images_url ); ?>" alt="slider image"/>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>
        <div class="sectionSlider__scrollbarContainer">
            <div id="beforeScrollbar" class="slider__scrollbar swiper-scrollbar"></div>
        </div>
    </section>
    <section>
        <div class="sectionInfo">
            <div class="sectionInfo__sectionHeader">
                <h2 class="sectionInfo__sectionHeader__title">ПРОЦЕСС</h2>
                <p class="sectionInfo__sectionHeader__number">02</p>
                <p class="sectionInfo__sectionHeader__transparentText">ПРОЦЕСС</p>
            </div>
            <div class="detailProcessSectionContent">
                <p class="detailProcessSectionContent__text">
                    <?php the_field( 'process-section-description' ); ?>
                </p>
                <?php $process_section_images_urls = get_field( 'process-section-images' );
                if ( $process_section_images_urls ) : ?>
                    <div class="detailProcessSectionContent__imagesContainer">
                        <?php $process_image_chunks = array_chunk($process_section_images_urls, 3);
                        foreach ( $process_image_chunks as $process_image_chunk ): ?>
                            <div class="detailProcessSectionContent__imagesContainer__row">
                                <?php foreach ( $process_image_chunk as $process_section_images_url ): ?>
                                    <div class="detailProcessSectionContent__imagesContainer__row__imageContainer">
                                        <img class="detailProcessSectionContent__imagesContainer__row__imageContainer__image"
                                             src="<?php echo esc_url( $process_section_images_url ); ?>"
                                             alt="before section image">
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <div class="detailBeforeSectionContent__sliderWrapper">
                        <div id="process" class="swiper detailBeforeSectionContent__slider">
                            <div class="swiper-wrapper detailBeforeSectionContent__slider__images">
                                <?php foreach ( $process_section_images_urls as $process_section_images_url ): ?>
                                    <div class="swiper-slide detailBeforeSectionContent__slider__imageContainer">
                                        <img class="detailBeforeSectionContent__slider__imageContainer__image"
                                             src="<?php echo esc_url( $process_section_images_url ); ?>"
                                             alt="slider image"/>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                        <div class="sectionSlider__scrollbarContainer">
                            <div id="processScrollbar" class="slider__scrollbar swiper-scrollbar"></div>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>
    <section class="resultSection">
        <div class="sectionInfo">
            <div class="sectionInfo__sectionHeader">
                <h2 class="sectionInfo__sectionHeader__title">ИТОГ</h2>
                <p class="sectionInfo__sectionHeader__number">03</p>
                <p class="sectionInfo__sectionHeader__transparentText">ИТОГ</p>
            </div>
        </div>
        <div class="resultSectionContent">
            <p class="resultSectionContent__text">
                <?php the_field( 'after-section-description' ); ?>
            </p>
            <!--            <div class="sliderWrapper">-->
            <!--                <div class="swiper slider__sliderContainer">-->
            <!--                    <div class="swiper-wrapper">-->
            <!--                        <div class="swiper-slide">-->
            <!--                            <img class="slider__sliderContainer__slider__imageContainer__image"-->
            <!--                                 src="img/mainPage/projectsSection/slider/cae7e790c4b097172746284fef5cebf0.png">-->
            <!--                        </div>-->
            <!--                        <div class="swiper-slide">-->
            <!--                            <img class="slider__sliderContainer__slider__imageContainer__image"-->
            <!--                                 src="img/mainPage/projectsSection/slider/b904a6a3c642270e1008d494a047f901.png">-->
            <!--                        </div>-->
            <!--                        <div class="swiper-slide">-->
            <!--                            <img class="slider__sliderContainer__slider__imageContainer__image"-->
            <!--                                 src="img/mainPage/projectsSection/slider/cae7e790c4b097172746284fef5cebf0.png">-->
            <!--                        </div>-->
            <!--                        <div class="swiper-slide">-->
            <!--                            <img class="slider__sliderContainer__slider__imageContainer__image"-->
            <!--                                 src="img/mainPage/projectsSection/slider/cae7e790c4b097172746284fef5cebf0.png">-->
            <!--                        </div>-->
            <!--                        <div class="swiper-slide">-->
            <!--                            <img class="slider__sliderContainer__slider__imageContainer__image"-->
            <!--                                 src="img/mainPage/projectsSection/slider/cae7e790c4b097172746284fef5cebf0.png">-->
            <!--                        </div>-->
            <!--                        <div class="swiper-slide">-->
            <!--                            <img class="slider__sliderContainer__slider__imageContainer__image"-->
            <!--                                 src="img/mainPage/projectsSection/slider/cae7e790c4b097172746284fef5cebf0.png">-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--                <div class="slider__scrollbarContainer">-->
            <!--                    <div id="afterScrollbar" class="slider__scrollbar swiper-scrollbar"></div>-->
            <!--                </div>-->
            <!--            </div>-->
        </div>
    </section>
    <section>
        <div class="sectionInfo">
            <div class="sectionInfo__sectionHeader">
                <h2 class="sectionInfo__sectionHeader__title">видеообзор</h2>
            </div>
        </div>
        <video></video>
    </section>
    </div>

<?php
get_footer();
