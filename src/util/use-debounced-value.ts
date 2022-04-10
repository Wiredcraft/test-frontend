import { useEventCallback } from 'rxjs-hooks'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

export function useDebouncedValue<T>(initialValue: T) {
  return useEventCallback<T, T>((payload$) => {
    return payload$.pipe(debounceTime(300), distinctUntilChanged())
  }, initialValue)
}
