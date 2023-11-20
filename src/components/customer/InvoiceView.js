import React, {Component} from "react";
import './InvoiceView.scss'
import ReactToPrint from "react-to-print";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

class InvoiceView extends Component{
    
    constructor(props){
        super(props);
        // const location = useLocation();
        // const {data} = location.state
        // console.log(data)
        // console.log(customer)
        console.log(this.props.location.state)
    }
    render(){
        return(
            <React.Fragment>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
            <div class="container">
            <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="invoice-title">
                                    <h4 class="float-end font-size-15">Invoice #DS0204 <span class="badge bg-success font-size-12 ms-2">Paid</span></h4>
                                    <div class="mb-4">
                                    <h2 class="mb-1 text-muted">NMT</h2>
                                    </div>
                                    <div class="text-muted">
                                        <p class="mb-1">Chennai, TamilNadu</p>
                                        <p class="mb-1"><i class="uil uil-envelope-alt me-1"></i> xyz@987.com</p>
                                        <p><i class="uil uil-phone me-1"></i> 012-345-6789</p>
                                    </div>
                                </div>
            
                                {/* <hr class="my-4"> */}
            
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="text-muted">
                                            <h5 class="font-size-16 mb-3">Billed To:</h5>
                                            <h5 class="font-size-15 mb-2">Preston Miller</h5>
                                            <p class="mb-1">4068 Post Avenue Newfolden, MN 56738</p>
                                            <p class="mb-1">PrestonMiller@armyspy.com</p>
                                            <p>001-234-5678</p>
                                        </div>
                                    </div>
                                    
                                    <div class="col-sm-6">
                                        <div class="text-muted text-sm-end">
                                            <div>
                                                <h5 class="font-size-15 mb-1">Invoice No:</h5>
                                                <p>#DZ0112</p>
                                            </div>
                                            <div class="mt-4">
                                                <h5 class="font-size-15 mb-1">Invoice Date:</h5>
                                                <p>12 Oct, 2020</p>
                                            </div>
                                            <div class="mt-4">
                                                <h5 class="font-size-15 mb-1">Order No:</h5>
                                                <p>#1123456</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                {/* </hr> */}
                                
                                <div class="py-2">
                                    <h5 class="font-size-15">Order Summary</h5>
            
                                    <div class="table-responsive">
                                        <table class="table align-middle table-nowrap table-centered mb-0">
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Item</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th class="text-end">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">01</th>
                                                    <td>
                                                        <div>
                                                            <h5 class="text-truncate font-size-14 mb-1">Metallic Plate</h5>
                                                            <p class="text-muted mb-0">Steel plate</p>
                                                        </div>
                                                    </td>
                                                    <td>$ 245.50</td>
                                                    <td>1</td>
                                                    <td class="text-end">$ 245.50</td>
                                                </tr>
                                                
                                                <tr>
                                                    <th scope="row">02</th>
                                                    <td>
                                                        <div>
                                                            <h5 class="text-truncate font-size-14 mb-1">Cable Assembly</h5>
                                                            <p class="text-muted mb-0">Cable Accessories</p>
                                                        </div>
                                                    </td>
                                                    <td>$ 245.50</td>
                                                    <td>2</td>
                                                    <td class="text-end">$49.00</td>
                                                </tr>
                                                
                                                <tr>
                                                    <th scope="row" colspan="4" class="text-end">Sub Total</th>
                                                    <td class="text-end">$732.50</td>
                                                </tr>
                                                
                                                <tr>
                                                    <th scope="row" colspan="4" class="border-0 text-end">
                                                        Discount :</th>
                                                    <td class="border-0 text-end">- $25.50</td>
                                                </tr>
                                                
                                                <tr>
                                                    <th scope="row" colspan="4" class="border-0 text-end">
                                                        Shipping Charge :</th>
                                                    <td class="border-0 text-end">$20.00</td>
                                                </tr>
                                                
                                                <tr>
                                                    <th scope="row" colspan="4" class="border-0 text-end">
                                                        Tax</th>
                                                    <td class="border-0 text-end">$12.00</td>
                                                </tr>
                                                
                                                <tr>
                                                    <th scope="row" colspan="4" class="border-0 text-end">Total</th>
                                                    <td class="border-0 text-end"><h4 class="m-0 fw-semibold">$739.00</h4></td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="d-print-none mt-4">
                                        <div class="float-end">
                                            <a href="javascript:window.print()" class="btn btn-success me-1"><i class="fa fa-print"></i></a>
                                            <a href="#" class="btn btn-primary w-md">Send</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
}
}


export default InvoiceView;