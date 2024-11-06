import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

interface City {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private cities: City[] = [];
  private citiesUrl = 'assets/cities.json';

  constructor(private http: HttpClient) {
    this.loadCities();
  }

  private sortCities(): void {
    this.cities.sort((a, b) => a.name.localeCompare(b.name));
  }

  private loadCities(): void {
    const storedCities = localStorage.getItem('cities');
    if (storedCities) {
      this.cities = JSON.parse(storedCities);
      this.sortCities();
    } else {
      this.http.get<City[]>(this.citiesUrl).subscribe((data) => {
        this.cities = data;
        this.sortCities();
        this.saveToLocalStorage();
      });
    }
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('cities', JSON.stringify(this.cities));
  }

  getCities(): Observable<City[]> {
    return of(this.cities);
  }

  addCity(cityName: string): Observable<{ success: boolean; message: string }> {
    const cityExists = this.cities.some(
      (city) => city.name.toLowerCase() === cityName.toLowerCase()
    );
    if (cityExists) {
      return of({ success: false, message: 'La ciudad ya existe' });
    }


    const newId = this.cities.length > 0 ? Math.max(...this.cities.map(city => city.id)) + 1 : 1;
    const newCity: City = { id: newId, name: cityName };

    this.cities.push(newCity);
    this.sortCities();
    this.saveToLocalStorage();
    return of({ success: true, message: 'Ciudad añadida con éxito' });
  }

  deleteCity(
    cityName: string
  ): Observable<{ success: boolean; message: string }> {
    const index = this.cities.findIndex(
      (city) => city.name.toLowerCase() === cityName.toLowerCase()
    );
    if (index > -1) {
      this.cities.splice(index, 1);
      this.cities = this.cities.map((city, i) => ({ ...city, id: i + 1 }));
      this.sortCities();
      this.saveToLocalStorage();
      return of({ success: true, message: 'Ciudad eliminada con éxito' });
    }
    return of({ success: false, message: 'Ciudad no encontrada' });
  }

  filterCities(filter: string): Observable<City[]> {
    const filteredCities = this.cities.filter((city) =>
      city.name.toLowerCase().includes(filter.toLowerCase())
    );
    return of(filteredCities);
  }
}