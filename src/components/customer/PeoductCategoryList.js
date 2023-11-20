import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";
import Table from "../../components/table/Table";


class ProductCategoryList extends Component{
    constructor(props){
        super(props);
        this.columnList = ["ID","Product Code", "Product Name", "Product Group", "Unit Of Measurement", "Action"];
        this.tableData = [
            {"id": 1, "code": "10000000001", "name": "Cable Assembly", "prod_group": "Cable Accessories", "uom": "SET"},
            {"id": 2,  "code": "10000000002", "name": "Metallic Plate", "prod_group": "Steel plate", "uom": "M"},
            {"id": 3,  "code": "10000000003", "name": "Valve ball", "prod_group": "Ball Valve", "uom": "EA"},
            {"id": 4, "code": "10000000004", "name": "Door handle", "prod_group": "Handle", "uom": "NO"}
        ]
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <AnchorTag link="/app/shop/product-category/create" className="btn btn-warning float-right" itemValue="Create Category"></AnchorTag>
                    <h4>Product Category List</h4>
                </div>
                <Table className="table table-striped" columnList={this.columnList} tableData={this.tableData} actionLinkPrefix=""></Table>
            </div>
        ) 
    }
}

export default ProductCategoryList;