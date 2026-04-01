
// https://angular.io/guide/using-libraries#adding-a-library-to-the-runtime-global-scope

declare interface DepartureBoardOptions {
    rowCount: number;
    letterCount: number;
}
declare class DepartureBoard {
  static LETTERS: string;

  constructor(element: HTMLElement, options: DepartureBoardOptions);
  setValue(value: string): void;
}
