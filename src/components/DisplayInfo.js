import React from "react";

class DisplayInfo extends React.Component{
    render(){
        //prop 
        const {listUsers}= this.props
        return(
            <div>
                {listUsers.map(a=>{
                    return(
                        <div key={a.id}>
                        <div> Hello {a.name}</div>
                        <div> I'm {a.age}</div>
                        <hr/>
                    </div>
                    )
                })}
               
            </div>
        )
    }
}

export default DisplayInfo