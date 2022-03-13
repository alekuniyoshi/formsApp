import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {


  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  validName(): boolean {
    return this.myForm?.controls['product']?.invalid && this.myForm?.controls['product'].touched;
  }

  save() {
    console.log(this.myForm);
  }

  validPrice(): boolean {
    return this.myForm?.controls['price']?.invalid && this.myForm?.controls['price']?.value <= 0;
  }

  validStock(): boolean {
    return this.myForm?.controls['stock']?.invalid && this.myForm?.controls['stock']?.value <= 0;
  }

}
