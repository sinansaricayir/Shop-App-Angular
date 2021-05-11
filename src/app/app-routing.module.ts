import { UrunlisteComponent } from './components/urunliste/urunliste.component';
import { KategorilisteComponent } from './components/kategoriliste/kategoriliste.component';
import { KategoriComponent } from './components/kategori/kategori.component';
import { UrunComponent } from './components/urun/urun.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'urun',
    component: UrunComponent
  },
  {
    path: 'kategori',
    component: KategoriComponent
  },
  {
    path: 'kategorilistele/:urunId',
    component: KategorilisteComponent
  },
  {
    path: 'urunlistele/:kategoriId',
    component: UrunlisteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
