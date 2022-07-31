import React from "react";
class Image extends React.Component{
    render(){
        return(
            <img src={this.props.src}></img>
        )
    }
}

export default Image