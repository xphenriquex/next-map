"use client";

import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

export default function RequestPage() {

  const containerStyle = {
    width: '100%',
    height: '90vh'
  };

  const center = {
    lat: 51.51220281066732,
    lng: -0.09152185685364918
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

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  })

  return isLoaded ? (
      <GoogleMap mapContainerStyle={containerStyle} options={options} center={center} zoom={13}>
        { /* Child components, such as markers, info windows, etc. */ }
        <MarkerF position={{ lat: 51.50564400635568, lng: -0.07531847571146957 }} />
        <></>
      </GoogleMap>
  ) : <></>
}
