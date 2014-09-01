(function() {

    "use strict";

    var numberOfSliders = 7;

    for (var i = 1; i <= numberOfSliders; i++) {
        var sliderSelector = '#project-' + i + '-slider'
          , nextSelector = '#slider-' + i + '-next'
          , prevSelector = '#slider-' + i + '-prev';

        $(sliderSelector).bxSlider({
          mode: 'fade',
          nextSelector: nextSelector,
          prevSelector: prevSelector,
          nextText: '>',
          prevText: '<'
        });
    }

    // resize the title div to begin with and on any resize
    var resizeTitleDiv = function() {
      $("#welcome").height($(window).height());
    };


    resizeTitleDiv();
    $(window).on("resize", resizeTitleDiv);
})()