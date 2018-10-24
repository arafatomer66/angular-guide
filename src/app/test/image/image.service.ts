import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  visibleImages = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES =[
    
    {"id":1, "category": "boats", "caption": "Md Omer Arfat", "url":"assets/1.jpeg"},
    {"id":2, "category": "boats", "caption": "Johan", "url":"assets/2.jpeg"},
    {"id":3, "category": "boats", "caption": "Md Omer Arfat", "url":"assets/3.jpeg"},
    {"id":4, "category": "boats", "caption": "Johan", "url":"assets/4.jpeg"},
    {"id":5, "category": "boats", "caption": "Mashuk", "url":"assets/5.jpeg"},
    {"id":6, "category": "camping", "caption": "Ripon", "url":"assets/6.jpeg"}
    
]
