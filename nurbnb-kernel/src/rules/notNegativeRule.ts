import { IBusinessRule } from 'src/core/iBusinessRule';

export class NotNegativeRule implements IBusinessRule {
  public message: string = 'Object cannot be null';
  private _value: any;

  constructor(value: any) {
    this._value = value;
  }

  isValid: () => boolean = () => {
    return typeof this._value !== null;
  };
}
