import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Album } from './albums/album.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'my-angular-albums';
  albumsArray: Album[];
  titleCounter = 1;
  numbers: number[];



  ngOnInit(): void {

  }
}
