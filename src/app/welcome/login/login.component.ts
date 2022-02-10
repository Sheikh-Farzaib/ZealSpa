import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


   
    
  }
  valueChanged()
  {
      if($('#Eye').is(":checked")){
        $(".eyeOff").hide();
          $(".eyeOn").show();
          
        }
        else{
          $(".eyeOff").show();
          $(".eyeOn").hide();
 
        }
        var input = $("#prefixInside1");
  if (input.attr("type") === "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
      
  }
    

}
