import { Component,OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
 

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  cssUrl;
  n=2;
  constructor(public sanitizer: DomSanitizer)
  {}
  ngOnInit()
  {  this.cssUrl = this.n % 2 === 0 ? '/assets/style1.css' : '/assets/style1.css';
  }

  
}
