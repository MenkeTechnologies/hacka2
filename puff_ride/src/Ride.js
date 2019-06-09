import React from 'react';
import Map from './map';


function initMap() {
    var directionsService = new window.google.maps.DirectionsService;
    var directionsDisplay = new window.google.maps.DirectionsRenderer;
    var map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay.setMap(map);

    var onChangeHandler = function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    document.getElementById('start').addEventListener('change', onChangeHandler);
    document.getElementById('end').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
        origin: document.getElementById('start').value,
        destination: document.getElementById('end').value,
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

export const Ride = ({state}) => {

    return (
        <Map
            id="myMap"
            options={{
                center: {lat: 42.2808, lng: -83.7430},
                zoom: 12
            }}
            onMapLoad={map => {
                const DirectionsService = new window.google.maps.DirectionsService();
                var directionsDisplay = new window.google.maps.DirectionsRenderer();
                DirectionsService.route({
                    origin: new window.google.maps.LatLng(42.2411499, -83.6129939),
                    destination: new window.google.maps.LatLng(42.2808, -83.7430),
                    travelMode: window.google.maps.TravelMode.DRIVING,
                }, (result, status) => {
                    if (status === window.google.maps.DirectionsStatus.OK) {
                        console.log(result)
                        directionsDisplay.setMap(map);
                        directionsDisplay.setDirections(result);
                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
                });
                var marker = new window.google.maps.Marker({
                    position: {lat: 42.2808, lng: -83.7430},
                    map: map,
                    title: 'Hello Istanbul!'
                });

            }}
        />

    );
}