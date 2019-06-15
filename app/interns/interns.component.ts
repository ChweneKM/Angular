import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Intern } from '../intern';
import { InternService } from '../intern.service';

@Component({
  selector: 'app-interns',
  templateUrl: './interns.component.html',
  styleUrls: ['./interns.component.css']
})
export class InternsComponent implements OnInit {

  interns: Intern[];

  constructor(private intern: InternService, private router: Router) { }

  ngOnInit() {
    this.getInterns();
  }

  getInterns(): void
  {
      this.intern.getInterns().subscribe(intern => {
        this.interns = intern
        console.log(this.interns)
      })
  }

  addIntern(): void {
    this.router.navigate(['add-intern']);
  }

  deleteIntern(intern: Intern){
    
    this.intern.deleteIntern(intern.id).subscribe(data=>{
      console.log(this.interns);
      this.getInterns();
    });
  }

  updateIntern(intern: Intern){
    localStorage.removeItem("id");
    localStorage.setItem("id", intern.id);
    this.router.navigate(['edit-intern']);
  }
  

}
