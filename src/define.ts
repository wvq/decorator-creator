import type { DecoratorFunction } from '#/index.d'
/**
 * this function do nothing but tell tsc target is callable.
 */
export function defineDecorator(target: any): DecoratorFunction<any> {
  return target
}
