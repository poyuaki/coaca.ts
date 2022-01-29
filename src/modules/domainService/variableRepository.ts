import {IVariable} from  '../domainModel/variable.js'

export class VariableRepository {
  variableList: IVariable[]
  constructor () {
    this.variableList = [
      {
        name: 'pie',
        value: Math.PI,
        isDefault: true
      },
      {
        name: 'e',
        value: Math.E,
        isDefault: true
      }
    ]
  }
  public save (variableObj: IVariable) {
    this.variableList.push(variableObj)
  }
  public findByName (name: string) {
    return this.variableList.find(item => item.name === name)
  }
  public getVariableList () {
    return this.variableList
  }
  /**
   * 指定した変数を変更する
   * @param name 変数名
   * @param value 変更後の値
   */
   changeVariable (name: string ,value: number) {
    this.variableList.forEach(item => {
      if (item.name === name) item.value = value
    })
  }
  /**
   * 指定した変数を削除する
   * @param name 変数名
   */
   removeVariable (name: string) {
    this.variableList = this.variableList.filter(item => item.name !== name || item.isDefault)
  }
}