import * as L from 'leaflet';

function createMap(lat = 0, lng = 0, zoom = 3) {
  const TOKEN =
    'pk.eyJ1IjoibGFtYW9sbyIsImEiOiJja2l0ZjRobHUwY2pyMzFwOTZhdzcwaG00In0.VX1HqNOALa-QcQPyPSedYA';

  // Comprobar si el mapa ya existe, si es así, borrarlo (para evitar problemas con la libreria leaflet)
  let container = L.DomUtil.get('mapid');
  if (container != null) {
    container._leaflet_id = null;
  }

  // Creo mapa con las coordenadas y zoom pasados por parmateros (sacadas de la API de IP)
  let mymap = L.map('mapid').setView([lat, lng], zoom);

  L.tileLayer(
    `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${TOKEN}`,
    {
      maxZoom: 18,
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(mymap);
}

export default createMap;
