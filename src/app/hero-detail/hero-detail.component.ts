import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero; // must be an Input property because the external HeroesComponent will bind to it

  constructor(
    private route: ActivatedRoute, // Holds information about the route to this instance of the HeroDetailComponent
    private heroService: HeroService, // Gets hero data from the remote server and this component will use it to get the hero-to-display
    private location: Location // An Angular service for interacting with the browser
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // route.snapshot is a static image of the route information shortly after the component was created
    // The paramMap is a dictionary of route parameter values extracted from the URL. Route params are always strings.
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back(); // Navigates backward one step in the browser's history stack using the Location service
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

}
