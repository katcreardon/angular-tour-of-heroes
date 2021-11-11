import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Allows application to have routing functionality
import { HeroesComponent } from './heroes/heroes.component'; // Gives the Router somewhere to go once routes are configured
// Routes tell the Router which view to display when a user clicks a link or pastes a URL into the address bar
const routes: Routes = [
  /* A typical Angular Route has two properties:
   *    path: a string that matches the URL in the browser address bar
   *    component: the component that the router should create when navigating to this route */
  { path: 'heroes', component: HeroesComponent }
];
// The @NgModule metadata initializes the router and starts it listening for browser location changes
@NgModule({
  /* The method is called forRoot() because you configure the router at the application's root level. It supplies the
   * service providers and directives needed for routing and performs the initial navigation based on the current browser URL. */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // Makes RouterModule available throughout the application
})
export class AppRoutingModule { }
