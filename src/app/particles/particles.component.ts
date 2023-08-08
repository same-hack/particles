import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ParticlesConfig } from './particles-config';

declare let particlesJS: any;

@Component({
  selector: 'app-particles',
  template: '<div #particlesRef></div>',
  styleUrls: ['./particles.component.scss'],
})
export class ParticlesComponent implements OnInit {
  @ViewChild('particlesRef', { static: true }) particlesRef!: ElementRef;

  ngOnInit(): void {
    this.initParticles();
  }

  initParticles(): void {
    particlesJS(this.particlesRef.nativeElement, ParticlesConfig);
  }
}
