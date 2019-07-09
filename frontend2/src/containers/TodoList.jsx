import { connect } from 'react-redux'
import React, {Component} from 'react'
import Todo from '../components/Todo'
import { throwStatement } from '@babel/types';
import {toggleTodo} from '../actions/index.jsx'

class TodoList extends Component{
    render(){
        const todoTag = this.props.list.map(
            (today, index) =><Todo key={index}{...todo}
            onClick={
                ()=>this.checkTodo(index)
            }/>
    
            )
            return(
                <ul>
                    {todoTag}
                </ul>
            )
        }
        checkTodo =(index)=>{
            this.props.dispatch(toggleTodo(index))
        }
    
    getVisibleTodos = (todos, filter)=>{
        switch(filter){
            case 'SHOW ALL' : return todos
            case 'SHOW_COMPLETED' : return todos.filter(t=> t.completed)
            case 'SHOW_ACTIVE' : return todos.filter(t=>!t.completed)
            default: throw new Error('Unknown filter:'+ filter)
        }
    }


}

const mapStateToProps = (state)=>{
    return state.todo
}

export default connect(mapStateToProps)(TodoList)