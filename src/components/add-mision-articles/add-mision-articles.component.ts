import { Component, OnInit, Input } from '@angular/core';
import { DataBaseService } from 'src/services/data-base.service';

@Component({
  selector: 'app-add-mision-articles',
  templateUrl: './add-mision-articles.component.html',
  styleUrls: ['./add-mision-articles.component.scss']
})
export class AddMisionArticlesComponent implements OnInit {
  @Input() articles:any;
  @Input() categories:any;
  @Input() canasta:any;
  constructor(private dbSrv:DataBaseService) { }
  
  ngOnInit() {
  }
  
  

   capture(item){
      console.log(item)
      if(item.active==false){
        if(this.articles.length){
          let index = this.articles.indexOf(item);
          console.log(index)
          if(index > -1){
            this.articles[index].active=true;
            console.log('capturado',this.articles[index])
            this.canasta.push(this.articles[index])
          } 
        }
        console.log(this.canasta)
      }else{
        return false;
      }
    }

   discapture(item:any){
     console.log(item.active)
     if(item.active==true){
       if(this.canasta.length>0){
         let indexCanasta = this.canasta.indexOf(item);
         let indexArticles = this.articles.indexOf(item);
         console.log('index',indexCanasta)
         console.log('index',indexArticles)
         if(indexCanasta > -1){
           this.articles[indexArticles].active=false;
           console.log('descapturado',this.articles[indexArticles])
           this.canasta.splice(indexCanasta,1);
          
         } 
       }
       console.log(this.canasta)
       return this.articles;
     }
  }

  

}
