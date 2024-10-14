import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(listItems: any[], searchText: string): any[] {
    if (!listItems) return [];
    if (!searchText) return listItems;
    searchText = searchText.toLowerCase();
    return listItems.filter(item => {
      return item.title.toLowerCase().includes(searchText); 
    });
  }

}
