import { UrunsecDialogComponent } from './components/dialogs/urunsec-dialog/urunsec-dialog.component';
import { UrunlisteComponent } from './components/urunliste/urunliste.component';
import { KategoriDialogComponent } from './components/dialogs/kategori-dialog/kategori-dialog.component';
import { FotoyukleDialogComponent } from './components/dialogs/fotoyukle-dialog/fotoyukle-dialog.component';
import { KategorilisteComponent } from './components/kategoriliste/kategoriliste.component';
import { MyAlertService } from './services/myAlert.service';
import { ApiService } from './services/api.service';
import { KategoriComponent } from './components/kategori/kategori.component';
import { UrunComponent } from './components/urun/urun.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { AlertDialogComponent } from './components/dialogs/alert-dialog/alert-dialog.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UrunDialogComponent } from './components/dialogs/urun-dialog/urun-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    UrunComponent,
    KategoriComponent,
    KategorilisteComponent,
    UrunlisteComponent,

    //Dialoglar
    AlertDialogComponent,
    ConfirmDialogComponent,
    UrunDialogComponent,
    FotoyukleDialogComponent,
    KategoriDialogComponent,
    UrunsecDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AlertDialogComponent,
    ConfirmDialogComponent,
    UrunDialogComponent,
    FotoyukleDialogComponent,
    KategoriDialogComponent,
    UrunsecDialogComponent
  ],
  providers: [ApiService, MyAlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
