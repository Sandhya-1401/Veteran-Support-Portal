import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';  // ✅ Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent], // ✅ Add this line
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'Veteran Support Portal';
}


