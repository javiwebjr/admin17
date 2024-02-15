import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [titulo]="currentFramework()"/>
    <pre> {{frameworkAsSignal() | json}} </pre>
    <pre> {{frameworkAsProperty | json}} </pre>
  `,
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change Detection - ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: '2016'
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: '2016'
  };

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update(value => ({
        ...value,
        name: 'React'
      }));
      console.log('Hecho')
    }, 3000);
  }
}
