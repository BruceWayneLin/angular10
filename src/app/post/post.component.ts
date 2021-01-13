import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  products = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.sendPostRequest(1, {}, {}).subscribe((data)=>{
      this.products = data;
      console.log(this.products);
    })
  }
}
