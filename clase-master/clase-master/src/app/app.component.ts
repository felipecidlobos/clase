import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ferretería TWK';
  dateInspect = '';
  precio= '';
  storeIndicator='';

     constructor(private http: Http) {}

     searchIndicator() {
       this.http.get('http://localhost:8080/api/products?id=' + this.storeIndicator)
       .subscribe(
           (res: Response) => {
             const storeIndicator = res.json();
             console.log(storeIndicator);
             this.precio = storeIndicator ['codeProduct'][0]['valor'];
           }, err => {
             console.log('UPS!');
             console.log(err);
           }, () => {
             console.log('¡Servicio Finalizado!');
           }
       );
     }


}

