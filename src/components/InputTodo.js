import React, {Component} from "react"

class InputTodo extends Component {

  state = {
    title: ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.title)
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({title: ""});
  }

  render() {
    return (<form className="form-container" onSubmit={this.handleSubmit}>
      <input type="text" className="input-text" placeholder="Enter Todo..." value={this.state.title} name="title" onChange={this.onChange} addTodoProps={this.addTodoItem}/>
      <input type="submit" className="input-submit" placeholder="Submit"/>
    </form>)
  }
}

export default InputTodo
