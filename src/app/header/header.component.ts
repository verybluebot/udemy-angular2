import { Component, OnInit } from '@angular/core';
import { HamstersService } from '../services/hamsters.service';

@Component({
  selector: 'hb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private HamstersService: HamstersService
  ) { }

  ngOnInit() {
  }

  saveHamsters() {
    this.HamstersService.storeData().subscribe((res) => {
      console.log('response', res)
    }, (err) => {
      console.log('error:', err);
    })
  }

  getHamsters() {
    this.HamstersService.getData();
  }
}
