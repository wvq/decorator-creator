import assert from 'assert'
import _ from 'lodash'
import { decoratorWrapper } from './util'
import type { DecoratorContext } from '#/index.d'

export const Decorator = decoratorWrapper((target: any, context: DecoratorContext) => {
  assert(context.kind === 'class', '@Decorator can only be used on class')
  console.log('decorator')
  console.log(target)
})

export const Kind = decoratorWrapper((target: any, context: DecoratorContext) => {
  assert(context.kind === 'class', '@Target can only be used on class')
  console.log('kind')
  console.log(target)
})
