import React,{Component} from 'react'
import {connect} from 'react-redux'
import {BasicRequest} from '../Rest/BasicRequest'

export class Menu extends Component{

  constructor(props){
    super(props)
    console.log(this.props.token)


    BasicRequest("REQUEST_MENU","http://localhost:3000/api/menu",{token:this.props.token})
                        .then(menu => {
                          this.props.asignaMenu(menu)
				        })


  }

  render(){

    console.log("render..")
    console.log(this.props.menu)

    const menuUser =this.props.menu

    return (   <nav className="navbar is-dark">
    <div className="navbar-brand">
      <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  
    <div id="navbarExampleTransparentExample" className="navbar-menu">
	
      <div className="navbar-start">
        <a className="navbar-item" href="https://bulma.io/">
          Home
        </a>

        <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
          Docs
        </a>
        <div className="navbar-dropdown is-boxed">
      {
        
      menuUser.map((m,i)=>(
        
        <a key={i} className="navbar-item" href={m.ruta}>
          <h1>{m.titulo}</h1>
         </a>
      ))
 
      }
        </div>
        </div>


      </div>
  
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">

            <p className="control">
              <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.1/bulma-0.9.1.zip">
                <span className="icon">
                  <i className="fas fa-download"></i>
                </span>
                <span>Salir</span>
              </a>
            </p>
          </div>
        </div>
      </div>
	  
    </div>
  </nav>)
}
}

const mapStateToProps= state =>({
  token:state.token,
  menu:state.menu
})

const mapDispatchProps = dispatch =>({
	asignaMenu(menu){
		dispatch({
			type:"ACTUALIZA_MENU",
			menu
		})
	}
})


export default connect(mapStateToProps,mapDispatchProps)(Menu)