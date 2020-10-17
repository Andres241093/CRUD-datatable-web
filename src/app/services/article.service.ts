import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';

@Injectable({
	providedIn: 'root'
})
export class ArticleService {

	url: string = environment.url;

	constructor(private http: HttpClient) { }

	getArticles(): Observable<any>{
		return this.http.get(this.url+'/articles');
	}
	deleteArticle(id: number){
		return this.http.delete(this.url+'/articles/'+id);
	}
	createArticle(article: Article): Observable<any>{
		return this.http.post(this.url+'/articles',article);
	}
	updateArticle(article: Article, id: number): Observable<any>{
		return this.http.put(this.url+'/articles/'+id,article);
	}
}
