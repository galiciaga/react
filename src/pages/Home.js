import React,{Component} from 'react'
import  Login  from '../components/Login'
import Layout  from '../components/Layotu'
import {connect} from 'react-redux'

export class Home extends Component{




    render(){
        console.log(this.props.user.isAuth) 

        return(<div className="contendor">
         

        { this.props.user.isAuth
		       ?  <Layout/>
		        : <Login/> 
				}

        </div>)
    }
}

/*
{ this.props.user.isAuth
		       ?  <Layout/>
		        : <Login/> 
				}
*/


const mapStateToProps = state => {
  return { user: state.user };
}
 
  
  
  const mapDispatchToProps = dispatch => ({
    loginUser(user){
      dispatch({
        type:"LOGIN_USER",
        user
      })
    }
  })
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)