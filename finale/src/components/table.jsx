import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {

      //Rename students to area
      students: [
        { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com', update: '342,456' },
        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com', update: '342,456' },
        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com', update: '342,456' },
        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com', update: '342,456' }
      ]
    }
  }

  //Function for displaying data in rows
  renderTableData() {

    //Iterate over array of area objects to display information 
    return this.state.students.map((student, index) => {

      //Grab name of keys from area object 
      let col = Object.keys(student)

      //Using object destructuring to extract keys from array of objects and assign the values to local variables
      // const { id, name, age, email, update } = student //object destructuring for table data
      return (
        <tr key={student.id}>
          {col.map((val, index) => {
            return <td key={index}>{student[col[index]]}</td>
          })}
        </tr>
      )
    })
  }

  //Display table header
  renderTableHeader() {

    //Get keys from area array
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  render() {
    return (
      <div>
        <h1>Test Table</h1>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;