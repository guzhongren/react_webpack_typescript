/**
 * ../routers.tsx
 */
import * as React from 'react';
import { Map, TileLayer } from 'react-leaflet';
// import Control from 'react-leaflet-control';
import "./style/leaflet.less";
// const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const osm = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [36.05, 103.75];
const zoomLevel = 12;
export class LeafletMap extends React.Component<any, any>{
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
        }
    }
    render() {
        return (
            <Map center={mapCenter} zoom={zoomLevel} className="leafletStyle" style={{ height: "100%" }}>
                <TileLayer
                    attribution={stamenTonerAttr}
                    url={osm}
                />
            </Map>
        )
    }
}