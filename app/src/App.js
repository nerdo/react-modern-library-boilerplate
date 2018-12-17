import React from 'react'
import FormEntries from 'tsi-form-entries'

function getNumEntries () {
  return new Promise(function (resolve, reject) {
    setTimeout(
      function () {
        resolve(60)
      },
      500
    )
  })
}

// export default class App extends Component {
//   render () {
//     return (
//       <div>
//         <FormEntries getNumEntries={getNumEntries} />
//       </div>
//     )
//   }
// }

export default function App () {
  return (
    <div>
      <FormEntries getNumEntries={getNumEntries} />
    </div>
  )
}
