(function($) {
    $(function() {
        var $ = jQuery = jquery_3_1_0;
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();
                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.slider__prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.slider__next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel').jcarouselAutoscroll({
            interval: 10000,
            target: "+=1",
            autostart: true
        });
    });

    $(function() {
        var $ = jQuery = jquery_3_1_0;
        var jcarousel = $('.jcarousel--second');

        jcarousel
            .on('jcarousel--second:reload jcarousel--second:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();
                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel--second').jcarouselAutoscroll({
            interval: 5000,
            target: "+=1",
            autostart: true
        });
    });
    $(function() {
        var $ = jQuery = jquery_3_1_0;
        var jcarousel = $('.jcarousel--third');

        jcarousel
            .on('jcarousel--third:reload jcarousel--third:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();
                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel--third').jcarouselAutoscroll({
            interval: 1000,
            target: "+=1",
            autostart: true
        });
    });

    $(function () {
      function renderList() {

        var images = $('.search__input').val();
            if (images.length === 0) {
                images = 'sea';
            }
       
        $.ajax({
            url: "https://pixabay.com/api/?key=3536504-f5f43fa39c601bc2382590432&q=" + images + "&per_page=7",
            success: function(data) {
              if ( parseInt(data.totalHits) === 0  || images === '')  {
                return false;
              } else 
                
                var myImgs = $('.grid-img');
                var myTitle = $('.grid-title');
                for (var i = 0; i < myImgs.length; i++) {
                    $(myImgs[i]).attr('src', data.hits[i].webformatURL);
                    $(myTitle[i]).text(data.hits[i].tags);
                }
            $('.search__input').val('');

                var $grid = $('.grid').imagesLoaded( function() {
                  // init Masonry after all images have loaded
                      $grid.masonry({
                        columnWidth: ".grid-sizer",
                        itemSelector: ".grid-item",
                      });
                    });
            }
        });
    }
    $('#search__form').submit(function(e) {
        e.preventDefault();
        renderList();

    });
    renderList();
 });


})(jQuery);