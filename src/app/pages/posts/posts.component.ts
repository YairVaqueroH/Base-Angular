import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.mensajes =this.dataService.getPost()
    //.subscribe(posts =>(posts: any []) => {
      //console.log(posts);
      //this.mensajes = posts;
    //});
  }

}
