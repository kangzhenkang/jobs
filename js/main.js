$(document).ready(function() {

  $('#carousel_about').carouFredSel({
    circular: false,
    infinite: false,
    auto: false,
    items:  1,
    pagination: {
      container: '#pagination_about',
      anchorBuilder: function(nr) {
        return '<a class="pagi-item" href="#' + nr + '">' + nr + '</a>';
      }
    }
  });

  $('#carousel_campus_dev').carouFredSel({
    circular: false,
    infinite: false,
    auto: false,
    items:  1,
    pagination: {
      container: '#pagination_campus_dev',
      anchorBuilder: function(nr) {
        return '<a class="pagi-item" href="#' + nr + '">' + nr + '</a>';
      }
    }
  });

  $('#carousel_campus_other').carouFredSel({
    circular: false,
    infinite: false,
    auto: false,
    items:  1,
    pagination: {
      container: '#pagination_campus_other',
      anchorBuilder: function(nr) {
        return '<a class="pagi-item" href="#' + nr + '">' + nr + '</a>';
      }
    }
  });

  $('#tab_campus').carouFredSel({
    circular: false,
    infinite: false,
    direction: 'down',
    auto: false,
    items:  1,
    pagination: {
      container: '#tab_nav_campus',
      anchorBuilder: function() {
        return '<a class="tab-item">' + $(this).data('categ') + '</a>';
      }
    }
  });

  $('#carousel_social_dev').carouFredSel({
    circular: false,
    infinite: false,
    auto: false,
    items:  1,
    pagination: {
      container: '#pagination_social_dev',
      anchorBuilder: function(nr) {
        return '<a class="pagi-item" href="#' + nr + '">' + nr + '</a>';
      }
    }
  });

  $('#carousel_social_other').carouFredSel({
    circular: false,
    infinite: false,
    auto: false,
    items:  1,
    pagination: {
      container: '#pagination_social_other',
      anchorBuilder: function(nr) {
        return '<a class="pagi-item" href="#' + nr + '">' + nr + '</a>';
      }
    }
  });

  $('#tab_social').carouFredSel({
    circular: false,
    infinite: false,
    direction: 'down',
    auto: false,
    items:  1,
    pagination: {
      container: '#tab_nav_social',
      anchorBuilder: function() {
        return '<a class="tab-item">' + $(this).data('categ') + '</a>';
      }
    }
  });

});
