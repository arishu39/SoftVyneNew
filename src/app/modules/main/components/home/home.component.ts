import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('myVideo') myVideo!: ElementRef;
  private retryCount = 0;
  private readonly maxRetries = 5;

  ngAfterViewInit(): void {
    this.setupVideo();
  }

  setupVideo() {
    const video = this.myVideo.nativeElement;
    video.muted = true; // Ensure the video is muted

    video.addEventListener('loadeddata', () => {
      this.tryPlayVideo(video);
    });

    video.addEventListener('canplay', () => {
      this.tryPlayVideo(video);
    });

    video.addEventListener('error', (error: any) => {});
  }

  tryPlayVideo(video: HTMLVideoElement) {
    if (video.readyState >= 2) {
      this.playVideo(video);
    } else {
    }
  }

  playVideo(video: HTMLVideoElement) {
    video
      .play()
      .then(() => {
        this.retryCount = 0; // Reset retry count on success
      })
      .catch((error: any) => {
        if (this.retryCount < this.maxRetries) {
          this.retryCount++;
          setTimeout(() => this.tryPlayVideo(video), 500); // Retry after 500ms
        } else {
        }
      });
  }
}
