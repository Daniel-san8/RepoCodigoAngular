import { Component } from '@angular/core';

@Component({
  selector: 'app-sem-diretivas',
  standalone: true,
  imports: [],
  templateUrl: './sem-diretivas.component.html',
  styleUrl: './sem-diretivas.component.scss',
})
export class SemDiretivasComponent {
  addBgColor = false;

  onMouseOver() {
    this.addBgColor = !this.addBgColor;
  }

  onMouseOut() {
    this.addBgColor = !this.addBgColor;
  }
}
