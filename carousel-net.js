window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider-net'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '#dots',
        arrows: {
            prev: '.glider-prev-net',
            next: '.glider-next-net'
        },
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            }
        ]
    })
})