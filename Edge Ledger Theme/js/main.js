$(document).ready(function () {
    const currentYear = document.querySelector('#current-year');
    const date = new Date();
    currentYear.innerHTML = date.getFullYear();

    // API callback function which initialize and add the map
    // function initMap() {
    //     // User Location
    //     const loc = {
    //         lat: 42.361145,
    //         lng: -71.057083
    //     };
    //     // Centered map on location
    //     const map = new google.maps.Map(
    //         document.querySelector('.contact-map'),
    //         {
    //             zoom: 14,
    //             center: loc
    //         }
    //     );
    //     // The marker, to point the location on the map
    //     const marker = new google.maps.Marker({
    //         position: loc,
    //         map: map
    //     });
    // }
    var loc;
    $('#navbar a, .btn').click(function (e) {
        if (this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800);
        }
    });

    // Get Location
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        }
    }

    function showPosition(position) {
        loc = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        // Initialize the platform object
        const platform = new H.service.Platform({
            app_id: "{API_ID}",
            app_code: "{API_CODE}"
        });

        // Obtain the default map type from the platform object
        const mapType = platform.createDefaultLayers();

        // Instantiate (and Display) the map
        const map = new H.Map(
            document.querySelector('.contact-map'),
            mapType.normal.map,
            {
                zoom: 10,
                center: loc
            }
        );

        // Create the default UI:
        const ui = H.ui.UI.createDefault(map, mapType);
    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                console.log("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                console.log("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                console.log("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                console.log("An unknown error occurred.");
                break;
        }
    }

    getLocation();
});