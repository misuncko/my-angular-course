import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { ALBUMS } from '../albums.data';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  lastClickedAlbum: Album;
  albumsArray: Album[];
  constructor() { }

  ngOnInit() {

    this.albumsArray = ALBUMS;

    console.log(this.albumsArray);
  }

  parentFunctionHandler(album) {
    this.lastClickedAlbum = album;
    alert(`Album` + album.album_name + ` was sent from the album card component`);
  }

}
