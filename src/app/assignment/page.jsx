import React from 'react'

const student={

    name:"obed",
    class:"jss3",
    session:"prevYear/nextYear",
    gender:"male"
}

export default function Assignemnt() {
  return (
    <div>
      <h1>{student.name}</h1>
      <h1>{student.class}</h1>
      <h1>{student.session}</h1>
      <h1>{student.gender}</h1>
    </div>
  )
}
