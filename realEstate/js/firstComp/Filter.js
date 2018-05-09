import React, { Component} from 'react'


export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Enoch'
    }
  }

  render () {
    return (
      <section className="filter">
        <h4>Filter</h4>
        <select name="neighborhood" className="filters neighborhood">
          <option>Cleveland</option>
        </select>

        <select name="housetype" className="filters housetype">
          <option>Studio</option>
        </select>

        <select name="bedrooms" className="filters bedrooms">
          <option>1 BR</option>
        </select>

        <div className="filters price">
            <span className="title">Price</span>
            <input type="text" name="min-price" className="min-price" />
            <input type="text" name="max-price" className="max-price" />
        </div>
        <div className="filters floor-space">
            <span className="title">Price</span>
            <input type="text" name="min-floor-space" className="min-floor-space" />
            <input type="text" name="max-floor-space" className="max-floor-space" />
        </div>

        <div className="filters extras">
            <label for="extras">
            <span>Elevators</span>
            <input name="extras" value="elevator" type="checkbox" />
            </label>

            <label for="extras">
            <span>Swimming Pool</span>
            <input name="extras" value="swimming-pool" type="checkbox" />
            </label>

            <label for="extras">
            <span>Finished Basement</span> 
            <input name="extras" value="finished-basement" type="checkbox" />
            </label>

            <label for="extras">
            <span>Gym</span>
            <input name="extras" value="gym" type="checkbox" />
            </label>
        </div>
      </section>
    )
  }
}
