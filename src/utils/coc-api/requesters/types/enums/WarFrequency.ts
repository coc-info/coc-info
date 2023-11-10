/**
 * unknown             = Not set / 설정되지 않음,
 * always              = Always / 항상,
 * moreThanOncePerWeek = Twice a week / 1주에 2회,
 * oncePerWeek         = Once a week / 1주에 1회,
 * lessThanOncePerWeek = Rarely / 거의 안 함,
 * never               = Never / 안 함
 */
export type WarFrequency =
  | 'unknown'
  | 'always'
  | 'moreThanOncePerWeek'
  | 'oncePerWeek'
  | 'lessThanOncePerWeek'
  | 'never';
