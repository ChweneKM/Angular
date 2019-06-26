import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { InternService } from '../intern.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { Intern } from '../intern';


@Component({
  selector: 'app-edit-intern',
  templateUrl: './edit-intern.component.html',
  styleUrls: ['./edit-intern.component.css']
})
export class EditInternComponent implements OnInit {

  interns: Intern;
  editForm: FormGroup;
  submitted = false;
    myGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private intern: InternService) { }

  ngOnInit() {
    let id = localStorage.getItem("id");
    if(!id){
      alert("Something wrong!");
      this.router.navigate(['']);
      return;

  }

  this.editForm = this.formBuilder.group({
    
    id: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    bio: ['', Validators.required]
  })

  this.intern.getInternById(id).subscribe(data=>{
    console.log(data);
    this.editForm.patchValue(data); //Don't use editForm.setValue() as it will throw console error
  });

  }

  get f() { return this.editForm.controls; }

  onSubmit(){
    this.submitted = true;
    
    if(this.editForm.valid){
      this.intern.updateIntern(this.editForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      });
    }
    this.myGroup = new FormGroup({
      firstName: new FormControl()
   });
  }
  
 

}
