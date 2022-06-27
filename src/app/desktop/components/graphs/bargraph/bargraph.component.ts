import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bargraph',
  templateUrl: './bargraph.component.html',
  styleUrls: ['./bargraph.component.scss']
})
export class BargraphComponent {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2016', '2017', '2018', '2019', '2020'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 56, 55, 40], label: 'Hair Care' },
    { data: [28, 48, 40, 19, 27], label: 'Baby Care' },
    { data: [85, 58, 61, 75, 50], label: 'Personal Care' },
    { data: [58, 81, 20, 49, 67], label: 'Oral Care' }
  ];

  public chartColors: Array<any> = [
    { // green
      backgroundColor: 'rgb(0, 155, 0)',
      borderColor: 'rgb(0, 155, 0)',
      pointBackgroundColor: 'rgb(0, 155, 0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(0, 155, 0)'
    },
    { // mixed
      backgroundColor: 'rgb(97, 77, 149)',
      borderColor: 'rgb(97, 77, 149)',
      pointBackgroundColor: 'rgb(97, 77, 149)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(97, 77, 149)'
    },
    { // blue
      backgroundColor: 'rgb(1, 98, 255)',
      borderColor: 'rgb(1, 98, 255)',
      pointBackgroundColor: 'rgb(1, 98, 255)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(1, 98, 255)'
    },
    { // red
      backgroundColor: 'rgb(252, 40, 2)',
      borderColor: 'rgb(252, 40, 2)',
      pointBackgroundColor: 'rgb(252, 40, 2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(252, 40, 2)'
    },
  ];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
