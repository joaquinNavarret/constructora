import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from '../service/firestore/firestore.service';

@Component({
  selector: 'app-constructora',
  templateUrl: './constructora.component.html',
  styleUrls: ['./constructora.component.css']
})
export class ConstructoraComponent implements OnInit {

  public documentId = null;
  public currentStatus = 1;
  public newConstructoraForm = new FormGroup( {
   nombre: new FormControl ('', Validators.required),
   imagen: new FormControl ('', Validators.required),
   materiales: new FormControl('', Validators.required),
   servicio: new FormControl('', Validators.required),
   contacto: new FormControl('', Validators.required),
   proyectos: new FormControl('', Validators.required),
   id: new FormControl(''),
  });
  constructora: any[];


  constructor( private firestoreService: FirestoreService,
          private fb: FormBuilder, 
          private storage: AngularFireStorage) {
    this.newConstructoraForm.setValue ({
      id:'',
      nombre:'',
      imagen:'',
      materiales: '',
      servicio: '',
      contacto:'',
      proyectos:''
    });
  }

  ngOnInit(): void {
    this.firestoreService.constructora.subscribe(resp=> this.constructora = resp)
  }

  
  
  /*public newConstructora (form, documentId = this.documentId) {
    console.log ('Status: ${this.currentStatus}');
    if (this.currentStatus == 1){
      let data = {
        nombre: form.nombre,
        imagen:form.imagen,
        materiales: form.materiales,
        servicio: form.servicio,
        contacto: form.contacto,
        id: form.id,
        proyectos: form.id
      }
     /* this.firestoreService.createConstructora(data).then(()=>{
        console.log('documento creado exitosamente!');
        this.newConstructoraForm.setValue ({
          nombre:'',
          imagen: '',
          id:'',
          materiales:'',
          servicio:'',
          contacto:'',
          proyectos:''
        });
      }, (error) =>{
        console.error(error);
      });
    } else {
      let data = {
        nombre: form.nombre,
        imagen: form.imagen,
        id: form.id,
        materiales: form.materiales,
        servicio: form.servicio,
        contacto: form.contacto,
        proyectos: form.proyectos 
      }
      /*this.firestoreService.updateConstructora(documentId, data).then(() =>{
        this.currentStatus = 1;
        this.newConstructoraForm.setValue({
          nombre:'',
          materiales:'',
          servicio:'',
          imagen:'',
          id: '',
          contacto:'',
          proyectos:''
        });
        console.log('documento editado exitosamente');
      }, (error) => {
        console.log(error);
      });
    }
  }*/

  /*public editConstructora(documentId){
    let editSubscribe =
    this.firestoreService.getConstructoraById(documentId).subscribe((constructora: any) => {
      this.currentStatus = 2;
      this.documentId = documentId;
      this.newConstructoraForm.setValue({
        id: documentId,
        nombre: constructora.payload.data()['nombre'],
        imagen: constructora.payload.data() ['imagen'],
        materiales: constructora.payload.data() ['materiales'],
        servicio: constructora.payload.data()['servicio'],
        contacto: constructora.payload.data()['contacto],
        proyectos: constructora.payload.data()['proyectos']
      });
      editSubscribe.unsubscribe();
    });
  }*/

  /*public deleteConstructora(documetId){
    this.firestoreService.deleteConstructora(documetId).then(() => {
      console.log('documento eliminado!');
    }, (error) =>{
      console.error(error);
    });
  }*/
}
