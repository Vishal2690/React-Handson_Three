import React, { Component } from 'react'
import './SecondPage.css'
// import ThirdHandsonCompo from './ThirdHandsonCompo';


class SecondPage extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>

                <div className="hideCssAdd">
                    {this.props.value.map((item, index) => {
                        return (

                            <span className="hideCssAd" key={index}> Name : {item.name} || Department : {item.Department} || Rating : {item.Rating}</span>

                        );
                    })}
                </div>

                <div id="addBtn">
                    <button id='color' onClick={this.props.varFun} > Go Back</button>
                </div>


            </div>


        )
    }
}

export default SecondPage