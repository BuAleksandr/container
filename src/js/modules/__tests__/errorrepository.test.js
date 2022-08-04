import ErrorRepository from '../errorrepository';

test('ErrorRepository translate have value', () => {
  const error = new ErrorRepository();
  const expected = 'Ошибка 4001';

  expect(error.translate(4001)).toEqual(expected);
});

test('ErrorRepository translate have not value', () => {
  const error = new ErrorRepository();
  const expected = 'Unknown error';

  expect(error.translate(4002)).toEqual(expected);
});