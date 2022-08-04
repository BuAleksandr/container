export default class ErrorRepository {
  // конструктор создаёт Map с кодом ошибки в ключе и её описании в значении
  constructor() {
    this.error = new Map([[4001, 'Ошибка 4001'], [4101, 'Ошибка 4101']]);
  }

  // метод поулчает значение ошибки по её коду
  translate(code) {
    if (!this.error.has(code)) {
      return 'Unknown error';
    }

    return this.error.get(code);
  }
}