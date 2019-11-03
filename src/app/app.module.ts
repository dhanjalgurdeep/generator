import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DygenericService } from './service/dygeneric.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DycomponentComponent } from './component/dycomponent/dycomponent.component';
import { LoadTemplate } from './directives/load-template';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
   // DycomponentComponent,
    LoadTemplate
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DygenericService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
