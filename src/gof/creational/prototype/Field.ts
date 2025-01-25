import Prototype from './Prototype';

export default class Field implements Prototype {
  constructor(
    public fieldId: string,
    public type: string,
    public title: string,
  ) {}

  static create(type: string, title: string) {
    const fieldId = Math.random().toString(36).substring(2);
    return new Field(fieldId, type, title);
  }

  clone(): Field {
    return new Field(this.fieldId, this.type, this.title);
  }
}
