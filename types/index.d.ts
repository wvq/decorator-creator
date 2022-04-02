type DecoratorCreatorFunction<T> = (arg: T) => ClassDecorator

type DecoratorFunction<T> = DecoratorCreatorFunction<T> & ClassDecorator
/**
 *
 * This function is do nothing, just tell tsc the class is a callable function.
 *
 * @todo need to find a way to make class callable.
 *
 * ```
 *  @Decorator()
 *  class Entity {
 *    proccess() {...}
 *  }
 *
 *  @Entity() // error: Entity is a class, tsc throw it not callable.
 *  class Todo {}
 *
 *
 *  const Entity = defineDecorator(
 *    @Decorator()
 *    class Entity() {
 *      proccess() {...}
 *    }
 * )
 *
 *  @Entity()
 *  class Todo {}
 * ```
 *
 *
 */
export function defineDecorator<T>(target: any): DecoratorFunction<T>

export function defineDecoratorCreator<T>(target: any): DecoratorCreatorFunction<T>

export type DecoratorContext = {
  kind: string
  name: string | symbol
  access: {
    get?(): unknown
    set?(value: unknown): void
  }
  isPrivate?: boolean
  isStatic?: boolean
  addInitializer?(initializer: () => void): void
}
