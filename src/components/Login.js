import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {BasicRequest} from '../Rest/BasicRequest'

export class Login extends Component {

		state ={
		inputUser:'',
		inputPassword:''
	}

		//static propTypes ={user:PropTypes.object}


	_handleSubmit = (e) => {
	  e.preventDefault()
        const user= {userName:this.state.inputUser,userPassword:this.state.inputPassword}
		this._handleLogin({user})
	}

	_handleChangeUser = (e) =>{
      this.setState({inputUser:e.target.value})
	}

	_handleChangePass = (e) => {
      this.setState({inputPassword:e.target.value})
	}

	
 
    
	 _handleLogin = ({ user }) => {
		BasicRequest("REQUEST_LOGIN","http://localhost:3000/api/user",
		        {user: user.userName,pwd: user.userPassword,token: false}).then(data => {
					this.props.loginUser(data)
				  })

		

		}

	render() {

		return (
			<div className="contenedor-login">
			<form onSubmit={this._handleSubmit}>
			<h1 className="title">Iniciar Sesion</h1>
			<div className="field">
			
				<p className="control has-icons-left has-icons-right">
					<input onChange={this._handleChangeUser} 
					       className="input" 
						   type="text" 
						   placeholder="Usuario"/>
						<span className="icon is-small is-left">
							<i className="fas fa-envelope"></i>
						</span>
						<span className="icon is-small is-right">
							<i className="fas fa-check"></i>
						</span>
                  </p>
             </div>
				<div className="field">
					<p className="control has-icons-left">
						<input onChange={this._handleChangePass} className="input" type="password" placeholder="Password"/>
							<span className="icon is-small is-left">
								<i className="fas fa-lock"></i>
							</span>
                    </p>
                </div>
					<div className="field">
						<p className="control">
							<button className="button is-success">
								Login
                            </button>
						</p>
					</div>
		</form>	
			</div>
		
			)
	}

}

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
	)(Login)