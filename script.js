$('.slider-single').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  fade: true,
  adaptiveHeight: true,
  infinite: true,
  useTransform: true,
  speed: 400,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

// Slider of life in zippy
function bigImg(x) {
  x.style.height = "200px";
  x.style.width = "200px";
}

function normalImg(x) {
  x.style.height = "100px";
  x.style.width = "150px";
}

// Google Map

function initMap() {
  // The location of Uluru
  const uluru = {
    lat: 26.342775,
    lng: 82.7249585
  };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru,
  });

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
