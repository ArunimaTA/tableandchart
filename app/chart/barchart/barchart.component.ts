import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { DefaultService } from 'src/app/layout/default.service';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  chart = [];

  constructor(private data : DefaultService) { }

  ngOnInit() {
    this.data.getTableData().subscribe(res => {
      let labels = res["chartdata"].map((x: { player : string; }) => x.player);
      let values = res["chartdata"].map((x: { score : number}) => x.score);

      var ctx = document.getElementById('barChart') as HTMLCanvasElement;
      var barChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Player Score',
              data: values,
              backgroundColor: ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"],
              borderColor: ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"],
              fill: false
          
            },
          ]
        },
        options:{
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          },
          animation: {
            duration: 1000
          }
        }
      });
    })
  }

}
