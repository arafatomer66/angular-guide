import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from './image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  image:any;
  images:any[];
  visibleImages:any[] = [];

  constructor(private imageService: ImageService,
    private route: ActivatedRoute) { 
      this.visibleImages = this.imageService.getImages();
    }

  ngOnInit(){
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    )
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }
}
