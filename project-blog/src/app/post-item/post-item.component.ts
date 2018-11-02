import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() love_its: number;
  created_at = new Date();

  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    this.love_its++;
  }

  onDontLoveIt() {
    this.love_its--;
  }

  getColor() {
    if (this.love_its > 0) {
      return 'green';
    } else if (this.love_its < 0) {
      return 'red';
    }
  }

}
