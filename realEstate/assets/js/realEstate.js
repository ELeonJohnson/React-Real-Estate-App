import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Enoch',
      listingsData,
      min_price: 0,
      max_price: 100000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      gym: false,
      swimming_pool: false,
      finished_basement: false,
      filterData: listingsData

    }
    this.change = this.change.bind(this)
    this.filterData=this.filterData.bind(this)
  }
  change(event) {
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
      this.setState({
        [name]: value
      }, () => {
        console.log(this.state)
        this.filterData()
      });
  }

  filterData(){
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <=
      this.state.max_price && item.floorSpace >= this.state.min_floor_space &&
      item.floorSpace <= this.state.max_floor_space
    })
    this.setState({
      filterData: newData
    })
  }
  render () {
    return (
      <div>
        <Header />

        <section id="content-area">
          <Filter change={this.change} globalState={this.state} />
          <Listings listingsData={this.state.filterData} />
        </section>
      </div>
     )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
