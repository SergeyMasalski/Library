import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent implements OnInit {
  @Input()
  public nameSubHeader!: string;

  public newElementButton!: string;

  ngOnInit(): void {
    this.newElementButton = this.nameSubHeader.slice(0, -1);
  }
}
