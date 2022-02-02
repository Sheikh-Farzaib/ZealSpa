import { Component } from '@angular/core';
import * as Feather from 'feather-icons';
declare var bootstrap: any;
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
    
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            container: 'body',
            trigger : 'hover',
            delay: {show: 100, hide: 1}
        });
    });
   
  }

  
}
