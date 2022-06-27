import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent {
  public pieChartLabels: string[] = ['Chrome', 'Safari', 'Firefox'];
  public pieChartData: number[] = [40, 50, 10];
  public pieChartType: ChartType = 'pie';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
