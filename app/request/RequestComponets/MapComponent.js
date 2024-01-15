"use client";

import { GoogleMap, useJsApiLoader, MarkerF, InfoWindow } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

export default function MapComponent(props) {
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);
  const [center, setCenter] = useState({
    lat: -3.7500911497441876,
    lng: -38.538217879572095
  });

  const containerStyle = {
    width: '100%',
    height: '90vh'
  };

  const options = {
    mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID,
    mapTypeControl: false,
    zoomControl: false,
    fullscreenControl: false,
    clickableIcons: false,
    scrollwheel: true,
    streetviewControl: false,
  };

  const pinIcon = {
    url: "/assets/pin.png",
    scaledSize: {width: 50, height: 50},
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  })

  function MarkerClicked(event) {
    console.log("marker clicked")
    console.log(event.latLng.lat())
    console.log(event.latLng.lng())
    setIsInfoWindowOpen(true);
  }

  function MarkerFinishDrag(event) {
    console.log("the final latitude is:", event.latLng.lat())
    console.log("the final longitude is:", event.latLng.lng())
  }


  useEffect(() => {
    if(props.searchOriginLatitude && props.searchOriginLongitude){
      console.log(`map ${props.searchOriginLatitude} and ${props.searchOriginLongitude}`);
      setCenter({
        lat: props.searchOriginLatitude,
        lng: props.searchOriginLongitude
      });
    }
  }, [props.searchOriginLatitude, props.searchOriginLongitude])


  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={options}
        center={center}
        zoom={13}
        onClick={() => setIsInfoWindowOpen(false)}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        {(props.searchOriginLatitude != null && props.searchOriginLongitude != null) && (
          <MarkerF
            position={{
              lat:props.searchOriginLatitude,
              lng:props.searchOriginLongitude
            }}
          />
        )}
       {/* <MarkerF
          position={{ lat: -3.7769816422099645, lng: -38.54556575583966 }}
          icon={pinIcon}
          visible={true}
          cursor={'pointer'}
          draggable
          onClick={MarkerClicked}
          onDragEnd={MarkerFinishDrag}
        >
          { isInfoWindowOpen && (
              <InfoWindow
                onCloseClick={() => setIsInfoWindowOpen(false)}
                position={{ lat: -3.7769816422099645, lng: -38.54556575583966  }}
              >
              <div className='w-80 p-2'>
                <div className='flex items-center mb-2 space-x-5'>
                  <img
                    src='https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D'
                    className='w-14 h-14 rounded-full'
                  />
                  <div>
                    <h3 className='text-xl font-bold'>Some title</h3>
                    <p>Some subtitle</p>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus cursus arcu, quis dignissim turpis aliquet at. Aenean viverra, nulla non semper maximus, felis enim.
                </p>
              </div>
            </InfoWindow>
          )}
        </MarkerF> */}
      </GoogleMap>
  ) : <></>
}
