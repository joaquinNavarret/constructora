import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Constructora } from 'src/app/mode.ls/Constructora.interface';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  public constructora!: Observable<Constructora[]>; //coleccion de constructoras
  private constructoraCollection!: AngularFirestoreCollection<Constructora>; //referencia a firestore

  constructor( private firestore: AngularFirestore) {
    this.constructoraCollection = firestore.collection<Constructora>('constructora');
    console.log(this.constructoraCollection);
    this.obtenerConstructora();
   }

   //obtener Constructora
  obtenerConstructora() {
    this.constructora = this.constructora = this.constructoraCollection!.snapshotChanges().pipe(
      map(action => action.map(a => a.payload.doc.data() as Constructora))
    )
  }

  //crea una nueva constructora 
  public createConstructora ( constr: Constructora): Promise<void> {
    return new Promise(async(resolve, reject)=> {
      try {
        const id = this.firestore.createId();
        constr.id = id;
        const result = await this.constructoraCollection?.doc(id).set(constr);
        resolve(result)
      } catch (error){
        reject (error)
      }
    })
  }

  //obtiene una constructora
  public getConstructoraById(constrId:string){
    return this.firestore.collection('constructora').doc(constrId).snapshotChanges();
  }

  //actualiza una constructora
  public updateConstructora(constrId: string, data: any){
    return this.firestore.collection('constructora').doc(constrId).set(data);
  }

  //borrar constructora
  public deleteConstructora(constrId: string){
    return new Promise (async(resolve, reject) =>{
      try{
        const result = await this.constructoraCollection?.doc(constrId).delete();
        resolve(result)
      } catch (error){
        reject (error)
      }
    })
  }
}
