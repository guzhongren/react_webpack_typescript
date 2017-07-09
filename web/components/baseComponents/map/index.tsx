import * as React from 'react';
import * as esriLoader from 'esri-loader';

if (!esriLoader.isLoaded()) {
    esriLoader.bootstrap((err) => {
        if (err) {
            console.error(err);
        }
    });
}

import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");



export interface EsriMapExtProps {
    style?: React.CSSProperties;
    onMapCreated?: (view: MapView) => void;
}
export interface EsriMapExtState {
    style?: React.CSSProperties
}
/**
 * EsriMapExt
 */
export class EsriMapExt extends React.Component<any, any> {
    constructor(props) {
        super(props);
        let style = Object.assign({ height: "calc(100% - 56px)" }, this.props.style);
        this.state = {
            style: style
        };
        this.initMap();
    };

    componentDidMount() {

    }
    componentWillReceiveProps(nextProps: EsriMapExtProps) {
        if (this.props !== nextProps) {
            this.setState({
            });
        }
    }
    initMap() {
        let map, view;
        new Promise((resolve, reject) => {
            esriLoader.dojoRequire(['esri/Map', 'esri/views/MapView'], (EsriMap, MapView) => {
                map = new EsriMap({
                    basemap: "osm"
                });
                view = new MapView({
                    container: "viewDiv",  // Reference to the scene div created in step 5
                    map: map,  // Reference to the map object created before the scene
                    zoom: 12,  // Sets the zoom level based on level of detail (LOD)
                    center: [103.6, 36.3]  // Sets the center point of view in lon/lat
                });
            })
        }).then(view => {
            console.log(view);
            
            this.props.onMapCreated(view);
        });;
    }
    refs: {
        [string: string]: any;
    }

    render() {
        return (
            <div id="viewDiv" style={this.state.style}></div>
        );
    }
}