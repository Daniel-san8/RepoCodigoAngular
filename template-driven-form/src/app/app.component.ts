import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('meuInputFormControl') inputEl?: NgModel;

  ngAfterViewInit(): void {}

  send() {
    if (this.inputEl?.valid && this.inputEl.touched) {
      console.log(this.inputEl);
    }
  }
}
