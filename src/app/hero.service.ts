import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
// When you provide a service at the root level, Angular creates a single, shared instance and injects into any class that asks for it
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // Returns an Observable<Hero[]> that emits a single value, the array of mock heroes
    return heroes;
  }
}
