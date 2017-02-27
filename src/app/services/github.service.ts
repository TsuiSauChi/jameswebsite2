import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = '7fa91f1aeadfc2b578cf';
    private client_secret = "bcd02ceb190b437e62522fb4a28c7af8a7b926cb";

    constructor(private _http: Http){
        console.log('Github Service Ready');
        this.username = 'TsuiSauChi';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

    updateUser(username:string){
        this.username = username;
    }
}