import { Component } from '@angular/core';
import { ChartType } from 'chart.js';


@Component({
  selector: 'app-dougnut',
  templateUrl: './dougnut.component.html',
  styleUrls: ['./dougnut.component.scss']
})
export class DougnutComponent {

  public doughnutChartLabels: string[] = ['Accounting', 'Master Data', 'Distribution'];
  public demodoughnutChartData: number[] = [350, 450, 100];
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
