//Componente sin estado

import React from 'react'

const CourseAddForm = props => (
    <form onSubmit={props.onAddCourse}>
        <input type="text" placeholder="Nombre del Curso" name="name" />
        <input type="text" placeholder="Profesor" name="teacher"/>
        <input type="hidden" name="id" value={Math.floor(Math.random()*100)}/>
        <input type="submit" value="Guardars"/>
    </form>
)

export default CourseAddForm