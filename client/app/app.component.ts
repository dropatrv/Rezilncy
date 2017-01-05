import { Component } from '@angular/core';
import {TwitterAPIService} from './twitter.service';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		 <nav>
		  <ul>
			<li>
				<a routerLink="search" routerLinkActive="active">Find Tweets</a>
			</li>
			<li>		
				<a href="https://dev.twitter.com/rest/public/search">Twitter Search API Reference</a>
			</li>
		  </ul>
		 </nav>
		 <router-outlet></router-outlet>`
})
export class AppComponent {
	title = 'ThanxTwitterAPI';
}