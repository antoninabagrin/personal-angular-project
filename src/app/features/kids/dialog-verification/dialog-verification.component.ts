import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-verification',
  templateUrl: './dialog-verification.component.html',
  styleUrls: ['./dialog-verification.component.css'],
})
export class DialogVerificationComponent implements OnInit {
  @Input() disabled: boolean = true;
  @Input() button1: boolean = false;
  @Input() button2: boolean = false;
  @Input() button3: boolean = false;
  @Input() button4: boolean = false;
  @Input() button5: boolean = false;
  @Input() button6: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  setSelectedButton1() {
    this.button1 = !this.button1;
  }

  setSelectedButton2() {
    this.button2 = !this.button2;
  }

  setSelectedButton3() {
    this.button3 = !this.button3;
  }

  setSelectedButton4() {
    this.button4 = !this.button4;
  }

  setSelectedButton5() {
    this.button5 = !this.button5;
  }

  setSelectedButton6() {
    this.button6 = !this.button6;
  }
}
