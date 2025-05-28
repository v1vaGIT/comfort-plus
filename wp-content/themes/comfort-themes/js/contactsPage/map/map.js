export const yandexMap = () => {

  ymaps.ready(init);

  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      center: [48.418, 135.136118],
      zoom: 14
    });

    const BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
      "<div class='balloonContainer'>" +
      "<p class='balloonText'>Хабаровск,<br>\n" +
      "ул. Перекопская, 2в ст7</p>" +
      "</div>", {
        // Определяем метод getShape, который
        // будет возвращать размеры макета хинта.
        // Это необходимо для того, чтобы хинт автоматически
        // сдвигал позицию при выходе за пределы карты
      }
    );

    var myPlacemark = new ymaps.Placemark([48.417540, 135.127118], {}, {
      balloonLayout: BalloonContentLayout,
      hideIconOnBalloonOpen: false,
      balloonOffset: [20, -80]
    });
    myMap.controls.remove('searchControl')
    myMap.controls.remove('rulerControl')
    myMap.controls.remove('trafficControl')
    myMap.controls.remove('typeSelector')
    myMap.controls.remove('fullscreenControl')
    myMap.controls.remove('zoomControl')
    // myMap.behaviors.disable(['scrollZoom'])
    myMap.controls.remove('typeSelector')
    myMap.geoObjects.add(myPlacemark);
    // Показываем хинт на карте (без привязки к геообъекту).
    const el = document.getElementsByClassName("ymaps-2-1-79-copyrights-pane")[0];
    el.remove()
    myPlacemark.balloon.open([48.817540, 135.127118]);
  }
}
