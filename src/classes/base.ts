export abstract class Base {
  public constructor() {
    console.log("Base Class Constructor Called");
  }

  protected abstract requiredMethod(): void;
  protected optionalMethod?(): string;
}
