import { Component } from '@angular/core';
import { ProjectsComponent } from "./projects/projects.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projects = [
    {
      img: './assets/images/project-images/join.png',
      name: 'Join',
      language: 'JavaScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      link: 'http'
    },
    {
      img: './assets/images/project-images/pollo-loco.png',
      name: 'El Pollo Loco',
      language: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      link: 'http'
    },
    {
      img: './assets/images/project-images/simple-crm.png',
      name: 'Simple CRM',
      language: 'Angular | Firebase',
      description: 'In Progress',
      link: 'http'
    },
    {
      img: './assets/images/project-images/pokedex.png',
      name: 'Pokedex',
      language: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      link: 'http'
    },
    {
      img: './assets/images/project-images/dabubble.png',
      name: 'DA Bubble',
      language: 'Angular | TypeScript | Firebase',
      description: 'In Progress',
      link: 'http'
    }
  ]

}
