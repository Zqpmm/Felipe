import { Component, Input, OnInit } from '@angular/core';
import { BodyService } from 'src/app/services/body.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {


  onSubmit(data)
  {
    console.warn(data)
  }

  
  constructor(private bodyService: BodyService) {   
  }

  Sinal;
  Numero1; 
  Numero2; 

  ngOnInit(): void {
  }

  Binario(){
    
    var result = 0;
    const N1 = parseInt(this.Numero1, 2);
    const N2 = parseInt(this.Numero2, 2);
    
  

    switch (this.Sinal) {
    case '+':
        result = N1 + N2;
        
        break;

    case '-':
        result = N1 - N2;
        break;
   
    case '/':
        result = N1 / N2;
        break;    
        
    case '*':
        result = N1 * N2;
        break;
    
   
    case '%':
        result = N1 % N2;
        break;
    }
    return(result.toString(2));
    }
    
    
}





