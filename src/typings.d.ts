
// https://angular.io/guide/using-libraries#adding-a-library-to-the-runtime-global-scope
interface DepartureBoardOptions {
  rowCount: number;
  letterCount: number;
}

interface DepartureBoardInstance {
  setValue(value: string): void;
}

interface DepartureBoardConstructor {
  new (element: HTMLElement, options: DepartureBoardOptions): DepartureBoardInstance;
  LETTERS: string;
}

declare const DepartureBoard: DepartureBoardConstructor;
