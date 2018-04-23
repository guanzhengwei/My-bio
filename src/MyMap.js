import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, InfoWindow } from 'react-amap';

class MyMap extends Component {
    constructor(){
        super(); 
        this.markerEvent1 = {
          click: (e) => {
            alert("居住：门头馨园")
          }
          // ... 支持绑定所有原生的高德 Marker 事件
        }
        this.markerEvent2 = {
            click: (e) => {
              alert("工作：互联网金融中心")
            },
            // ... 支持绑定所有原生的高德 Marker 事件
        }
    }
    render() {
        return (
            <div className="myMap">
                <h2>Where I've Lived and Worked</h2>
                <div className="app">
                    <Map 
                        amapkey={'a301587314c40d9606a99218ff208265'} 
                        center={{longitude: 116.224189, latitude: 39.979193}}
                        zoom={11}
                    >
                        <Marker position={{longitude: 116.224189, latitude: 39.979193}} events={this.markerEvent1} />
                        <Marker position={{longitude: 116.313061, latitude: 39.979386}} events={this.markerEvent2} />
                    </Map>
                </div>
            </div>
        )
    }
}



export default MyMap;

