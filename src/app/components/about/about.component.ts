import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public titulo: string;
  constructor() {
    this.titulo = 'pagina de about';
  }

  ngOnInit() {
  }

}
