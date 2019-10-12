import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBaseService } from 'src/services/data-base.service';

@Component({
  selector: 'app-add-mision-articles',
  templateUrl: './add-mision-articles.component.html',
  styleUrls: ['./add-mision-articles.component.scss']
})
export class AddMisionArticlesComponent implements OnInit {
  constructor(private dbSrv:DataBaseService) { }
  
  ngOnInit() {
    this.loadArticles();
    
  }
  canasta=[];
  categories;
  articles;
  
  loadArticles(){
    this.dbSrv.getAll('categories',
    {
     parent:
       {
        id:'esJTzFABbja6S5FF0NhX',
        collection:'companies'
      }
      
    }).then((res)=>{

     this.categories=res;
     console.log(this.categories)
   });

 
     this.dbSrv.getAll('catalog',
     {
      parent:
        {
         id:'esJTzFABbja6S5FF0NhX',
         collection:'companies'
       }
       
     }).then((res)=>{

      this.articles=this.ordenar(res);
      console.log(this.articles)
      this.articles.forEach(element => {
      
        console.log(element.data.name)
      });
    });
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

   delete(item:any){
     if(item.active==true){
       console.log(item.active)
       if(this.canasta.length>0){
         let index = this.canasta.indexOf(item);
         console.log('index',index)
         if(index > -1){
           this.canasta.splice(index,1);
           console.log(this.canasta)
           return this.canasta;
         } 
       }
     }
  }

   ordenar(array){
      array.forEach(element => {
        element.active=false;
      });
      return array;
   }
}
