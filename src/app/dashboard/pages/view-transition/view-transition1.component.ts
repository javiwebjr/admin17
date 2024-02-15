import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title titulo="View Transitions 1" />
    <section class="flex justify-start">
      <img srcset="http://picsum.photos/id/237/200/300" alt="Picsum"
        width="200" height="300"
        style="view-transition-name: hero1"
      />

      <div class="bg-blue-500 w-56 h-56"
      style="view-transition-name: hero2"
      ></div>
    </section>
  `
})
export default class ViewTransitionComponent {

}
