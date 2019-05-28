import React, {Component} from 'react'

class Footer extends Component {
  render () {
    const {filter} = this.props

    return (
      <div>
        <span>Show:</span>
        <button disabled = {filter === "All"}  onClick = {this.props.onClick.bind(this,"All")}>All</button>
        <button disabled = {filter === "Action"} onClick = {this.props.onClick.bind(this,"Action")}>Action</button>
        <button disabled = {filter === "Completed"} onClick = {this.props.onClick.bind(this,"Completed")}>Completed</button>
      </div>
    )
  }
  
  
 
}

export default Footer