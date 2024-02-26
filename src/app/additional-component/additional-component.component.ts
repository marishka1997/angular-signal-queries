import { Component, ElementRef, contentChild, contentChildren } from '@angular/core';

@Component({
  selector: 'app-additional-component',
  standalone: true,
  imports: [],
  templateUrl: './additional-component.component.html',
  styleUrl: './additional-component.component.scss',
})
export class AdditionalComponentComponent {

  projectedOne = contentChild<ElementRef>('displayed');
  projectedRequired = contentChild.required<ElementRef>('displayed');

  projectedList = contentChildren<ElementRef>('displayed');
  // There is no contentChildren.required
  someOtherNonExisiting = contentChildren<ElementRef>('something');

  ngOnInit() {
    console.log(
      'displayed divs:',
      this.projectedOne(),
      this.projectedRequired(),
      this.projectedList()
      //this.someOtherNonExisiting()
    );
  }
}
