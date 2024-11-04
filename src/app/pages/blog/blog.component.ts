import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { Post } from '../../models/post.model';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SidebarComponent, NgFor, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  posts: Post[] = [
    {
      id: 1,
      title: 'La IA y la seguridad Nacional de Estados Unidos',
      date: new Date('2024-10-30'),
      excerpt:
        'Estados Unidos ha declarado que la inteligencia artificial (IA) es ahora un tema de seguridad nacional.',
      image:
        'https://ca-times.brightspotcdn.com/dims4/default/d914c2c/2147483647/strip/true/crop/2606x1737+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F35%2F00%2F698a8bdaf69460d07b1eff058b5f%2Fafe6d308794540d4ac16ab8ee3ca9c8a',
      content:
        'Reafirmando su interés en liderar esta tecnología y atraer talento global mediante facilidades de visado para expertos. Con el objetivo de asegurar que los avances en IA no supongan riesgos, el gobierno implementará evaluaciones para los modelos más avanzados antes de que se lancen al público, evitando posibles amenazas en ciberseguridad o el uso indebido de estas herramientas. Además, instituciones como el Departamento de Defensa colaborarán con el sector privado y académico en proyectos que impulsen el desarrollo seguro y eficiente de la IA. Mientras tanto, empresas como OpenAI y Anthropic están a la vanguardia con modelos mejorados, como el Hiq 3.5 de Anthropic. También vemos cómo compañías como Microsoft están integrando la IA en herramientas de productividad, como asistentes de correo y documentos, mostrando el enorme potencial de esta tecnología para transformar nuestro trabajo diario.',
    },
    {
      id: 2,
      title: 'Impacto de la IA en los Pagos Digitales',
      date: new Date('2024-10-25'),
      excerpt:
        'La inteligencia artificial ha sido una herramienta poderosa para Visa en la protección de los usuarios contra el fraude y en la optimización de su experiencia de pago.',
      image:
        'https://www.muycomputerpro.com/wp-content/uploads/2023/10/visa-ventures-invertira-millones-empresas-ia-generativa.jpeg',
      content:
        'Gracias a un sistema de evaluación de riesgo que asigna un "score" a cada transacción, Visa ha logrado identificar y bloquear transacciones fraudulentas por un valor cercano a los 2,000 millones de dólares en el último año según Eduardo Prieto, Director General en España de VISA. Esto no solo brinda seguridad, sino que mejora la confianza del usuario en sus pagos digitales.' +
        '\nAdemás, Visa ha invertido en mejorar la experiencia del usuario, reduciendo la fricción en las compras en línea y evitando autenticaciones repetitivas. Esto ha sido posible mediante el análisis de patrones de consumo que predicen los comportamientos del cliente, lo cual permite una experiencia personalizada y predecible acorde con Prieto. Soluciones como "tap to phone" y "click to pay" también facilitan las compras, permitiendo que los dispositivos móviles se conviertan en terminales de pago o que el usuario compre en línea sin introducir credenciales manualmente, haciendo el proceso más rápido y seguro.' +
        '\nEn el ámbito presencial, Visa ofrece una capa adicional de seguridad para compras de más de 50 euros mediante autenticación con PIN, y ajusta las medidas de validación para importes menores, manteniendo la seguridad al adaptarse a los hábitos de consumo de cada cliente. Estas innovaciones no solo protegen a los usuarios, sino que, como enfatiza Prieto, buscan mejorar cada interacción en el mundo de los pagos digitales, una industria donde la precisión y la confianza son esenciales.'
    },
  ];
}
