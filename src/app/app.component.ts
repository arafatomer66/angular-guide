import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
   loadedFeature = 'recipe' ;

   onNavigate(feature :string){
    this.loadedFeature = feature ;
}


}
