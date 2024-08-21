import { Base } from './base';

export class Derived extends Base {
  constructor() {
    super();
  }

  public requiredMethod(): void {
    console.log("Derived Class Abstract Method Called");
  }
}
