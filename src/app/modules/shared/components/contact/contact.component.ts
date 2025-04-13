import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false,
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitted = false;
  isLoading = false;

  constructor(private fb: FormBuilder, private toastService: ToastService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      source: ['', Validators.required],
      comments: [''],
    });
  }

  ngOnInit() {}

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(
      field &&
      field.invalid &&
      (field.dirty || field.touched || this.isSubmitted)
    );
  }

  isFormValid(): boolean {
    return (
      this.contactForm.get('name')?.value &&
      this.contactForm.get('email')?.value &&
      this.contactForm.get('source')?.value &&
      this.contactForm.valid
    );
  }

  getEmailErrorMessage(): string {
    const email = this.contactForm.get('email');
    if (email?.errors) {
      if (email.errors['required']) {
        return 'Email is required';
      }
      if (email.errors['email']) {
        return 'Please enter a valid email address';
      }
    }
    return '';
  }

  onSubmit() {
    this.isSubmitted = true;
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach((key) => {
        const control = this.contactForm.get(key);
        if (control?.errors) {
          control.markAsTouched();
        }
      });
      return;
    }

    this.isLoading = true;
    const formData = {
      ...this.contactForm.value,
    };

    fetch('https://formspree.io/f/xwplyykz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        this.isLoading = false;
        if (response.ok) {
          this.toastService.showSuccess('Message sent successfully!');
          this.contactForm.reset();
          this.isSubmitted = false;
        } else {
          this.toastService.showError(
            'Failed to send message. Please try again.'
          );
        }
      })
      .catch((error) => {
        this.isLoading = false;
        console.error('Error:', error);
        this.toastService.showError('An error occurred. Please try again.');
      });
  }
}
