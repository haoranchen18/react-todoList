import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo({addTodo}) {
    const [title, setTitle] = useState('')
    
    // 显示 addtodo box中的字
    function onChange(e) {
        setTitle(e.target.value)
    }
    
    function onSubmit(e) {
        e.preventDefault();
        addTodo(title)
        // submit之后 title里面就没有东西了
        setTitle('')
    }

    return (
        <form style={{display: 'flex'}} onSubmit={onSubmit}>
            <input 
                type="text"
                name="title" 
                style={{flex: '10', padding: '5px'}} 
                placeholder="Add Todo ..."
                value={title}
                onChange={onChange}
            />
            <input 
                type="submit" 
                value="Submit" 
                className="btn" 
                style={{flex: '1'}} />
        </form>
    )
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
