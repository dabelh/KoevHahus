import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  likes = 0;
  @Input() myprop;
  @Output() myLikes = new EventEmitter<number>();


  constructor() { }

  likeFunc() {
    this.likes++
    this.myLikes.emit(this.likes)
  };

  ngOnInit(): void {
  }

}
