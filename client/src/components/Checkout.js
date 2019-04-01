import React, { Component } from 'react'
import { connect } from 'react-redux';
import Axios from 'axios'
import {urlApi} from '../support/urlApi';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class Checkout extends React.Component {
  // ======================Kumpulan function==================================
  state ={
    rows: [],

  }
  
  componentDidMount(){
    this.getDataApi()
  }
  onBtnCheckout= () =>{

  }
  
  renderJsx = () =>{
      return(
        <TableBody>
            <TableRow >
              {/* nama IMG + product + qty */}
              <TableCell>
                
              </TableCell>
              {/* price */}
              <TableCell align="right"></TableCell>
              
            </TableRow>
        </TableBody>
      )
  }
  onBtnDeleteCart = (id) =>{
      Axios.delete(urlApi + '/transactionDetail/'+id)
      .then((res) => {
        this.getDataApi()
      }).catch((err) => {
        console.log(err)
      });
  }

  getDataApi=(userId) =>{
    Axios.get(urlApi + '/transactionDetail?userId='+ userId)
    .then((res) => {
      this.setState({rows : res.data})
    }).catch((err) => {
      console.log(err)
    });
  }
  //============================END===============================
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className='col-md-6 mt-3'>
                <h2> Billing Details</h2>
                <Form>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label>FIRST NAME</Label>
                        <Input type="NAME" name="email" id="exampleEmail" placeholder="" />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>LAST NAME</Label>
                        <Input type="NAME"  id="exampleEmail" placeholder="" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="exampleEmail">EMAIL ADDRESS</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleAddress">STREET ADDRESS</Label>
                    <Input type="text" name="address" id="exampleAddress" placeholder="House number and street name"/>
                    <Input className="mt-4" type="text" name="address2" id="exampleAddress2" placeholder="Apartment, suite, unit etc. (optional)"/>
                  </FormGroup>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleCity">City</Label>
                        <Input type="text" name="city" id="exampleCity"/>
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="exampleState">State</Label>
                        <Input type="text" name="state" id="exampleState"/>
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Label for="exampleZip">Zip</Label>
                        <Input type="text" name="zip" id="exampleZip"/>
                      </FormGroup>  
                    </Col>
                  </Row>
                </Form>
            </div>
            <div className='col-md-6 mt-3'>
                <h2>Your Order</h2>
                <Paper>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Price</TableCell>
                      </TableRow>
                    </TableHead>
                    
                  </Table>
                </Paper>
            </div>
        </div>
        

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    //user : state.user.role
    kucing : state.user.id
  }
}

export default connect(mapStateToProps)(Checkout)
