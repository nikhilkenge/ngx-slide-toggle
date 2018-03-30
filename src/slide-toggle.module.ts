import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialToggleComponent } from './material-toggle/material-toggle.component';

@NgModule({
    imports: [CommonModule],
    declarations: [MaterialToggleComponent],
    exports: [MaterialToggleComponent]
})
export class SlideToggleModule { }
