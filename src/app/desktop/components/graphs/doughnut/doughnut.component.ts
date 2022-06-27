import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent {

  public doughnutChartLabels: string[] = ['Accounting', 'Master Data', 'Distribution'];
  public demodoughnutChartData: number[] = [500, 350, 800];
  public doughnutChartType: ChartType = 'doughnut';
  public chartColors: Array<any> = [
    {
      backgroundColor: ['#228B22', '#FF4500', '#1E90FF'],
      hoverBackgroundColor: ['#228B22', '#FF4500', '#1E90FF'],
      borderWidth: 2,
    }
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
