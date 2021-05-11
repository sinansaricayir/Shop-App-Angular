import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Sonuc } from './../../models/Sonuc';
import { MyAlertService } from './../../services/myAlert.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { ApiService } from 'src/app/services/api.service';
import { Urun } from 'src/app/models/Urun';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  urunler:Urun[];

  constructor(
    private servis:ApiService    
  ) { }

  ngOnInit() {
    this.UrunListele();
    console.log(this.urunler)
  }

UrunListele(){
  this.servis.UrunListe().subscribe( (d:Urun[])=>{
    this.urunler=d;
    console.log(d)
  })
}
  
}
