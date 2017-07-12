import { Component, OnInit } from '@angular/core';
import {SearchUsersService} from '../search-users.service';


@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
title:string ="Search Git User"
	place: string;
	
 resultone: any[]=[];
 err: string;
  constructor(private searchService:SearchUsersService) {


		
   }

  ngOnInit() {
     this.place= "great";
  }
  searchIt(place:string){
    if(place!=""){
    this.searchService.searchItFn(place).subscribe(data=> this.resultone= data.items, error=> console.log(error));

}
  }

}
