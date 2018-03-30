import { Component, EventEmitter, Input, Output, ElementRef, ViewChild } from '@angular/core';

let nextUniqueId = 0;

@Component({
  selector: 'material-slide-toggle',
  templateUrl: './material-toggle.component.html',
  styleUrls: ['./material-toggle.component.css']
})
export class MaterialToggleComponent {

  private _uniqueId = `material-slide-toggle-${++nextUniqueId}`;

  @Input() name: string | null = null;
  @Input() id: string = this._uniqueId;
  @Input() checked: boolean;
  @Input() disabled: boolean;
  // tslint:disable:no-input-rename
  @Input('aria-label') ariaLabel: string | null = null;
  @Input('aria-labelledby') ariaLabelledby: string | null = null;

  @Output() change = new EventEmitter<boolean>();

  @ViewChild('materialSlideToggle') inputElement: ElementRef;

  constructor() { }

  onChange(event): void {
    event.stopPropagation();
    this.change.emit(this.inputElement.nativeElement.checked);
  }

  onClick(event: Event): void {
    event.stopPropagation();
  }
}
