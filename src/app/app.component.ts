import { Component, ElementRef, viewChild, viewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdditionalComponentComponent } from "./additional-component/additional-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, AdditionalComponentComponent],
})
export class AppComponent {
  title = 'angular-signal-queries';

  divElement = viewChild<ElementRef>('head'); // Signal<ElementRef|undefined>
  divElementRequired = viewChild.required<ElementRef>('head'); // Signal<ElementRef>
  component = viewChild(AdditionalComponentComponent); // Signal<MyComponent|undefined>
  componentRequired = viewChild.required(AdditionalComponentComponent); // Signal<MyComponent>

  componentsRequiredList = viewChildren(AdditionalComponentComponent); // Signal<readonly MyComponent[]>
  // There is no viewChildren.required
  somethingElse = viewChildren(AppComponent);

  ngOnInit() {
    console.log(
      this.divElement(),
      this.divElementRequired(),
      this.component(),
      this.componentRequired(),
      this.componentsRequiredList()
      // this.somethingElse(),
    );
  }
}
