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
      <div className="inside">
      <section id="filter">
        <h4>Filter</h4>
        <select name="neighborhood" className="filters neighborhood" onChange={this.props.change}>
          <option value="Cleveland">Cleveland</option>
          <option value="Harlem">Harlem</option>
          <option value="San Jose">San Jose</option>
        </select>

        <select name="housetype" className="filters housetype" onChange={this.props.change}>
          <option value="Studio">Studio</option>
          <option value="Apartment">Apartment</option>
          <option value="Room">Room</option>
        </select>

        <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
          <option value="1 BR">1 BR</option>
          <option value="2 BR">2 BR</option>
          <option value="3 BR">3 BR</option>
        </select>

        <div className="filters price">
            <span className="title">Price</span>
            <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price}/>
            <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price}/>
        </div>
        <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space}/>
            <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space}/>
        </div>

        <div className="filters extras">
            <span className="title">
              Extras
            </span>
            <label htmlFor="extras">
            <span>Elevators</span>
            <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change} />
            </label>

            <label htmlFor="extras">
            <span>Swimming Pool</span>
            <input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change} />
            </label>

            <label htmlFor="extras">
            <span>Finished Basement</span>
            <input name="finished_basement" value="finished_basement" type="checkbox" onChange={this.props.change}/>
            </label>

            <label htmlFor="extras">
            <span>Gym</span>
            <input name="gym" value="gym" type="checkbox" onChange={this.props.change}/>
            </label>
        </div>
      </section>
      </div>
    )
  }
}
