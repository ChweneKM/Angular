import { Component, OnInit } from '@angular/core';
import { InternService } from '../intern.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any;
  selectedIntern : any;

  constructor(private intern: InternService) { }

  ngOnInit() {
    this.intern.getInterns().subscribe(intern =>{
      this.users = intern
      console.log(this.users)
    })
  }

  onSelect(intern : Object): void{

    console.log(this.selectedIntern = intern)

  }

}
