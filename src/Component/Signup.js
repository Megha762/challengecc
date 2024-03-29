import React, { Component } from "react"

export default class Signup extends Component{
  constructor(props){
    super(props)
    this.state={
      username: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onSubmit(this.state.username)
  }
  render(){
    return(
      <div className="form-container">
        <h1>Let's Talk</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="email">What is your email?</label>
          <input className="input" type="email" name="username" value={this.state.username} onChange={this.handleChange}/>
          <button className="submit">Submit</button>
        </form>
      </div>
    )
  }
} 