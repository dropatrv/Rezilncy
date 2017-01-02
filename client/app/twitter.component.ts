import { Component, OnInit } from '@angular/core';
import { TwitterAPIService } from './twitter.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  templateUrl: 'app/html/tweet.html'  			  
})
export class TwitterComponent implements OnInit
 { 
 	tweets: any[]; 
 	query: string = "@ThanxInc OR #thanxinc";
 	totalItems:number = 0;
    currentPage:number = 1;
    perPageTweets: any[];
    itemsPerPage:number = 5;
    startPoint:number=0;
    noTweets:boolean=false;
    isLoading:boolean=false;

 	constructor(private _TwitterAPIService: TwitterAPIService){
 	}

 	ngOnInit(){	
 	}

 	search(){
 			this.isLoading = true;
 			this._TwitterAPIService.getTweets(this.query)
 					.subscribe(
 						response => this.assignResults(response),
 						err => {
 							alert(err);
 							console.log(err);
 						});	
 	}

 	assignResults(response:any){
 		this.isLoading = false;
 		this.tweets = response;

 		if(!this.tweets.length)
 			this.noTweets = true;
 		else
 			this.noTweets = false;

 		this.totalItems = this.tweets.length;
 		this.startPoint = 0;
 		this.perPageTweets = this.tweets.slice(this.startPoint,5);
 		this.currentPage = 1;
 	}

 	pageChanged(event:any):void {
    	console.log('Page changed to: ' + event.page);
    	console.log('Number items per page: ' + event.itemsPerPage);
    	this.startPoint = (event.page-1)*5;
    	this.perPageTweets = this.tweets.slice(this.startPoint,this.startPoint+5);
  }
 }