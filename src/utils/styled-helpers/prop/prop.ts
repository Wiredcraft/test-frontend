import {StyledProps} from 'styled-components'

/**
 * Return value of props[key] or defaultValue
 * @param key
 * @param defaultValue
 */
export function prop(key: string, defaultValue?: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (props: StyledProps<any>): string | undefined {
    return typeof props[key] !== 'undefined' ? props[key] : defaultValue
  }
}
