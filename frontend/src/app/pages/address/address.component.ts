import { Component, OnInit } from '@angular/core';
import { IAddress } from './address.interface';
import { HttpService } from '../../services/http.service'


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  displayedColumns: string[] = ['id', 'city', 'country'];
  dataSource;

  constructor(private _httpService: HttpService) {}

  ngOnInit(): void {
        this._httpService.getDataFromServer('Addresses').subscribe(response =>{
      this.dataSource = response
    })
  }
}
