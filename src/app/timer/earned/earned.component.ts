import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EarnedService } from './earned.service';

@Component({
  selector: 'app-earned',
  templateUrl: './earned.component.html',
  styleUrls: ['./earned.component.scss'],
  providers: [EarnedService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EarnedComponent implements AfterViewInit {

  @ViewChild('board') boardElement: ElementRef<HTMLDivElement> | undefined;

  earnedCents: number = 0;

  @Input()
  boardLength: number = 12;

  departureBoard: any = null;

  @Input()
  set earned(earned: number | any) {
    this.earnedCents = earned;
    this.updateDepartureBoard()
  }

  ngAfterViewInit() {
    if (this.boardElement) {
      DepartureBoard.LETTERS = ' .0123456789';
      this.departureBoard = new DepartureBoard(this.boardElement.nativeElement, {
        rowCount: 1,
        letterCount: this.boardLength
      });
      this.updateDepartureBoard();
    }
  }

  private updateDepartureBoard() {
    if (this.departureBoard) {

      const earned = this.earnedCents / 100;
      const formatted = earned.toFixed(2);
      const leadingSpaces = this.boardLength - formatted.length;
      const prefix = new Array(leadingSpaces + 1).join(' ');
      const forBoard = `${prefix}${formatted}`;
      this.departureBoard.setValue(forBoard);
    }
  }
}
