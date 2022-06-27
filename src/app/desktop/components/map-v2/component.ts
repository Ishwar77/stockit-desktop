import { Component, ChangeDetectorRef, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

import statesJson from '../../../../assets/d3/ne_10m_admin_1_India_Official.json';

export interface MapDimension {
    height?: number;
    width?: number;
    scale?: number;
}

/**
 * Usage
 * <app-map-v2-component (clickEvent)="clickedState($event)"></app-map-v2-component>
 */
@Component({
    selector: 'app-map-v2-component',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})
export class MapComponentV2 implements AfterViewInit {
    loading = true;
    private _dimensions: MapDimension = { height: 550, width: 450, scale: 900 };
    @Input()
    get dimensions() {
        return this._dimensions;
    }

    set dimensions(d) {
        this._dimensions = d;
    }

    @Output() clickEvent = new EventEmitter();


    @ViewChild('mapContainer', { static: true }) mapContainer: ElementRef;

    constructor(
        private _cdRef: ChangeDetectorRef
    ) {
    }

    ngAfterViewInit() {
        // D3 test
        // d3.selectAll('div').style('border', 'solid red 1px');
        setTimeout(() => {
            this.initActions();
            this.loading = false;
        }, 300);

    }

    private initActions() {
        const mapContainer = this.mapContainer.nativeElement;
        const path =  window['BASE_URL'] + 'assets/d3/ne_10m_admin_1_India_Official.json';
        console.log('JSON data path = ', path);
        d3.json(path)
            .then(topoMap => {
                const states = topojson.feature(topoMap, topoMap.objects.ne_10m_admin_1_India_Official);
                console.log('States = ', states);
                // Map render
                const map = stateMap(states['features'])/* .width(800).height(700).scale(1200) */;
                d3.select(mapContainer).call(map);
            }).catch(err => {
                if (err) throw err;
            });

        const stateMap = (states) => {

            let width = this._dimensions.width, height = this._dimensions.height, scale = this._dimensions.scale;
            // var color = ["#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3"]
           // const color = ["green", "purple", "grey", "silver", "tomato"];
            const color = ["#fd471c", "#0089d1", "#45a300", "#e4e4e4"];

            const manageClick = (obj) => {
                console.log('Clicked obj = ', obj);
                this.clickEvent.next(obj);
            };

            function render(selection) {
                selection.each(function () {

                    d3.select(this).select("svg").remove();
                    var svg = d3.select(this).append("svg")
                        .attr("width", width)
                        .attr("height", height);

                    var projection = d3.geoMercator()
                        .center([83, 23])
                        .scale(scale)
                        .translate([width / 2, height / 2]);
                    var path = d3.geoPath(projection);
                    var selectState = svg.selectAll("g").data(states).enter().append("g").attr("class", "state");

                    selectState.append("path")
                        .style("fill", (d) => { return color[Math.floor(Math.random() * color.length)]; })
                        .attr("d", path)
                        .on('click', manageClick)
                        .on("mousemove", (d) => {
                            return 
                        })
                        .append("title");
                        ;

                    svg.selectAll("text").data(states).enter().append("text")
                        .attr("class", (d) => { return "label " + d['id']; })
                        .attr("transform", (d) => { return "translate(" + path.centroid(d) + ")"; })
                        .attr("dy", ".35em")
                        .text((d) => { return d['properties']['name']; });
                });
            } // render
            render.height = function (value) {
                if (!arguments.length) return height;
                height = value;
                return render;
            };
            render.width = function (value) {
                if (!arguments.length) return width;
                width = value;
                return render;
            };
            render.scale = function (value) {
                if (!arguments.length) return scale;
                scale = value;
                return render;
            };
            return render;
        } // stateMap
    }
}
