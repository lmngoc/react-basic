import React from "react";
import { toast } from 'react-toastify';

class AddToDo extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnClikTodo = () => {
        if (!this.state.title) {
            toast.error('missing title');
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className='add-todo'>
                <input type='text' value={title} onChange={(event) => this.handleOnChangeTitle(event)} />
                <button className='add' onClick={() => this.handleOnClikTodo()}>Add</button>
            </div>
        )
    }
}

export default AddToDo;