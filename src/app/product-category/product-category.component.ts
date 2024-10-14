import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  categoryId!: Number;
  filteredProducts: Product[] = [];

  listProducts: Product[] = [
    { "id": 1, "name": "Refrigérateur LG Inox", "image": "assets/images/refrigerateur-lg.jpg", "categoryId": 1, "description": "", "price": 2800, "brand": "LG", "promotion": 0 },
    { "id": 2, "name": "Refrigérateur Samsung Blanc", "image": "assets/images/refrigerateur_samsung.jpeg", "categoryId": 1, "description": "", "price": 2400, "brand": "Samsung", "promotion": 0 },
    { "id": 3, "name": "Lave vaisselle Beko", "image": "assets/images/lave_vaisselle.png", "categoryId": 1, "description": "", "price": 1875, "brand": "BEKO", "promotion": 0 },
    { "id": 4, "name": "Oppo Smart Phone", "image": "assets/images/oppo_smart.jpg", "categoryId": 4, "description": "", "price": 1200, "brand": "OPPO", "promotion": 0 },
    { "id": 5, "name": "Hachoir", "image": "assets/images/hachoir.jpg", "categoryId": 2, "description": "", "price": 120, "brand": "Moulinex", "promotion": 0 },
    { "id": 6, "name": "TV 50'' LG", "image": "assets/images/tv_lg.jpg", "categoryId": 5, "description": "", "price": 1800, "brand": "LG", "promotion": 0 },
  ];

  constructor(private route: ActivatedRoute) { }
  // activatedroute pour recuperer les param a partor de query param
  // snapshot : capture l'url une seul fois des que je lance le composant 
  // parammap : traja3 observale => elle garanti le changement en cas de changement de variable , elle point esu rle case memoir du param en question

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { this.categoryId = Number(params.get('id'));});
    this.filteredProducts = this.listProducts.filter(p => p.categoryId === this.categoryId);
  }
}