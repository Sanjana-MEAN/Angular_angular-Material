import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTextSubject = new Subject<any>();

  searchObservable = this.searchTextSubject.asObservable();

  constructor() { }

  searchData(searchFromNav: any){
    this.searchTextSubject.next(searchFromNav);
  }
}
