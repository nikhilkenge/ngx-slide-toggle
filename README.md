# ngx-slide-toggle

Slide Toggle component for Angular 2/4/5.

It is extremely lightweight(<50kbs) and complies with Angular Package Format.

It is still under development and I am planning to add color customization along with few more toggles like IOS and Sony UI toggle. 

## Installation

```sh
npm install ngx-slide-toggle --save
```

## Usage

Import the `SlideToggleModule` in your required module. 

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlideToggleModule } from 'ngx-slide-toggle';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'slideToggle';
  id = 'materialSlideToggle';
  checked = false;
  disabled = false;
  label = 'Toggle On/Off';
  labelledby = 'Some Other Text';

  onChange(value: boolean) {
    /* Your business logic goes here. */
  }
}
```
```html
<material-slide-toggle 
    [name]="name" 
    [id]="id" 
    [checked]="checked" 
    [disabled]="disabled" 
    [aria-label]="label" 
    [aria-labelledby]="labelledby"
    (change)="onChange($event)">
</material-slide-toggle>
```

## API

### material-slide-toggle Inputs

|Attribute|Description|Type|Required|Default|
|:---    |:---        |:--- |:---      |:--- |
|name|Name value will be applied to the input element if present.|string|No||
|id|A unique id for the slide-toggle input. If none is supplied, it will be auto-generated.|string|No||
|checked| Whether the slide-toggle element is checked or not.|boolean|No|false|
|disabled|Whether the component is disabled.|boolean|No|false|
|aria-label|Used to set the aria-label attribute on the underlying input element.|string|No|null|
|aria-labelledby|Used to set the aria-labelledby attribute on the underlying input element.|string|No|null|

### material-slide-toggle Events

|Name|Description|Type|
|:---    |:---        |:--- |
|change|An event will be dispatched each time the toggle changes its value.|boolean|
