import React, { useState } from "react";
import "./mapStyle.css";
import ReactMapGL from "react-map-gl";
import { defaultCenterCoord } from "./centerCoord";
import Navbar from "../../components/Navbar/Navbar";
import "mapbox-gl/dist/mapbox-gl.css";
import PetMapMarkersList from "../../components/MapMarkersList/PetMarkers/MapMarkersList";
import { Link } from "react-router-dom";
import mapboxgl from "mapbox-gl";
mapboxgl.workerClass =
  // eslint-disable-next-line import/no-webpack-loader-syntax
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const MapPage = () => {
  const MAP_TOKEN = process.env.REACT_APP_MAP_TOKEN;
  const MAP_STYLE = process.env.REACT_APP_MAP_STYLE;

  const defaultCenter = defaultCenterCoord;

  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    longitude: defaultCenter.long,
    latitude: defaultCenter.lat,
    zoom: 11.5,
  });

  return (
    <div className="mapPage">
      <Navbar />
      <ReactMapGL
        {...viewPort}
        mapStyle={MAP_STYLE}
        mapboxAccessToken={MAP_TOKEN}
        onMove={evt => setViewPort(evt.viewState)}
        className="map"
      >
        <PetMapMarkersList />
      </ReactMapGL>

      <div className="mapPage-create">
        <Link to="/leave-pet-data">Leave data</Link>
      </div>
    </div>
  );
};

export default MapPage;
