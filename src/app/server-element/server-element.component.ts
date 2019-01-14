import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
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
  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log('constructor server-element called!');
  }

  ngOnInit() {
    console.log('ngOnInit server-element called!');
    console.log('Text content: ' + this.header.nativeElement.textContent);
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
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy server-element called!');
  }
}
