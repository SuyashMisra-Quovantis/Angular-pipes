import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalErrorHandler } from './error-handler/global-error-handler';
import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';

@NgModule({
  declarations: [AppComponent, ShortenPipe],
  imports: [BrowserModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
