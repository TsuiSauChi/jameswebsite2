import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'master',
  templateUrl: 'master.component.html'
})
export class MasterComponent {
    private image: string;
    private image2: string;
    private image3: string;
    private image4: string;
    private image5: string;

    constructor(){
        this.image = "/images/A2.png"
        this.image2 = "/images/csharp.png"
        this.image3 = "/images/javascript.png"
        this.image4 = "/images/typescript.png"
        this.image5 = "/images/jquery.jpg"
    }
 }
