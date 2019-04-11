import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { ALBUMS } from '../albums.data';
import { AlbumService } from '../shared/album.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums: Album[];

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.getAlbums();
    console.log(this.albums);
  }


  getAlbums() {
    this.albumService.getAlbums()
      .subscribe(
        (data: Album[]) => this.albums = data,
        error => console.log("Error: ", error)
      );
  }

}
