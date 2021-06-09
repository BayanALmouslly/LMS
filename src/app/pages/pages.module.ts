import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { EducationalUnitsModule } from './educational-units/educational-units.module';
import { HomePagesModule } from './home-pages/home-pages.module';
import { CourseDescriptionsModule } from './course-descriptions/course-descriptions.module';
import { AdvertisingModule } from './advertising/advertising.module';
import { DiscussionsModule } from './discussions/discussions.module';
import { CourseEvaluationModule } from './course-evaluation/course-evaluation.module';
import { CourseMessageModule } from './course-message/course-message.module';
import { HelpModule } from './help/help.module';
import { MarksModule } from './marks/marks.module';
import { ToolsModule } from './tools/tools.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../login/auth.interceptor';
import { StudentExamComponent } from './student-exam/student-exam.component';
import { StudentExamModule } from './student-exam/student-exam.module';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { HomeworksModule } from './homeworks/homeworks.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    EducationalUnitsModule,
    HomePagesModule,
    CourseDescriptionsModule,
    AdvertisingModule,
    DiscussionsModule,
    CourseEvaluationModule,
    CourseMessageModule,
    HelpModule,
    MarksModule,
    ToolsModule,
    StudentExamModule,
    HomeworksModule,
    ngFormsModule
    
  ],
  declarations: [
    PagesComponent,
    StudentExamComponent,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },],
})
export class PagesModule {
}
