import React, { Component } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const map = {
    center: { lat: 23.5859, lng: 58.4059 },
    zoom: 11
};

const ComapanyMap = withScriptjs(withGoogleMap((props) =>

    <GoogleMap
        defaultZoom={map.zoom}
        defaultCenter={map.center}
    >
        {props.isMarkerShown && <Marker position={map.center} />}
    </GoogleMap>
))


export default class ContactUs extends Component {
    static defaultProps = {
        center: { lat: 59.95, lng: 30.33 },
        zoom: 11
    };
    render() {
        return (
            <div style={{ height: this.props.height || '241px', width: this.props.width || '100%' }}>
                <ComapanyMap
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAO2GGQ9kw7r_Gf4w3quxc_RlGeVSt37KU&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: this.props.height || '241px', width: this.props.width || '100%' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}