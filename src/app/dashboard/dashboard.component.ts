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
      
     
      if($('#offcanvasNavbar').attr('aria-modal') === 'true'){
        $('#mainNavHidden').toggleClass('dNone');
        $('#mainContentCol').addClass('col-lg-12');
        $('#mainContentCol').removeClass('col-lg-10');
        
        
      }
      if($('#offcanvasNavbar').attr('aria-hidden') === "hidden"){
          $('#mainContentCol').addClass('col-lg-10');
          $('#mainContentCol').removeClass('col-lg-12');
          alert('working');
          
        };
      
     
    });
   

    
    
  }
    
    
  
}
