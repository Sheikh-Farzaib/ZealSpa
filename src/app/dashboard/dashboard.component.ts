import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  constructor() { }
  
  ngOnInit(): void {
    
    $('.accordion-button').on('click',function() {
      $('.accordion-button').each(function() {
        if ($(this).attr('aria-expanded') === "true") {
            $(this).find('.featherIcon').addClass('active');
        }
        else {
          $('.accordion-button').each(function() {
            if ($(this).attr('aria-expanded') === "false") {
                $(this).find('.featherIcon').removeClass('active');
            }
          });
        }
      });
    });
    $('#navToggleButton, #closeButton').on('click', function(){
      $('#mainContentCol').toggleClass('col-sm-12');
      
      
    });
  
    
    
  }
}
