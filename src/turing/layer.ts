

export class Layer {

  symbols: {[key: number]: string};
  position: number;

  constructor(symbols?: {[key: number]: string}, position?: number) {
    this.symbols = symbols || {};
    this.position = position || 0;
  }

  getPosition(): number {
    return this.position;
  }

  getSymbol(position: number): string {
    return this.symbols[position];
  }

  getCurrentSymbol(): string {
    return this.symbols[this.position];
  }

}