import { createProdMockServer } from './createProdMockServer'
import userMock from '../mock/user'

export function setupProdMockServer() {
  createProdMockServer([...userMock])
}
