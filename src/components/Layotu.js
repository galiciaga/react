import React,{Component} from 'react'
import Menu from './Menu'

 class Layout extends Component {

    render(){

        return(
              <div className="contendor-layout">
              <div className="columns">
              <div className="column is-full"><Menu/></div>
              </div>
              <div className="columns">
              <div className="column is-one-fifth">
               Menu
             </div>
              <div className="column is-four-fifths">
              contenido
              </div>
              </div>
              </div>

            )
    }

}

export default Layout