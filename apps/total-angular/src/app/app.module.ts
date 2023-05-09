import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AnnotationAppComponent,
  AnnotationModule,
} from '@groupdocs.examples.angular/annotation';
import {
  ComparisonAppComponent,
  ComparisonModule,
} from '@groupdocs.examples.angular/comparison';
import {
  ConversionAppComponent,
  ConversionModule,
} from '@groupdocs.examples.angular/conversion';
import {
  EditorAppComponent,
  EditorModule,
} from '@groupdocs.examples.angular/editor';
import {
  MetadataAppComponent,
  MetadataModule,
} from '@groupdocs.examples.angular/metadata';
import {
  ParserAppComponent,
  ParserModule,
} from '@groupdocs.examples.angular/parser';
import {
  SearchAppComponent,
  SearchModule,
} from '@groupdocs.examples.angular/search';
import {
  SignatureAppComponent,
  SignatureModule,
} from '@groupdocs.examples.angular/signature';
import {
  ViewerAppComponent,
  ViewerModule,
} from '@groupdocs.examples.angular/viewer';
import { AppComponent } from './app.component';
import { TotalNavComponent } from './total-nav/total-nav.component';
import { TotalViewComponent } from './total-view/total-view.component';

@NgModule({
  declarations: [AppComponent, TotalNavComponent, TotalViewComponent],
  imports: [
    CommonModule,
    ViewerModule.forRoot('http://localhost:8080'),
    EditorModule.forRoot('http://localhost:8080'),
    ComparisonModule.forRoot('http://localhost:8080'),
    ConversionModule.forRoot('http://localhost:8080'),
    SignatureModule.forRoot('http://localhost:8080'),
    AnnotationModule.forRoot('http://localhost:8080'),
    MetadataModule.forRoot('http://localhost:8080'),
    SearchModule.forRoot('http://localhost:8080'),
    ParserModule.forRoot('http://localhost:8080'),
    RouterModule.forRoot(
      [
        { path: '', component: TotalViewComponent },
        { path: 'viewer', component: ViewerAppComponent },
        { path: 'editor', component: EditorAppComponent },
        { path: 'comparison', component: ComparisonAppComponent },
        { path: 'conversion', component: ConversionAppComponent },
        { path: 'signature', component: SignatureAppComponent },
        { path: 'annotation', component: AnnotationAppComponent },
        { path: 'metadata', component: MetadataAppComponent },
        { path: 'search', component: SearchAppComponent },
        { path: 'parser', component: ParserAppComponent },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  exports: [TotalViewComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
