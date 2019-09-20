import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MAT_DATE_LOCALE, MatChipsModule, MatNativeDateModule, MatCardModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

// Components
import { HomeComponent } from '../components/home/home.component';
import { MainComponent } from '../components/main/main.component';
import { LoginComponent } from '../components/login/login.component';
import { BoardComponent } from '../components/board/board.component';
import { AddMisionComponent } from '../components/add-mision/add-mision.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { CaptainSComponent } from '../components/captain-s/captain-s.component';
import { AddCaptainComponent } from '../components/add-captain/add-captain.component';
import { CompetitorsComponent } from '../components/competitors/competitors.component';
import { AddCompetitorComponent } from '../components/add-competitor/add-competitor.component';
import { SkuSComponent } from '../components/sku-s/sku-s.component';
import { AddSkauComponent } from '../components/add-sku/add-skau.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    LoginComponent,
    BoardComponent,
    AddMisionComponent,
    SettingsComponent,
    CaptainSComponent,
    AddCaptainComponent,
    CompetitorsComponent,
    AddCompetitorComponent,
    SkuSComponent,
    AddSkauComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatTableModule,
    MatChipsModule,
    MatDialogModule,
    MatListModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    AddMisionComponent,
    AddCompetitorComponent,
    AddCaptainComponent,
    SettingsComponent,
    AddSkauComponent,
    CompetitorsComponent,
    CaptainSComponent,
    CompetitorsComponent,
    SkuSComponent
  ]
})
export class AppModule { }
