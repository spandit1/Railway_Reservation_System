import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { TrainComponent } from './train/train.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';
import { AdminTrainComponent } from './admin-train/admin-train.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddTrainComponent } from './add-train/add-train.component';
import { UpdateTrainComponent } from './update-train/update-train.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RemovetrainComponent } from './removetrain/removetrain.component'




const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: "adminlogin",
    component: AdminComponent
  },
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "train",
    component: TrainComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "adminhome",
    component: AdminTrainComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "Add-train",
    component: AddTrainComponent
  },
  {
    path: "update-train",
    component: UpdateTrainComponent
  },
  {
    path: "reservation",
    component: ReservationComponent
  },
  {
    path: "removetrain",
    component: RemovetrainComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}