// import 'accordionjs/accordion.css'
import $ from 'jquery';
import 'accordionjs/accordion'

export const accordion = () => {
  $('#accordion').accordionjs({
    // Allow self close.(data-close-able)
    closeAble   : true,

    // Close other sections.(data-close-other)
    closeOther  : true,

    // Animation Speed.(data-slide-speed)
    slideSpeed  : 150,

    // The section open on first init. A number from 1 to X or false.(data-active-index)
    activeIndex : 1,

    // Callback when a section is open
    openSection: function( section ){},

    // Callback before a section is open
    beforeOpenSection: function( section ){},
  });
}
