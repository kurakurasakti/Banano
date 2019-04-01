import React from 'react'
import Carousel from './carousel1'
import { connect } from 'react-redux';



class Home1 extends React.Component{
    render(){
        return(
            <div>
                {/* <Carousel /> */}
                <div className="container" 
                style={{maxWidth :"1120px",
                        marginLeft : "auto",
                        marginRight:"auto",
                        marginTop:"0px",
                        marginBottom:"0px",
                        width:"90%"}}>
                        {/* ================mulai product details==================== */}
                        <div>
                            tai lu
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

if (document.getElementById('Home1')) {
    ReactDOM.render(<Home1 />, document.getElementById('Home1'));
}
export default connect(mapStateToProps)(Home1)


