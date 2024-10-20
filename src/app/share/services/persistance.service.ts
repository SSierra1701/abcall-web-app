import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersistanceService {
  set(key: string, data: string) {
    try {
      localStorage.setItem(key, data);
    } catch (e) {
      console.error('Error saving on local storage', e);
    }
  }

  get(key: string): string {
    try {
      const data = localStorage.getItem(key);
      return data || '';
    } catch (e) {
      console.error('Error retrieving from  local storage', e);
      return '';
    }
  }
}
