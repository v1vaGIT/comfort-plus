<?php
/*Template name: Страница вопросов*/
get_header(); ?>

<section class="headerSection">
    <h2 class="headerSection__title">вопрос - <br>ответ</h2>
    <div class="headerSection__background faqPageHeaderSection__background"></div>
</section>
<section>
    <div id="accordion" class="accordionContainer">
        <?php if ( have_rows( 'question-item' ) ) : ?>
            <?php while ( have_rows( 'question-item' ) ) : the_row(); ?>
                <div>
                    <div class="accordionContainer__accordion">
                        <div class="accordionContainer__accordionTextContainer">
                            <div class="accordionContainer__accordionTextContainer__title"><?php the_sub_field( 'question-item-title' ); ?></div>
                        </div>
                        <div class="accordionContainer__accordionSvgContainer">
                            <svg class="accordionContainer__accordionSvgContainer__svg" width="51" height="21" viewBox="0 0 51 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2L25.5 19L49 2" stroke="white" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                    <div class="accordionContainer__panel">
                        <?php the_sub_field( 'question-item-description' ); ?>
                    </div>
                </div>
            <?php endwhile; ?>
        <?php else : ?>
            <?php // No rows found ?>
        <?php endif; ?>
    </div>
</section>
<section class="endPageLink">
    <p class="endPageLink__topText">Не нашли ответа на свой вопрос?</p>
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
