import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-contactame',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './contactame.component.html',
  styleUrl: './contactame.component.css',
})
export class ContactameComponent {
  onSubmit() {
    alert('Mensaje enviado exitosamente!');
  }
}
