let nextTodoId = 0


export const addTodo =(text)=>({
    //action을 store에 저장하는데 dispatcher을 거친다.(action->dispatcher->store)
    type : 'ADD_TODO',
    id : text
})

export const toggleTodo = (index) =>{
    return {
         
    type : 'TOGGLE',
    index : index

    }
}