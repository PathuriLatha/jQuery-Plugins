//animation list: flip, slice, box3D, pixel, fade, glide, card

$(document).ready(function () {

    $('.slider-area').slideWiz(
      {
        auto: true,
        speed: 3000,
        type: 'box3D',
        file: [
            {
                src: "./images/cover_1.jpg",
                title: 'Welcome To our website',
                desc: "Default jQuery plugins for SlideWiz Slider Using javascript, jQuery, HTML, CSS",
                btnTitle : 'Conatct Us',
                btnUrl : 'https://goo.gl/nwKB9C'
            },
            {
                src: "./images/cover_2.jpg",
                title: 'Welcome To our website',
                desc: "Default jQuery plugins for SlideWiz Slider Using javascript, jQuery, HTML, CSS",
                btnTitle : 'Product',
                btnUrl : 'https://goo.gl/nwKB9C'
            },
            {
                src: "./images/cover_3.jpg",
                title: 'Welcome To our website',
                desc: "Default jQuery plugins for SlideWiz Slider Using javascript, jQuery, HTML, CSS",
                btnTitle : 'Profile',
                btnUrl : 'https://goo.gl/nwKB9C'
            },
            {
                src: "./images/cover_4.jpg",
                title: 'Welcome To our website',
                desc: "Default jQuery plugins for SlideWiz Slider Using javascript, jQuery, HTML, CSS",
                btnTitle : 'Home',
                btnUrl : 'https://goo.gl/nwKB9C'
            }
        ]
      }
    )

});
