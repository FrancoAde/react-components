//Componente con estado

import React, { Component } from 'react'
import CoursesList from './CoursesList'
import CourseAddForm from './CourseAddForm'
import PropTypes from 'prop-types'

class App extends Component{
    constructor(...props){
        super(...props)
        this.state={
            courses: [
                {id:1, name:'React desde cero',teacher:'Lucas Vazquez'},
                {id:2, name:'JavaScript avanzado', teacher:'Sergi Roberto'}
            ]
        }
        
        this.handleOnAddCourse = this.handleOnAddCourse.bind(this)

    }
    
    handleOnAddCourse(event){
        event.preventDefault()

        let form= event.target      
        let course= {
            id : form.id.value,
            name : form.name.value ? form.name.value: App.defaultProps.name,
            teacher : form.teacher.value ? form.teacher.value : App.defaultProps.teacher

        }

        this.setState({
            courses: this.state.courses.concat(course)
        })
        
        form.reset()
    }

    render(){
        return(
            <div>
                <CourseAddForm onAddCourse={this.handleOnAddCourse}/>
                <CoursesList courses = {this.state.courses}/>
            </div>
        )
    }
}

App.propTypes ={
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired
}

App.defaultProps={
    name: 'Curso Desconocido',
    teacher: 'Profesor No Asignado'
}

export default App