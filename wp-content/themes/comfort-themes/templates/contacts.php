<?php
/*Template name: Страница контактов*/
get_header(); ?>
    <section>
        <div class="sectionInfo contactsPageSectionInfo">
            <div class="sectionInfo__sectionHeader">
                <h2 class="sectionInfo__sectionHeader__title">КОНТАКТЫ</h2>
                <div class="sectionInfo__sectionHeader__svgContainer">
                    <svg class="sectionInfo__sectionHeader__svgContainer__svg" width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="11"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="contactsPageContentSectionContent">
            <div class="contactsPageContentSectionContent__row">
                <div class="contactsPageContentSectionContent__row__element">
                    <h3 class="contactsPageContentSectionContent__row__element__header">Директор</h3>
                    <p class="contactsPageContentSectionContent__row__element__name">Фамилия Имя Отчество</p>
                    <div class="contactsPageContentSectionContent__row__element__links">
                        <a class="contactsPageContentSectionContent__row__element__links__link" href="tel:+7(4212)00-00-00">+7 (4212) 00-00-00</a>
                        <a class="contactsPageContentSectionContent__row__element__links__link" href="mailto:pochta@komfort.mail.ru">pochta@komfort.mail.ru</a>
                    </div>
                </div>
                <div class="contactsPageContentSectionContent__row__element">
                    <h3 class="contactsPageContentSectionContent__row__element__header">Руководитель</h3>
                    <p class="contactsPageContentSectionContent__row__element__name">Фамилия Имя Отчество</p>
                    <div class="contactsPageContentSectionContent__row__element__links">
                        <a class="contactsPageContentSectionContent__row__element__links__link" href="tel:+7(4212)00-00-00">+7 (4212) 00-00-00</a>
                        <a class="contactsPageContentSectionContent__row__element__links__link" href="mailto:pochta@komfort.mail.ru">pochta@komfort.mail.ru</a>
                    </div>
                </div>
            </div>
            <div class="contactsPageContentSectionContent__row">
                <div class="contactsPageContentSectionContent__row__element">
                    <h3 class="contactsPageContentSectionContent__row__element__header">Прораб</h3>
                    <p class="contactsPageContentSectionContent__row__element__name">Фамилия Имя Отчество</p>
                    <div class="contactsPageContentSectionContent__row__element__links">
                        <a class="contactsPageContentSectionContent__row__element__links__link" href="tel:+7(4212)00-00-00">+7 (4212) 00-00-00</a>
                        <a class="contactsPageContentSectionContent__row__element__links__link" href="mailto:pochta@komfort.mail.ru">pochta@komfort.mail.ru</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="map" class="contactsPageMap"></div>
    </section>

<?php
get_footer();