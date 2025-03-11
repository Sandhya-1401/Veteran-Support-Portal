import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ForumComponent } from './pages/forum/forum.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthComponent } from './auth/auth/auth.component';

// import { ReportsComponent } from './pages/dashboard/overview/overview.component';
// import { SettingsComponent } from './pages/dashboard/settings.component';

import { UpdatesComponent } from './pages/updates/updates.component';
import { GovOpportunitiesComponent } from './pages/gov-opportunities/gov-opportunities.component';
import { PrivateOpportunitiesComponent } from './pages/private-opportunities/private-opportunities.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { RolesComponent } from './pages/dashboard/roles/roles.component';
import { LegendsComponent } from './pages/dashboard/legends/legends.component';
import { GallaryComponent } from './pages/dashboard/gallary/gallary.component';
import { MissionComponent } from './pages/dashboard/mission/mission.component';
import { PensionComponent } from './pages/pension/pension.component';
import { DisabilityComponent } from './pages/pension/disability/disability.component';
import { FamilyComponent } from './pages/pension/family/family.component';
import { RakshaComponent } from './pages/pension/raksha/raksha.component';
import { ServicsComponent } from './pages/pension/servics/servics.component';
import { SchemaComponent } from './pages/schema/schema.component';
import { SelfEmployComponent } from './pages/schema/self-employ/self-employ.component';
import { WelfareComponent } from './pages/schema/welfare/welfare.component';
import { PmssComponent } from './pages/schema/pmss/pmss.component';
import { NewRegimentComponent } from './pages/new-regiment/new-regiment.component';
import { WorkOppComponent } from './pages/new-regiment/work-opp/work-opp.component';
import { TrainingComponent } from './pages/new-regiment/training/training.component';
import { DefenceJobComponent } from './pages/new-regiment/work-opp/defence-job/defence-job.component';
import { GovJobComponent } from './pages/new-regiment/work-opp/gov-job/gov-job.component';
import { PrivateSectorJobComponent } from './pages/new-regiment/work-opp/private-sector-job/private-sector-job.component';
import { CorporateInitativeComponent } from './pages/new-regiment/work-opp/corporate-initative/corporate-initative.component';
import { JobFairComponent } from './pages/new-regiment/work-opp/job-fair/job-fair.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pension', component: PensionComponent },
  { path: 'schema', component: SchemaComponent },
  { path: 'new-regiment', component: NewRegimentComponent },

  { path: 'dashboard/roles', component: RolesComponent },
  { path: 'dashboard/legends', component: LegendsComponent },
  { path: 'dashboard/gallery', component: GallaryComponent },
  { path: 'dashboard/mission', component: MissionComponent },

  { path: 'pension/disability', component: DisabilityComponent },
  { path: 'pension/family', component: FamilyComponent },
  { path: 'pension/raksha', component: RakshaComponent },
  { path: 'pension/services', component: ServicsComponent },
  
  { path: 'schema/self-employ', component: SelfEmployComponent },
  { path: 'schema/welfare', component: WelfareComponent },
  { path: 'schema/pmss', component: PmssComponent },

  { path: 'new-regiment/work-opp', component: WorkOppComponent },
  { path: 'new-regiment/training', component: TrainingComponent },

  { path: 'new-regiment/work-opp/defence-job', component: DefenceJobComponent },
  { path: 'new-regiment/work-opp/gov-job', component: GovJobComponent },
  { path: 'new-regiment/work-opp/private-sector-job', component: PrivateSectorJobComponent },
  { path: 'new-regiment/work-opp/corporate-initative', component: CorporateInitativeComponent },
  { path: 'new-regiment/work-opp/job-fair', component: JobFairComponent },
      
  // { path: 'dashboard/settings', component: SettingsComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: 'gov-opportunities', component: GovOpportunitiesComponent },
  { path: 'private-opportunities', component: PrivateOpportunitiesComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'faqs', component: FaqsComponent },
  // { path: '', redirectTo: '/updates', pathMatch: 'full' }, // Default route

  { path: 'login', component: AuthComponent }
];

