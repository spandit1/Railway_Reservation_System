import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { TrainComponent } from './train/train.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SearchComponent } from './search/search.component';
import { AdminTrainComponent } from './admin-train/admin-train.component';
import { RegisterComponent } from './register/register.component';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { UpdateTrainComponent } from './update-train/update-train.component';
import { AddTrainComponent } from './add-train/add-train.component';
import { RemovetrainComponent } from './removetrain/removetrain.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    TrainComponent,
    HomeComponent,
    SignupComponent,
    SearchComponent,
    AdminTrainComponent,
    RegisterComponent,
    LoginComponent,
    ReservationComponent,
    UpdateTrainComponent,
    AddTrainComponent,
    RemovetrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCommonModule,
    MatIconModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
