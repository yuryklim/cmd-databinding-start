import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, ShadowDom, Native, Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('constructor server-element called!');
  }

  ngOnInit() {
    console.log('ngOnInit server-element called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges server-element called!');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck server-element called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit server-element called!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked server-element called!');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked server-element called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit server-element called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy server-element called!');
  }
}
