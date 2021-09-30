import { Component, OnInit } from '@angular/core';
import { IPerson } from './person.interface';
import { HttpService } from '../../services/http.service'


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  series;
  displayedColumns: string[] = ['firstName', 'lastName', 'city', 'country'];
  dataSource;
  constructor(private _httpService: HttpService) {}

  ngOnInit(): void {
        this._httpService.getDataFromServer('Person').subscribe(response =>{
      this.dataSource = response
    })


            this._httpService.getDataFromServer('Person/address-data').subscribe(response =>{
      this.series = response
    })
  }
}
