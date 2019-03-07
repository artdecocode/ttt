import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import ttt from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof ttt, 'function')
  },
  async 'calls package without error'() {
    await ttt()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await ttt({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T