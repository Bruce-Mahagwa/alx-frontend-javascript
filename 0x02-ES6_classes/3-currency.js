export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  set name(nam) {
    if (typeof (nam) === 'string') {
      this._name = nam;
    }
  }

  set code(cod) {
    if (typeof (cod) === 'string') {
      this._code = cod;
    }
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }
}
