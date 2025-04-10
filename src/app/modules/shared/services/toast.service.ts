import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  message: string;
  type: 'success' | 'error';
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new BehaviorSubject<Toast | null>(null);

  show(toast: Toast) {
    this.toastSubject.next(toast);
  }

  clear() {
    this.toastSubject.next(null);
  }

  getToast() {
    return this.toastSubject.asObservable();
  }

  showSuccess(message: string) {
    this.show({ message, type: 'success' });
  }

  showError(message: string) {
    this.show({ message, type: 'error' });
  }
}
