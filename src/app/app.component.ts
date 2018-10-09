import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

//   serverElements = [ ];

// onServerAdded( serverData : {  serverName :string , serverContent : string   }) {
//     this.serverElements.push({
//       type: 'server',
//       name: serverData.serverName,
//       content: serverData.serverContent
//     });
//   }

//   onBlueprintAdded(blueprintData : {  serverName :string , serverContent : string   } ) {
//     this.serverElements.push({
//       type: 'blueprint',
//       name: blueprintData.serverName,
//       content: blueprintData.serverContent
//     });
//   }

// onBindCreated(bindData : { bindName :string }){
//   this.serverElements.push({
//     name : bindData.bindName 
//   })
// }

ngOnInit(){
  firebase.initializeApp({
    apiKey: "AIzaSyBUtAoStKa-eV3Hj1uoZL6_xI8BCkgcAtE",
    authDomain: "ng-recipe-book-866d5.firebaseapp.com"
  });
}
 



}
