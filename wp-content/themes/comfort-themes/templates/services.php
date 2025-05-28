<?php
/*Template name: Услуги*/
get_header(); ?>

<div class="services">
    <?php if ( have_rows( 'services' ) ) : ?>
        <?php while ( have_rows( 'services' ) ) : the_row(); ?>
        <div class="services-items">
            <h1><?php the_sub_field( 'services-title' ); ?></h1>
            <?php if (get_sub_field( 'services-description' )) { ?>
                <p><?php the_sub_field( 'services-description' ); ?></p>
            <?php } ?>

            <div class="images">
                <?php $services_image_urls = get_sub_field( 'services-image' ); ?>
                <?php if ( $services_image_urls ) :  ?>
                    <?php foreach ( $services_image_urls as $services_image_url ): ?>
                        <img src="<?php echo esc_url( $services_image_url ); ?>" />
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>

                <?php if ( have_rows( 'services-items' ) ) : ?>
                    <div class="items-subitems">
                        <?php while ( have_rows( 'services-items' ) ) : the_row(); ?>
                            <div class="subitems-item">
                                <?php the_sub_field( 'services-title_копировать' ); ?>
                                <?php the_sub_field( 'services-description_копировать' ); ?>
                                <?php $services_image__urls = get_sub_field( 'services-image_копировать' ); ?>
                                <?php if ( $services_image__urls ) :  ?>
                                    <?php foreach ( $services_image__urls as $services_image__url ): ?>
                                        <img src="<?php echo esc_url( $services_image__url ); ?>" />
                                    <?php endforeach; ?>
                                <?php endif; ?>
                            </div>
                        <?php endwhile; ?>
                    </div>
                <?php endif; ?>
        </div>
        <?php endwhile; ?>
    <?php endif; ?>
</div>

<?php get_footer();
