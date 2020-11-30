
import { Component, OnInit } from '@angular/core';
import { Felipe } from 'src/app/models/placeholder.model';
import { BodyService } from 'src/app/services/body.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
  felipe: any;
  
  
  constructor(private bodyService: BodyService) { 
  }
  
  ngOnInit(): void {
    this.getter();}

  getter(){
      this.bodyService.getFotos().subscribe(
        (data: Felipe) => {
            this.felipe = ['data'];
            console.log("variavel", this.felipe);
            console.log("data", data);
        },
      );
  }
}


