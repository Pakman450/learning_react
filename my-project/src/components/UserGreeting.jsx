import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

  render() {

    // this is a short ciruit approach
    return this.state.isLoggedIn && <div>Welcome Vishws</div>

    // //This is the ternary operator
    // //much more elegant
    // //If true, it will return the first one
    // //If false, it will return the second one.
    // return(
    //     this.state.isLoggedIn ? 
    //     <div>Welcome Vishwas</div>:
    //     <div>Welcome Guest</div>
          
    // )

    //This is the element variable approach
    //more elegant
    //but there is a better way 
    // let message
    // if (this.state.isLoggedIn){
    //     message = "Welcome Vishwas"
    // }else{
    //     message = "Welcome Guest"
    // }
    // return <div>{message}</div>


    //If-else conditioning (not recommended. It can be shorter )
    //Can you not use if else in th return?
    //You cannot because jsx does not allow that
    // if (this.state.isLoggedIn) {
    //     return(            
    //         <div>
    //         Welcome Vishwas
    //         </div>
    //         )
    // }else{
    //     return(            
    //         <div>
    //         Welcome Guest 
    //         </div>
    //         )  
    // }

    



    // return (
    //     <div>      
    //         <div>
    //         Welcome Vishwas
    //         </div>
    //         <div>
    //         Welcome Guest
    //         </div>
    //     </div>
    // )
  }
}

export default UserGreeting