import { Kategori } from './Kategori';
import { Urun } from 'src/app/models/Urun';
export class Kayit {
    kayitId: number=0;
    kayitUrunId: number=0;
    kayitKatId: number=0;
    urunBilgi: Urun;
    kategoriBilgi: Kategori;
}