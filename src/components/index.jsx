//Componente con estado

import React, { Component } from 'react'
import CoursesList from './CoursesList'
import CourseAddForm from './CourseAddForm'

import PropTypes from 'prop-types'
import uid from 'uid'
import $ from 'jquery'

//import { courses } from '../data/courses.js'
import {courses} from  '../data/courses.json'


class App extends Component {
    constructor(...props) {
        super(...props)
        this.state= {
            courses: []
        }
        
        this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
        this.fetchData = this.fetchData.bind(this)
        this.resetData = this.resetData.bind(this)

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

    fetchData(){
        //setTimeout( ()=> this.setState({courses:courses}),3000)

        //agregando JQuery
        $('#root').fadeOut(3000, () => this.setState({courses: courses}))
        .fadeIn()
    }

    resetData(){
        
        //this.setState({ courses :[]})
        $('#root').fadeOut(3000, () => this.setState({courses: []}))
        .fadeIn()

    }


    //Ejecuta despues del primer render, sin presionar el boton Cargar Cursos
    componentDidMount() {
        this.fetchData()
    }

    render(){
        console.log(this.props);
        if(!this.state.courses.length){
            return(
                <div>
                    <p>No hay cursos :( </p>
                    <button onClick={this.fetchData}> Cargar Cursos</button>
                </div>
            )
        }else{
            return(
                <div>
                    <CourseAddForm onAddCourse={this.handleOnAddCourse}/>
                    <CoursesList courses = {this.state.courses}/>
                    <button onClick={this.resetData}>Borrar Cursos</button>
                </div>
            )
        }        
    }
}


App.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired
}

App.defaultProps = {
    id: uid(10),
    name: "Curso Desconocido",
    teacher: 'Profesor No Asignado'
}

export default App