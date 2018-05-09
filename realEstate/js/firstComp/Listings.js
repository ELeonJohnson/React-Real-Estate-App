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
    <section id="listings">
      <section className="search-area">
        <input type="text" className="search" />
      </section>

      <section className="sort-by">
        <div>
            300 results found
        </div>

        <div className="sort-options">
          <select name="sortby" className="sortby">
            <option value="price-asc">Highest Price</option>
            <option value="price-dsc">Lowest Price</option>
          </select>

          <div className="view">
            <i className="fa fa-th-list" aria-hidden="true"></i>
            <i className="fa fa-th" aria-hidden="true"></i>
          </div>
        </div>
      </section>

      <section className="listing-results">
        <div className="listing">
          <div className="listing-image">
            <span className="address">Address</span>
            <div className="details">
                <div className="user-image"></div>
                  <div className="user-detail">
                    <span className="user-name">John Doe</span>
                    <span className="post-date">07/07/2017</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-space"><i className="fa fa-square-o" aria-hidden="true"></i>
                    <span>1000 ft&sup2;</span>
                    </div>
                    <div className="bedrooms">
                    <i className="fa fa-bed" aria-hidden="true"></i>
                      <span>2 bedrooms</span>
                    </div>
                  </div>
              </div>
          </div>
          <div className="bottom-info">
            <span>$1000 / month</span>
            <span><i className="fa fa-map-marker"
            aria-hidden="true"></i> Cleveland, OH</span>
          </div>
        </div>
      </section>

      <section className="pagination">
        <ul className="pagination-nums">
          <li>Prev</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>Next</li>
        </ul>
      </section>

    </section>
    )
  }
}
