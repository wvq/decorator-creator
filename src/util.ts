/**
 * let decorator support both @decorator and @decorator()
 *
 * @param {Function} fn
 */
export function decoratorWrapper(fn: Function): Function {
  return function (...args: any[]) {
    let [target, context] = args
    if (context?.kind && context?.name) {
      return fn(target, context)
    } else {
      return (target, context) => fn(target, context, ...args)
    }
  }
}
