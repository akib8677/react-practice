import { useEffect, useRef, useState, Fragment } from 'react';
import L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import icon from '../../shared/constant'

const Map = () => {
  const mapRef = useRef(null);
  const markerRef = useRef (null);

  const [markerPosition, setMarkerPosition] = useState({
    lat: 26.120888,
    lng: 85.364723
  })

  useEffect(() => {
    var container = L.DomUtil.get("map");
    if (container != null) {
      container._leaflet_id = null;
    }

    mapRef.current = L.map('map', {
      center: markerPosition,
      zoom: 16,
      dragging:true,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    })
    mapRef.current.dragging.enable();

  }, [markerPosition])

  useEffect(() => {

    if (markerRef.current) {
      markerRef.current.setLatLng(markerPosition)
    } else {
      markerRef.current = L.marker(markerPosition, { icon: icon }).addTo(mapRef.current)
    }

    debugger
    const searchControl = new GeoSearchControl({
      // style: 'bar',
      provider: new OpenStreetMapProvider(),
      showPopup: true,
      marker: {
        icon: icon,
        draggable: false,
      }
    });
    mapRef.current.addControl(searchControl);

  }, [markerPosition, icon])


  return (
    <Fragment>
      <div id='map'></div>
    </Fragment>
  )
}

export default Map;