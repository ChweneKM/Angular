import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule, MatSidenavModule, MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule, MatListModule, MatMenuModule,
  MatNativeDateModule,MatSnackBarModule, MatDialogModule, MatTableModule, MatPaginatorModule , MatSortModule,
  MatCheckboxModule, MatCard, MatCardModule, MatFormField, MatFormFieldModule, MatProgressSpinnerModule} from '@angular/material';




import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenaveComponent } from './sidenave/sidenave.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { InternsComponent } from './interns/interns.component';
import { InternService } from './intern.service';
import { AddInternComponent } from './add-intern/add-intern.component';
import { EditInternComponent } from './edit-intern/edit-intern.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenaveComponent,
    HomeComponent,
    MainNavComponent,
    InternsComponent,
    AddInternComponent,
    EditInternComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    
    
    
    
  

  ],
  providers: [InternService],
  bootstrap: [AppComponent]
})
export class AppModule { }
