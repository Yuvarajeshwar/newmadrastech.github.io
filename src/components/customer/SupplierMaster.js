import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";
import Table from "../../components/table/Table";
import InputFormGroup from "../input/InputFormGroup";


class SupplierMaster extends Component{
    constructor(props){
        super(props);
        this.columnList = ["ID", "Company Name", "Address", "Contact Number", "Location", "GSTIN", "Action"];
        this.tableData = [
            {"id": 1, "company": "Enterprise A", "address": "Chennai, Tamil Nadu", "contact": "919191444", "location": "IND", "GSTIN": "33AAEFEFWEREWR"},
            {"id": 2, "company": "Enterprise B", "address": "Chennai, Tamil Nadu", "contact": "919191444", "location": "IND", "GSTIN": "33AAEFEFWEREWR"},
            {"id": 3, "company": "Enterprise C", "address": "Chennai, Tamil Nadu", "contact": "919191444", "location": "IND", "GSTIN": "33AAEFEFWEREWR"},
            {"id": 4, "company": "Enterprise D", "address": "Chennai, Tamil Nadu", "contact": "919191444", "location": "IND", "GSTIN": "33AAEFEFWEREWR"},
        ]
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <AnchorTag link="/app/shop/invoice/create" className="btn btn-sm btn-warning float-right" itemValue="Create Invocie"></AnchorTag>
                    <h4>Supplier Master List</h4>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                        <p><b>Search Invoice</b></p>
                    </div>
                    <div className="col-2">
                        <InputFormGroup labelClassName="sr-only" inputClassName="form-control form-control-sm" placeholder="Customer Name"/>
                    </div>
                    <div className="col-2">
                        <InputFormGroup labelClassName="sr-only" inputClassName="form-control form-control-sm" placeholder="Invoice ID"/>
                    </div>
                    <div className="col-2">
                        <div className="form-group">
                            <input type="submit" className="btn btn-sm btn-success" value="Search"/>
                        </div>
                    </div>
                </div>
                <Table className="table table-striped" columnList={this.columnList} tableData={this.tableData} actionLinkPrefix=""></Table>
            </div>
        ) 
    }
}

export default SupplierMaster;