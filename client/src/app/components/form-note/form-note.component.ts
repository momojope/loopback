import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/models/note';
import { DatabaseService } from 'src/app/services/database.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-note',
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.scss']
})
export class FormNoteComponent implements OnInit {
  note: Note = new Note();
  @Input() id: string;
  constructor(public databaseService: DatabaseService, private router: Router) { }

  ngOnInit() {
    if(this.id){
      this.getOne();
    }
  }

  send(form: NgForm){
    if(form.invalid){
      Swal.fire(
        'error',
        'Form invalid',
        'error'
      );
      return
    }
   if(this.id){
     this.edit(form)
   }else{
    this.post(form)
   }
    
  }

  edit(form:NgForm){  
    this.databaseService.updateNote(form.value, this.id)
      .subscribe( res =>{
        console.log(res);
        Swal.fire(
          'Success',
          'note updated',
          'success'
        );
        this.router.navigateByUrl('/')
      }, err =>{
        console.error(err)
      })
  }

  post(form: NgForm){
    this.databaseService.postNote(form.value)
      .subscribe( res =>{
        console.log(res);
        Swal.fire(
          'Success',
          'note created',
          'success'
        );
        this.router.navigateByUrl('/')
      }, err =>{
        console.error(err)
      })
  }


  getOne(){
     this.databaseService.getOneNote(this.id)
      .subscribe((note: Note) => {
        this.note = note
      }, err => {
        console.error(err);
      });
  }

}
