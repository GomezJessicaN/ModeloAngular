import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service';

@Component({
  selector: 'app-holamundo',
  templateUrl: './holamundo.component.html',
  styleUrls: ['./holamundo.component.css']
})
export class HolamundoComponent implements OnInit {
public holamundo: string;
  constructor(public backendApiService: BackendApiService) { }

  ngOnInit() {
     this.backendApiService.GetHolaMundo().subscribe(
       resultado =>{
         this.holamundo = resultado.holamundo
       }
     );
  }

}
