import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Wine } from '../model/wine.model';
import { WineSearchResult } from '../model/wineSearchResult.model';

const baseUrl = "http://localhost:3000/api/wines";
@Injectable()
export class WineService {

  	constructor(private http :HttpClient) { }

  	getAll(params? :any) :Observable<WineSearchResult>{
      let queryParams = {};
      if(params){
        queryParams = {
          params : new HttpParams()
            .set("sort", params.sort || "")
            .set("sortDirection", params.sortDirection || "")
            .set("page", params.page && params.page.toString() || "")
            .set("pageSize", params.page && params.pageSize.toString() || "")
            .set("filter", params.filter && JSON.stringify(params.filter) || "")
        }
      }

  		return this.http.get(baseUrl, queryParams).map( 
        response => new WineSearchResult(response)
      );
  	}

  	get(id :number) :Observable<Wine>{
  		return this.http.get(baseUrl + "/" + id).map(
          response => new Wine(response)
        );
  	}

  	add(newWine :Wine) :Observable<Wine>{
      return this.http.post(baseUrl, newWine).map(
          response => new Wine(response)
        );
  	}

  	remove(id :number) :Observable<Wine>{
  		return this.http.delete(baseUrl + "/" + id).map(
          response => new Wine(response)
        );
  	}

    update(editedWine :Wine) :Observable<Wine>{
      return this.http.put(baseUrl + "/" + editedWine._id, editedWine).map(
          response => new Wine(response)
        );
    }
}
