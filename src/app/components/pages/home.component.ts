import { Component } from '@angular/core';
import { GithubService} from '../../services/github.service'

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
   private image: string;
   user:any[];

    constructor(private _githubService: GithubService){
        this.image = "/images/Me.png"
        
        this._githubService.getUser().subscribe(user => {
          this.user=user;
          console.log(user);
        });

    }


 }
