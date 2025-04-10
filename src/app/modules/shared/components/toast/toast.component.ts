import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { Observable, Subscription } from 'rxjs';
import { Toast } from '../../services/toast.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  standalone: false,
  animations: [
    trigger('toastAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50%) translateY(-20px)' }),
        animate(
          '300ms ease',
          style({ opacity: 1, transform: 'translateX(-50%) translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease',
          style({ opacity: 0, transform: 'translateX(-50%) translateY(-20px)' })
        ),
      ]),
    ]),
  ],
})
export class ToastComponent implements OnInit, OnDestroy {
  toast$!: Observable<Toast | null>;
  private toastSubscription!: Subscription;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toast$ = this.toastService.getToast();
    this.toastSubscription = this.toast$.subscribe((toast) => {
      if (toast) {
        setTimeout(() => this.toastService.clear(), 3000);
      }
    });
  }

  ngOnDestroy() {
    if (this.toastSubscription) {
      this.toastSubscription.unsubscribe();
    }
  }
}
