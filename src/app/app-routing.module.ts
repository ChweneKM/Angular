import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InternsComponent } from './interns/interns.component'
import { AddInternComponent } from './add-intern/add-intern.component';
import { EditInternComponent } from './edit-intern/edit-intern.component';

const routes: Routes = [{ path: '', component: HomeComponent },
              
                        { path: 'interns', component: InternsComponent },
                        { path: 'add-intern', component: AddInternComponent  },
                        { path: 'edit-intern', component: EditInternComponent  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
