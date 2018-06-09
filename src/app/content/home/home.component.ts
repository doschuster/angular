import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  title = 'app';

  public divColor = 'divColor1';

  toggleDivColor() {
    if (this.divColor === 'divColor1') {
      this.divColor = 'divColor2';
    } else {
      this.divColor = 'divColor1';
    }
  }
}
