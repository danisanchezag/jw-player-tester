import { Component, ElementRef, Renderer2 } from '@angular/core';
declare var jwplayer: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit() {
    const playerJw = jwplayer('player').setup({
      title: 'Player Test',
      playlist: {
        sources: [
          {
            file: 'https://dev-static.safefleetcloud.com/apps/media-management/dani-video.mp4',
            type: 'mp4',
          },
        ],
      },
      width: 640,
      height: 360,
      aspectratio: '16:9',
      mute: false,
      autostart: true,
      primary: 'html5',
      hlshtml: true,
    });
  }
  }
