import { ProviderAst } from '@angular/compiler';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WatcherService } from './watcher/watcher.service';

@Injectable()
export class TimerService implements OnDestroy {

  private startedAt = 0;
  private lastUpdated = 0;

  private buttonTextSource = new BehaviorSubject<string>('Start');
  private elapsedMillisSource = new BehaviorSubject<number>(0);

  public counting: boolean = false;
  public buttonText$ = this.buttonTextSource.asObservable();
  public elapsed$ = this.elapsedMillisSource.asObservable();

  constructor(private watcherService: WatcherService) { }

  onStartOrPause() {
    const startAction = !this.counting;
    if (startAction) {
      this.startedAt = Date.now();
      this.lastUpdated = this.startedAt;

      this.watcherService.start(this.updateElapsed, this);
      this.buttonTextSource.next('Pause');
      this.counting = true;
    } else {
      this.watcherService.stop();
      this.buttonTextSource.next('Start');
      this.counting = false;
    }
  }

  onReset() {
    if (this.counting) {
      this.counting = false;
      this.watcherService.stop();
    }
    this.elapsedMillisSource.next(0);
    this.buttonTextSource.next('Start');
  }

  ngOnDestroy(): void {
    this.watcherService.stop();
  }

  private updateElapsed() {
    this.lastUpdated = Date.now();
    const newElapsed = this.lastUpdated - this.startedAt;
    this.elapsedMillisSource.next(newElapsed);
  }
}
