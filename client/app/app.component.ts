import { Component } from '@angular/core';
import {TwitterAPIService} from './twitter.service';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<nav>
		<a routerLink="search" routerLinkActive="active">Find Tweets</a>
		</nav>
		 <router-outlet></router-outlet>`
})
export class AppComponent {
	title = 'ThanxTwitterAPI';
}