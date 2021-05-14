import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EarnedService } from './earned.service';

@Component({
  selector: 'app-earned',
  templateUrl: './earned.component.html',
  providers: [EarnedService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EarnedComponent implements AfterViewInit {

  @ViewChild('board') boardElement: ElementRef<HTMLDivElement> | undefined;

  wholeNumber = '000';

  cents = '00';

  @Input()
  boardLength: number = 12;

  departureBoard: any = null;

  @Input()
  set earned(earned: number | any) {
    this.cents = this.earnedService.cents(earned);
    this.wholeNumber = this.earnedService.wholeNumber(earned);

    this.updateDepartureBoard()
  }

  constructor(private earnedService: EarnedService) { }

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
      const formatted = `${this.wholeNumber}.${this.cents}`;
      const leadingSpaces = this.boardLength - formatted.length;
      const prefix = new Array(leadingSpaces + 1).join(' ');
      const forBoard = `${prefix}${formatted}`;
      this.departureBoard.setValue(forBoard);
    }
  }
}
