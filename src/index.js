/**
 * @class FormEntries
 */

// import React, { Component } from 'react'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

// export default class FormEntries extends Component {
//   static propTypes = {
//     getNumEntries: PropTypes.func.isRequired,
//     getEntries: PropTypes.func.isRequired
//   }

//   constructor () {
//     super()
//     this.state = {
//       numEntries: void 0
//     }
//   }

//   componentDidMount () {
//     const {
//       getNumEntries
//     } = this.props

//     Promise
//       .resolve(getNumEntries())
//       .then((numEntries) => {
//         this.setState({ numEntries })
//     })
//   }

//   componentDidUpdate (prevProps, prevState,

//   render () {
//     const {
//       text,
//       getNumEntries
//     } = this.props
//     const {
//       numEntries
//     } = this.state

//     return (
//       <div className={styles.test}>
//         Form Entries: {numEntries}
//       </div>
//     )
//   }
// }

const FormEntries = function FormEntries (props) {
  const [numEntries, setNumEntries] = useState(0)
  const {
    text,
    getNumEntries
  } = props

  Promise.resolve(getNumEntries())
    .then((n) => {
      console.log('n', n)
      // sneProxy(num)
    })

  return (
    <div className={styles.test}>
      Form Entries: {text}
    </div>
  )
}

FormEntries.propTypes = {
  getNumEntries: PropTypes.func.isRequired,
  getEntries: PropTypes.func.isRequired
}

export default FormEntries
