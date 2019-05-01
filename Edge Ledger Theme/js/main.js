$(document).ready(function () {
    const currentYear = document.querySelector('#current-year');
    const date = new Date();
    currentYear.innerHTML = date.getFullYear();

    // API callback function which initialize and add the map
    function initMap() {
        // User Location
        const loc = {
            lat: 42.361145,
            lng: -71.057083
        };
        // Centered map on location
        const map = new google.maps.Map(
            document.querySelector('.contact-map'),
            {
                zoom: 14,
                center: loc
            }
        );
        // The marker, to point the location on the map
        const marker = new google.maps.Marker({
            position: loc,
            map: map
        });
    }

    $('#navbar a, .btn').click(function (e) {
        if (this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800);
        }
    });

});