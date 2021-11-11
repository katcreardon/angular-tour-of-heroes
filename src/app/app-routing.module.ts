import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Allows application to have routing functionality
// Lines 4-6 give the Router somewhere to go once routes are configured
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// Routes tell the Router which view to display when a user clicks a link or pastes a URL into the address bar
const routes: Routes = [
  /* A typical Angular Route has two properties:
   *    path: a string that matches the URL in the browser address bar
   *    component: the component that the router should create when navigating to this route */
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent }, // : in the path indicates that :id is a placeholder for a specific hero id
];
// The @NgModule metadata initializes the router and starts it listening for browser location changes
@NgModule({
  /* The method is called forRoot() because you configure the router at the application's root level. It supplies the
   * service providers and directives needed for routing and performs the initial navigation based on the current browser URL. */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // Makes RouterModule available throughout the application
})
export class AppRoutingModule { }
