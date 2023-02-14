import React from "react";

class DisplayInfo extends React.Component{
    render(){
        //prop 
        console.log(this.props)
        const {age,name}= this.props
        return(
            <div>
                <div> Hello {name}</div>
                <div> I'm {age}</div>
            </div>
        )
    }
}

export default DisplayInfo