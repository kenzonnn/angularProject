import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent implements OnInit {

  categoryId! : Number;

  constructor(private ac : ActivatedRoute){}

  ngOnInit() : void {
    
    this.ac.paramMap.subscribe(params => { this.categoryId = Number(params.get('id'));});
  }

}
