import React, { Component } from 'react'
import Axios from 'axios';
import { connect } from 'react-redux'
import { urlApi } from '../support/urlApi';
import { Button } from 'reactstrap';

class ProductDetail extends React.Component {

    state = {product : {}}
    
    componentDidMount(){
        this.getDataApi();
        alert('props kucing'+this.props.kucing)
    }

    getDataApi = () =>{
        var idUrl = this.props.match.params.id
        Axios.get(urlApi+'/products/'+idUrl)
        .then((res) => {
             this.setState({product : res.data})
        }).catch((err) => {
            console.log(err)
        });
    }

    qtyValidation =() => {
        var qty = this.refs.inputQty.value
        if(qty < 1) {
            this.refs.inputQty.value = 1
        }
    }

    onBtnAddToCart=()=>{
        var {discount, deskripsi, harga, id} = this.state.product
        var totalPrice = harga - (harga*(discount/100))
        var userId = this.props.tai
        var productId = id
        var qty = this.refs.inputQty.value
        var isCart = "yes"

        var addCart = {
            userId,
            productId,
            qty,
            totalPrice,
            isCart
        }
        alert(addCart)
        Axios.post(urlApi + '/transactionDetail', addCart)
        .then((res) => {
            this.getDataApi()
            alert('ayam')
        }).catch((err) => {
            console.log(err);
        });
    }

    render(){
    var {nama, img, discount, deskripsi, harga, id} = this.state.product
        return(
            <div className="container" style={{marginLeft : "5%", marginRight : "5%", fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}} >
                <div className="row">
                    {/* ================Ini Product Detail========================== */}
                    <div className="col-md-5 mt-3" style={{borderBottom:"1px solid #cccccc", paddingBottom:"30px"}}>
                        <h1 style={{fontWeight:"800"}}>{nama}</h1>
                        <h3 style={{fontWeight:"600"}}>IDR {harga}</h3>
                        <div style={{fontSize:"20px", lineHeight: "27px"}}>
                            {deskripsi}
                        </div>
                        <div className="mt-3">
                            <input  type="button" value="+ Add To Cart" onClick={this.onBtnAddToCart}
                            style={{borderRadius:"0px",
                                    background:"none",
                                    border:"2px solid #a69b97",
                                    color: "#a69b97",
                                    fontSize:"16px",
                                    fontWeight:"670",
                                    letterSpacing : "1px",
                                    margin:" 0 1px 0 0",
                                    padding:"12px 21px 12px 21px",
                                    textTransform:"uppercase",
                                    transition:"all .4s"}}
                            ></input>
                            <input className="ml-2" type="number" min={1} ref={this.inputQty}
                            style={{
                                borderRadius:"0px",
                                background:"none",
                                border:"2px solid #a69b97",
                                color: "#a69b97",
                                fontSize:"16px",
                                fontWeight:"670",
                                padding:"12px 6px 12px 6px",
                                width:"60px"
                            }}/>

                        </div>
                    </div>
                    {/* =================Image Carousel=================== */}
                    <div className="col-md-7 mt-3 mx-auto" style={{alignContent:"center", position:"relative"}}>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <img className="d-block w-100" src={img} alt="First slide" />
                              </div>
                              <div className="carousel-item">
                                <img className="d-block w-100" src="..." alt="Second slide" />
                              </div>
                              <div className="carousel-item">
                                <img className="d-block w-100" src="..." alt="Third slide" />
                              </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true" />
                              <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true" />
                              <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        kucing : state.user.id
    }
}

export default connect(mapStateToProps)(ProductDetail);