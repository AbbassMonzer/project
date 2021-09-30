import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-kendo',
  templateUrl: './kendo.component.html',
  styleUrls: ['./kendo.component.css'],
})
export class KendoComponent implements OnInit {
  @Input() public series: any[];
  public categories: string[] = ['Cities'];
  constructor() {}

  ngOnInit(): void {

  }
}
