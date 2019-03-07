/* yarn example/ */
import ttt from '../src'

(async () => {
  const res = await ttt({
    text: 'example',
  })
  console.log(res)
})()