import { createStore } from 'redux'
import {BasicRequest} from './Rest/BasicRequest'
import PropTypes from 'prop-types'

//Data de la app
const initialState = {
    user: {},
    token:{},
    isauth:false,
    menu:['1','2']
}

//static propTypes ={user:PropTypes.object}

const reducer = (state = initialState, action) => {
 
	console.log("initiaState>>")
    console.log(state)

    console.log("action>>")
    console.log(action)

    
    switch(action.type){
        case "LOGIN_USER":
            console.log('LOGIN_USER')
             console.log(action.user)

         if(action.user.isAuth){

            return { 
                ...state, 
                user:action.user,
                token:action.user.token,
                menu:['1','2','3'],
                isauth:true                
               }
         }


        break;
        case "ACTUALIZA_MENU":
            console.log("ACTUALIZA_MENU")

            console.log(action.menu)
            return { 
                ...state, 
                menu:action.menu,
                isauth:true                
               }

        break;
  
        default:

            return state
    }
    

	return state
}

export default createStore(reducer)