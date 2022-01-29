import { Component } from '@angular/core';
import * as Feather from 'feather-icons';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ZealInstitute';

 public ngOnInit(){
    Feather.replace();
   
  }

  
}
