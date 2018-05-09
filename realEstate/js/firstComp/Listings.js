import React, { Component} from 'react'


export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Enoch'
    }
  }

  render () {
    return (
    <section className="listings">
      Listings
    </section>
    )
  }
}
