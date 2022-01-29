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
     
      if($('#offcanvasNavbar').hasClass('show')){
        $('#mainNavHidden').css('display','flex');
        $('#mainContentCol').removeClass('col-xxl-12');
        $('#mainContentCol').addClass('col-xxl-10');
        alert('first');
      }
      else{
        $('#mainNavHidden').css('display','none');
        $('#mainContentCol').removeClass('col-xxl-10');
        $('#mainContentCol').addClass('col-xxl-12');
        alert('second');
      }
    });
    if($('#offcanvasNavbar').hasClass('show')){
      $('#mainContentCol').addClass('col-xxl-12');
    }
    
    
   

    
    
  }
    
    
  
}
