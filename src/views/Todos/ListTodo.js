import React from 'react';
import './ListTodo.scss';
import './AddTodo'
import AddToDo from './AddTodo';
import { toast } from 'react-toastify';
import Color from '../HOC/Color';

class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Fixing bug' }
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success('Add success');
    }
    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodo
        })
        toast.success('Delete success');
    }
    handleEditTodo = (todo) => {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodos];
            let ObjIndex = listTodoCopy.findIndex(item => item.id === todo.id);
            listTodoCopy[ObjIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodoCopy,
                editTodo: {}
            })
            toast.success('Update success');
            return;
        }
        //edit
        this.setState({
            editTodo: todo
        })
    }
    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('check isEmptyObj: ', isEmptyObj);
        return (
            <>
                <p>Simple TODO app with react.js</p>
                <div className='list-todo-container'>
                    <AddToDo addNewTodo={this.addNewTodo} />
                    <div className='list-todo-content'>
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className='todo-child' key={item.id}>
                                        {isEmptyObj === true ?
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {
                                                    editTodo.id === item.id ?
                                                        <span>{index + 1} - <input value={editTodo.title} onChange={(event) => this.handleOnChangeEditTodo(event)} /></span>
                                                        :
                                                        <span>{index + 1} - {item.title}</span>
                                                }
                                            </>
                                        }
                                        <button className='edit' onClick={() => this.handleEditTodo(item)}>
                                            {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}

                                        </button>
                                        <button className='delete' onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </>

        )
    }
}

//export default ListTodo;
export default Color(ListTodo);