import React,{Component} from 'react';
import UserClass from "./UserClass"

class About extends Component{

    constructor(props){
        super(props)
    }
    componentDidMount(){
      }

    render(){

        return (
            <div><h2>About Us</h2>
            
            <UserClass name={"Meena-1"} contact={"@meenatchid22Class"} location={"Chennai"}/>
            <UserClass name={"Meena-2"} contact={"@meenatchid22Class"} location={"Chennai"}/>
            <UserClass name={"Meena-3"} contact={"@meenatchid22Class"} location={"Chennai"}/>
            </div>
        )
    }
}
    

export default About;