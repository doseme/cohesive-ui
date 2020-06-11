import {
  validate,
  IValidators,
  IValidationResult,
} from './validation'

describe('validate', () => {
  const rules: IValidators = {
    type: 'whole',
    isRequired: true
  }

  const invalid: IValidationResult = {
    valid: false,
    message: 'Whole numbers only',
  }

  test('isWhole invalid', () => {
    const actual = validate({ type: 'whole' }, 'asdf')
    expect(actual).toEqual(invalid)
  })

  test('isWhole invalid', () => {
    const actual = validate({ type: 'whole' }, '123.')
    expect(actual).toEqual(invalid)
  })

  test('isWhole invalid', () => {
    const actual = validate({ type: 'whole' }, '-123')
    expect(actual).toEqual(invalid)
  })

  test('isRequired invalid', () => {
    const actual = validate({ type: 'whole', isRequired: true }, '')
    expect(actual).toEqual({ valid: false, message: 'Required' })
  })

  test('isWhole valid', () => {
    const actual = validate({ type: 'whole' }, '123')
    expect(actual).toEqual({ valid: true })
  })

  test('isWhole valid', () => {
    const actual = validate({ type: 'whole' }, '0')
    expect(actual).toEqual({ valid: true })
  })

  test('isInteger invalid', () => {
    const actual = validate({ type: 'integer' }, '0.1')
    expect(actual).toEqual({ valid: false, message: 'Integers only' })
  })

  test('isInteger valid', () => {
    const actual = validate({ type: 'integer' }, '-1')
    expect(actual).toEqual({ valid: true })
  })

  test('isInteger valid', () => {
    const actual = validate({ type: 'integer' }, '1')
    expect(actual).toEqual({ valid: true })
  })

  test('isFloat invalid', () => {
    const actual = validate({ type: 'positiveFloat' }, '1.1s')
    expect(actual).toEqual({ valid: false, message: 'Positive numbers only' })
  })


  test('isFloat valid', () => {
    const actual = validate({ type: 'positiveFloat' }, '1')
    expect(actual).toEqual({ valid: true })
  })

  test('isFloat valid', () => {
    const actual = validate({ type: 'positiveFloat' }, '1.0')
    expect(actual).toEqual({ valid: true })
  })

  test('isFloat valid', () => {
    const actual = validate({ type: 'positiveFloat' }, '0')
    expect(actual).toEqual({ valid: true })
  })

  test('isFloat valid', () => {
    const actual = validate({ type: 'positiveFloat' }, '-1.2')
    expect(actual).toEqual({ valid: false, message: 'Positive numbers only' })
  })
})
