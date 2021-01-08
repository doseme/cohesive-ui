import { validate, IDateState } from '../DateTextInput'

describe('validate', () => {
  it('validates day', () => {
    const actual = validate({ dd: 'asdf', mm: '11', yyyy: '1990' })
    expect(actual).toEqual({ valid: false, message: 'Invalid date' }) 
  })

  it('validates day', () => {
    const actual = validate({ dd: '40', mm: '11', yyyy: '1990' })
    expect(actual).toEqual({ valid: false, message: 'Invalid date' }) 
  })

  it('validates day', () => {
    const actual = validate({ dd: '40', mm: '0', yyyy: '1990' })
    expect(actual).toEqual({ valid: false, message: 'Invalid date' }) 
  })

  it('validates day', () => {
    const actual = validate({ dd: '1.', mm: '10', yyyy: '1990' })
    expect(actual).toEqual({ valid: false, message: 'Invalid date' }) 
  })

  it('validates month', () => {
    const actual = validate({ dd: '11', mm: 'dddd', yyyy: '1990' })
    expect(actual).toEqual({ valid: false, message: 'Invalid date' }) 
  })

  it('validates month', () => {
    const actual = validate({ dd: '11', mm: '0', yyyy: '1990' })
    expect(actual).toEqual({ valid: false, message: 'Invalid date' }) 
  })

  it('validates month', () => {
    const actual = validate({ dd: '11', mm: '13', yyyy: '1990' })
    expect(actual).toEqual({ valid: false, message: 'Invalid date' }) 
  })

  it('validates year', () => {
    const actual = validate({ dd: '11', mm: '11', yyyy: 'asdf' })
    expect(actual).toEqual({ valid: false, message: 'Invalid date' }) 
  })

  it('validates year', () => {
    const actual = validate({ dd: '11', mm: '11', yyyy: '-1' })
    expect(actual).toEqual({ valid: false, message: 'Invalid date' }) 
  })

  it('validates year', () => {
    const actual = validate({ dd: '11', mm: '11', yyyy: '0' })
    expect(actual).toEqual({ valid: true })
  })

  it('validates year', () => {
    const actual = validate({ dd: '11', mm: '11', yyyy: '0' })
    expect(actual).toEqual({ valid: true })
  })

  it('validates with a custom validator', () => {
    const maxAge100 = (value: IDateState) => ({
      valid: new Date().getFullYear() - parseInt(value.yyyy) < 100,
      message: 'Age must be under 100'
    })

    const actual = validate({ dd: '01', mm: '12', yyyy: '1000' }, maxAge100)
    expect(actual).toEqual({ valid: false, message: 'Age must be under 100' })
  })
})
