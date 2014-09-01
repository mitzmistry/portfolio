(function() {

    "use strict";

    $(".bxslider").bxSlider({
        controls: false
    });

    var toggleWorkWelcome = function() {
        var $this = $(this);
        var $currentlyHidden = $this.find(".hidden");
        var $notHidden = $currentlyHidden.siblings();

        $currentlyHidden.removeClass("hidden");
        $notHidden.addClass("hidden");
    };

    var scrollToWork = function() {
        $.scrollTo($("#work"), {
            // allow for the header height
            offset: -62,
            duration: 300
        });
    };

    $("#work-welcome")
        .on("mouseenter", toggleWorkWelcome)
        .on("mouseleave", toggleWorkWelcome)
        .on("click", scrollToWork);

})();