import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContentComponent } from '../content/content.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-layout',
  imports: [ HeaderComponent,FooterComponent, ContentComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}
