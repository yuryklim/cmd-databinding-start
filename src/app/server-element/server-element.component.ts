import {
  Component,
  Input,
  OnChanges,
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
export class ServerElementComponent implements OnInit, OnChanges {
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

}
