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
    
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
