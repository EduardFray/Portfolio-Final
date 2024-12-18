import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "../shared/footer/footer.component";


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AboveTheFoldComponent,
    AboutMeComponent,
    SkillsComponent,
    CommonModule,
    PortfolioComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
