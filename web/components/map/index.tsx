import * as React from 'react';
import * as esriLoader from 'esri-loader';

if (!esriLoader.isLoaded()) {
    esriLoader.bootstrap((err) => {
        if (err) {
            console.error(err);
        }
    });
}

// import EsriMap = require("esri/Map");
// import MapView = require("esri/views/MapView");



export interface EsriMapExtProps {
    style?: React.CSSProperties
}
export interface EsriMapExtState {
    style?: React.CSSProperties
}
/**
 * EsriMapExt
 */
export class EsriMapExt extends React.Component<EsriMapExtProps, EsriMapExtState> {
    constructor(props) {
        super(props);
        let style= Object.assign({height:"calc(100% - 48px)"}, this.props.style);
        this.state = {
            style: style
        }
    };

    componentDidMount() {
        esriLoader.dojoRequire(['esri/Map', 'esri/views/MapView'], (EsriMap, MapView) => {
            var map = new EsriMap({
                basemap: "streets"
            });
            var view = new MapView({
                container: "viewDiv",  // Reference to the scene div created in step 5
                map: map,  // Reference to the map object created before the scene
                zoom: 4,  // Sets the zoom level based on level of detail (LOD)
                center: [15, 65]  // Sets the center point of view in lon/lat
            });
        })
    }
    componentWillReceiveProps(nextProps: EsriMapExtProps) {
        if (this.props !== nextProps) {
            this.setState({
            });
        }
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