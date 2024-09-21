import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet,RouterLink, 
    MatIconModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {



  
}
