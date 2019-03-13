import React, { Component } from 'react'
import Axios from 'axios';
import { urlApi } from '../support/urlApi';


class ProductDetail extends React.Component {

    state = {product : {}}
    componentDidMount(){
        this.getDataApi();
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
    render() {
    var {nama, img, discount, deskripsi, harga} = this.state.product
      return (
        <div className='container'> 
          <div className='row'>
              <div className='col-md-4'>
              <div className="card" style={{width: '100%'}}>
                  <img src={img} className="card-img-top" alt="..." />
                      <div className="card-body">

                      </div>
                  </div>
              </div>
              <div className='col-md-8'>
                  <h1 style={{color:"#4C4C4C"}}>{nama}</h1>
                  <div style={{backgroundColor: "#D50000",
                              width : "50px",
                              height : "22px",
                              color : "white",
                              textAlign: "center",
                              display:"inline-block"
                              }}>
                      {discount}
                  </div>
                  <span style={{
                      fontSize:"12px",
                      fontWeight: "600",
                      color:"#606060",
                      marginLeft:"10px",
                      textDecoration:"line-trough"

                  }}>Rp {harga}</span>
                  <div style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#FF5722",
                      marginTop : "20px"
                  }}>
                      Rp {harga - (harga*(discount/100))}
                  </div>
                  <div className="row">
                      <div className="col-md-2">
                          <div style={{
                              fontSize: "15px",
                              fontWeight: "700",
                              color: "#4C4C4C",
                              marginTop : "15px"}}>
                              jumlah
                          </div>
                          <input type="number" min={1} className="form-control" style={{
                      width: "60px",
                      marginTop : "15px",
                  }} />
                      </div>
                      <div className="col-md-6">
                          <div style={{
                              fontSize: "15px",
                              fontWeight: "700",
                              color: "#4C4C4C",
                              marginTop : "15px"}}>
                              {/* =============end style=============== */}
                              Catatan untuk penjual
                          </div>
                          {/* =================input text=============== */}
                          <input type='text' style={{marginTop:"15px"}} className="form-control" placeholder="contoh warna dll"></input>
                      </div>
                            
                  </div>
                  <div className="row mt-4">
                      <div className="col-md-8">
                          <p style={{color:"#606060"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                  </div>
                  <div className="row mt-4">
                              <input className="btn border-secondary col-md-2" value="add to wishlist"></input>
                              <input className="btn btn-primary col-md-3" value="buy Now"></input>
                              <input className="btn btn-success col-md-3" value="add to cart"></input>
                            
                  </div>
                            
                            
              </div>

          </div>
        </div>
      )
    }
}


export default ProductDetail
