import React, { Component } from 'react';
import "./Todo.css";
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, task: this.props.task };
        this.handleRemove = this.handleRemove.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleRemove() {
        this.props.removeTodo(this.props.id);
    }
    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEditing: false });
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="Todo-edit-form">
                    <form onSubmit={this.handleUpdate}>
                        <input type='text' value={this.state.task} name="task" onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            );
        }
        else {
            result = (
                <div className="Todo">
                    <button onClick={this.handleRemove}>X</button>
                    <button onClick={() => this.setState({ isEditing: !this.state.isEditing })}>EDIT</button>
                    <li className={this.props.completed ? "Todo completed" : "Todo task"} onClick={() => this.props.toggleTodo(this.props.id)} >
                        {this.props.task}
                    </li>
                </div>
            );
        }
        return result;
    }
}

export default Todo;