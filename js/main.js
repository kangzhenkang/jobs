$(document).ready(function() {
  $('#carousel_about').carouFredSel({
    circular: false,
    infinite: false,
    auto: false,
    items: {
      visible: 1
    },
    pagination: {
      container: '#pagination_about',
      anchorBuilder: function(nr) {
        return '<a class="pagi-item" href="#' + nr + '">' + nr + '</a>';
      }
    }
  });
});
