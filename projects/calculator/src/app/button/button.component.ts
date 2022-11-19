import { Component, OnInit } from '@angular/core';
import { ButtonData } from './button.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  buttonData: ButtonData[] = new Array(10);
  constructor() {
    this.buttonData = []
    for(let i:number = 0; i<12; i++) {
      let btn_value:string = '' 
      if (i >= 0 && i< 9) {
        btn_value = (String) (i+1)
      }
      if (i == 9) btn_value = '#'
      if (i == 10) btn_value = '0'
      if (i == 11) btn_value = '='
      this.buttonData.push({value: btn_value})
    }
  }

  ngOnInit(): void {
    // alert("hello")
  }



  title: string = 'Button';
  isTextBoxActive: boolean = false;
  btnClick = () => {
    this.isTextBoxActive = !this.isTextBoxActive;
    alert(this.title);
  };
}
