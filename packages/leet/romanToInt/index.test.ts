import { describe, expect, it } from 'vitest'
import { romanToInt } from '.'

describe('romanToInt', () => {
  it('works', () => {
    expect(romanToInt('I')).toBe(1)
    expect(romanToInt('IV')).toBe(4)
    expect(romanToInt('V')).toBe(5)
    expect(romanToInt('IX')).toBe(9)
    expect(romanToInt('X')).toBe(10)
    expect(romanToInt('XL')).toBe(40)
    expect(romanToInt('L')).toBe(50)
    expect(romanToInt('XC')).toBe(90)
    expect(romanToInt('C')).toBe(100)
    expect(romanToInt('CD')).toBe(400)
    expect(romanToInt('D')).toBe(500)
    expect(romanToInt('CM')).toBe(900)
    expect(romanToInt('M')).toBe(1000)
  })

  it('works with roman numerals', () => {
    expect(romanToInt('MDCCCLXXXIX')).toBe(1889)
    expect(romanToInt('MMVIII')).toBe(2008)
    expect(romanToInt('MMXIV')).toBe(2014)
    expect(romanToInt('MMXIX')).toBe(2019)
    expect(romanToInt('MMMCMXCIX')).toBe(3999)
  })


  it('works with roman numerals', () => {
    expect(romanToInt('III')).toMatchInlineSnapshot('3')
    expect(romanToInt('LVIII')).toMatchInlineSnapshot('58')
    expect(romanToInt('MCMXCIV')).toMatchInlineSnapshot('1994')
  })
})
