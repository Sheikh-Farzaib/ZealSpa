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
        var input = $("#prefixInside1");
  if (input.attr("type") === "password") {
    input.attr("type", "text");
    $(".eyeOff").hide();
    $(".eyeOn").show();
  } else {
    input.attr("type", "password");
    $(".eyeOff").show();
    $(".eyeOn").hide();
  }
      
  }
    

}
