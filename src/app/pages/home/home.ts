import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class Home {
  protected readonly foundedIn = 1973;
  protected readonly yearsOfExperience = new Date().getFullYear() - this.foundedIn;
}
