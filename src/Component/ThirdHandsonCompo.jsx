
import React, { Component } from 'react'
import SecondPage from './SecondPage'
import './ThirdHan.css'



class ThirdHandsonCompo extends Component {
    state = {
        name: "",
        Department: "",
        Rating: "",
        clicked: true,
        data: []
    }
    myFun = () => {
        this.setState({clicked: !this.clicked})
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        this.setState({ [e.target.Department]: e.target.value })
        this.setState({ [e.target.Rating]: e.target.value })
    }

    formSubmit = () => {
        const ObjData = {
            name: this.state.name,
            Department: this.state.Department,
            Rating: this.state.Rating
        }
        this.state.data.push(ObjData);
        this.setState({
            data: this.state.data,
            clicked: false
        })
    }
    render() {

        return (
            <div>
                {this.state.clicked ?
                    <div>
                        <h1>EMPLOYEE FEEDBACK FORM</h1>
                        <div className="listOfAdding">
                            <form>
                                <label id="size">Name : </label>
                                <input id="moving" type="text" placeholder="Enter Name" name="name" onChange={this.handleChange} />

                                <label>Department : </label>
                                <input id="moving2" type="text" placeholder="Enter Department" name="Department" onChange={this.handleChange} />

                                <label id="size2">Rating : </label>
                                <input id="moving3" type="number" placeholder="Enter Rating" name="Rating" onChange={this.handleChange} />
                            </form>
                        </div>

                        <div className="addBtn">
                            <button type="button" onClick={this.formSubmit}>
                                Submit
                            </button>
                        </div>
                    </div> :


                    <SecondPage value={this.state.data} varFun={ this.myFun} />
                }

            </div>
        )
    }
}

export default ThirdHandsonCompo


