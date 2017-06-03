
import * as React from "react";
import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");


export interface MapProps{

}
export interface MapState{

}

export class EsriMapExt extends React.Component<MapProps, MapState>{
    map:EsriMap;
    constructor(props:MapProps, state: MapState){
        super(props);
        this.state={

        };
        this.createMap();
    }
    createMap(){
        this.map= new EsriMap({
            basemap: "streets"
        });
        let view= new MapView({
            map: this.map,
            container: this.refs.map,
            center:[-118.244, 34.052],
            zoom:12
        });
    }

    componentDidMount(){

    }
    refs:{
        map: HTMLDivElement
    }
    render(){
        return(
            <div ref="map"></div>
        )
    }
}