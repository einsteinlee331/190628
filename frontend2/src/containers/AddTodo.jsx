import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


class AddTodo extends Component{

    render(){
        return (
            <div>
              <form onSubmit={this.createTodo}>
                <input ref={this.inputNode} />
                <button type="submit">
                  Add Todo
                </button>
              </form>
            </div>
          )
    }
    createTodo=(e)=>{
        e.preventDefault()
        const input = this.input
        if (!input.value.trim()) {
            return
        }
        this.props.dispatch(addTodo(input.value))
        input.value = ''
    }
    inputNode=(node)=>{
        this.input = node
    }

}

AddTodo = connect()(AddTodo)

export default AddTodo