import { Component } from '@angular/core';
import {TwitterAPIService} from './twitter.service';

@Component({
	selector: 'my-app',
	template: `
	    <div class="left">
		 <img src='app/images/Rezilncy One Pager.pdf' width='100%'/>
		 </div>`

})
export class AppComponent {
	title = 'Welcome!';
}