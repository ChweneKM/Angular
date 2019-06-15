import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { InternService } from '../intern.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";


@Component({
  selector: 'app-add-intern',
  templateUrl: './add-intern.component.html',
  styleUrls: ['./add-intern.component.css']
})
export class AddInternComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private intern: InternService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      bio: ['', Validators.required]
    });
  }
    onSubmit(){
      this.submitted = true;
      
      if(this.addForm.valid){
        this.intern.addIntern(this.addForm.value)
        .subscribe( data => {
          console.log(data);
          this.router.navigate(['']);
        });
      } 
    }

    get f() { return this.addForm.controls; }

}
