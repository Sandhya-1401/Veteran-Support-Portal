import { Component, ElementRef, ViewChild, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('statsSection', { static: false }) statsSection!: ElementRef;
  private hasAnimated = false;
  private observer!: IntersectionObserver;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.urlAfterRedirects === '/') {
        this.hasAnimated = false;
        setTimeout(() => this.setupObserver(), 500);
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => this.setupObserver(), 500);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  setupObserver() {
    if (!this.statsSection || this.hasAnimated) return;

    this.observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry.isIntersecting && !this.hasAnimated) {
        this.hasAnimated = true;
        this.startCounting();
        this.observer.disconnect();
      }
    }, { threshold: 0.7 });

    this.observer.observe(this.statsSection.nativeElement);
  }

  startCounting() {
    this.animateCounter('veteransCount', 10000000, 2000);
    this.animateCounter('establishedYear', 1895, 2000);
    this.animateCounter('achieversCount', 50000, 2000);
  }

  animateCounter(id: string, target: number, duration: number) {
    const element = document.getElementById(id);
    if (!element) return;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentValue = Math.floor(progress * target);
      element.innerText = currentValue.toString();

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.innerText = target.toString();
      }
    };

    requestAnimationFrame(step);
  }

  // ✅ Add this function
  navigate(url: string) {
    this.router.navigateByUrl(url);
  }
}
