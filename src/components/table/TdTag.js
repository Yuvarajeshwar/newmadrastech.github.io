import React, {Component, useContext} from "react";
// import { Link, Route } from "react-router-dom/cjs/react-router-dom.min";
import AnchorTag from "../Anchortag";
import InvoiceForm from "../customer/InvoiceForm";
import InvoiceView from "../customer/InvoiceView";
import { Link  } from "react-router-dom";

class TdTag extends Component{
    constructor(props){
        super(props);
        console.log(this.props)
    }

    // navigateee() {
    //     // const navigate = useNavigate();
    //     // navigate(`${this.props.linkPrefix}view/${this.props.value}`,{ state: { id: this.props.inValue.id, color: this.props.inValue.customer } })
        
    //     <Link to={{}}`${this.props.linkPrefix}view/${this.props.value}`,{ state: { id: this.props.inValue.id, color: this.props.inValue.customer } })
    // }


    render(){
        if(this.props.isLinked=="false"){
            return <td scope="col">{this.props.value}</td>
        }
        else{
            return (
            <td scope="col">
                {/* <AnchorTag link={c} className="" inValue={this.props.inValue} itemValue="View"/> */}
                {/* <AnchorTag link={`${this.props.linkPrefix}edit/${this.props.value}`} className="ml-2" itemValue="Edit"/> */}
                {/* <a onClick={this.navigateee()}> View</a> */}
                <Link to={{
                    pathname: `${this.props.linkPrefix}view/${this.props.value}`,
                    state: { data: this.props.inValue }
                    }} >View</Link>
            </td>
            )
        }}
    }


export default TdTag;