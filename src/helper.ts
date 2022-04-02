import type { DecoratorContext } from '#/index.d'

export default class DecoratorHelper {
  #acceptKinds: Array<string> = []

  target: any

  context!: DecoratorContext

  /**
   * 判断 decorator 是否支持该类型
   */
  acceptable(): boolean {
    let kind = this.context.kind

    return this.#acceptKinds.length == 0 || this.#acceptKinds.includes(kind)
  }
}
