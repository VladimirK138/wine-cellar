import { Component, OnInit, Input } from '@angular/core';

import { WineService } from '../services/wine.service';
import { Wine } from '../model/wine.model';

@Component({
  selector: 'wc-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {
    private wineList :Wine[];
    private count :number;
    private params = {
      sort: "",
      sortDirection: "",
      page: 1,
      pageSize: 5,
      filter: {
        name: ""
      }
    }

    constructor(private wineService :WineService) {}

  	ngOnInit() {
  		this.refreshWineList();
  	}

    refreshWineList(){
      // this.wineList = this.wineService.getAll();
      this.wineService.getAll(this.params).subscribe( wineSearchResult => {
        this.wineList = wineSearchResult.wines;
        this.count = wineSearchResult.count;
      });
    }

    changePage(page :number){
      this.params.page = page;
      this.refreshWineList();
    }

    changeSortCriteria(criteria :string){
      if(this.params.sort == criteria){
        if(this.params.sortDirection == 'desc'){
          this.params.sortDirection = '';
        }else{
          this.params.sortDirection = 'desc';
        }
      }else{
        this.params.sort = criteria;
        this.params.sortDirection = '';
      }
      this.refreshWineList();
    }

    searchByName(searchString :string){
      this.params.filter.name = searchString;
      this.refreshWineList();
    }
}
