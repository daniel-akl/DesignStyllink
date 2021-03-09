/*
 *	fit-to-screen
 */
(function ($) {
  "use strict";
  var setFitScreenHeight = function () {
    if ($(".fit-to-screen").length) {
      var $this = $(".fit-to-screen");
      var wh = $(window).height();
      var hh = $("header").outerHeight();
      var fh = $("footer").length ? $("footer").outerHeight() : 0;
      if ($("body").hasClass("transparent-header-footer")) {
        var ch = $("#wpadminbar").length ? wh - 32 : wh;
      } else if ($("body").hasClass("transparent-header")) {
        var ch = $("#wpadminbar").length ? wh - (fh + 32) : wh - fh;
      } else if ($("body").hasClass("transparent-footer")) {
        var ch = $("#wpadminbar").length ? wh - (hh + 32) : wh - hh;
      } else {
        var ch = $("#wpadminbar").length ? wh - (hh + fh + 32) : wh - (hh + fh);
      }
      if ($("body").hasClass("framed-body")) {
        var borderWidth = parseInt($("body").css("border-left-width"));
        ch -= borderWidth * 2;
      }
      $this.height(ch);
    }
  };
  $(window).on("resize", setFitScreenHeight);
  $(document).on("ready", setFitScreenHeight);
})(jQuery);

/*
 *	vertical-projects
 */
(function ($) {
  "use strict";
  $(document).on("ready", function () {
    if ($(".vertical-projects").length) {
      if ($(".vertical-projects").parents(".autoslide").length) {
        return false;
      }
      var projectsContainer = $(".vertical-projects");
      var projects = projectsContainer.find(".vertical-project");
      var numberOfProjects = projects.length;
      projects.width(100 / numberOfProjects + "%");
      projects.hover(
        function () {
          var containerSize = projectsContainer.width();
          var toExpand = $(this).find("img").width();
          if (toExpand > $(window).width() - (numberOfProjects - 1) * 230) {
            toExpand = $(window).width() - (numberOfProjects - 1) * 230;
          }
          //
          // containerSize:toExpand = 100:x
          var toExpandPerc = (toExpand * 100) / containerSize;
          //					console.log(toExpandPerc)
          var leftSize = containerSize - toExpand;
          var sizeOfLeftElements = leftSize / (numberOfProjects - 1);
          //
          // containerSize:sizeOfLeftElements = 100:x
          var sizeOfLeftElementsPerc =
            (sizeOfLeftElements * 100) / containerSize;
          //					console.log(sizeOfLeftElementsPerc)
          projects.not($(this)).css({
            width: sizeOfLeftElementsPerc + "%",
          });
          $(this).css({
            width: toExpandPerc + "%",
          });
        },
        function () {
          projects.css({
            width: 100 / numberOfProjects + "%",
          });
        }
      );
    }
  });
})(jQuery);

$(document).ready(function () {
  var wait_time = 1400;
  var fadein_time = 700;
  $("body").css("background", "black");

  $("._kvls4").show();
  $(".vertical-projects").hide();
  $("header").hide();
  $("footer").hide();
  $(".hideonload").hide();
  setTimeout(function () {
    $(".vertical-projects").fadeIn(fadein_time);
    $("header").fadeIn(fadein_time);
    $("footer").fadeIn(fadein_time);
    $(".hideonload").fadeIn(fadein_time);

    $("._kvls4").fadeOut(fadein_time);
    $(".loader-logo").fadeOut(fadein_time, function () {
      $(this).remove();
    });
    if (!$("body").hasClass("home")) {
      $("body").css("background", "white");
    }
  }, wait_time);
});
