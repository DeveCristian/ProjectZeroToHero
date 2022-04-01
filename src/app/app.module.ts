import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [{ path: 'home', component: MainPageComponent 
},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'login', component: LoadingComponent 
},
]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoadingComponent 
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

