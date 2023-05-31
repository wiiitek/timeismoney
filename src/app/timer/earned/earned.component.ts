import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-earned',
  templateUrl: './earned.component.html',
  styleUrls: ['./earned.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EarnedComponent implements AfterViewInit {

  @ViewChild('board') boardElement: ElementRef<HTMLDivElement> | undefined;

  earnedCents: number = 0;

  @Input()
  boardLength: number = 8;

  departureBoard: any = null;

  @Input()
  set earned(earned: number | null) {
    if (earned != null) {
      const fractionalSeparatorLenght = 1;
      const displayedCentsLimit = Math.pow(10, this.boardLength - fractionalSeparatorLenght);
      this.earnedCents = earned % displayedCentsLimit;
      this.updateDepartureBoard();
    }
  }

  ngAfterViewInit() {
    if (this.boardElement) {
      if (DepartureBoard) {
        DepartureBoard.LETTERS = ' 0123456789.';
        this.departureBoard = new DepartureBoard(this.boardElement.nativeElement, {
          rowCount: 1,
          letterCount: this.boardLength
        });
        this.updateDepartureBoard();
      }
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
