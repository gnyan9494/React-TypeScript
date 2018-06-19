import * as React from 'react'
import { Header } from '../Header'
// import { Listings } from '../Listings'
// import bgimage from '../assets/images'
import './styles.css'

interface IState {
  type: string
}

export class App extends React.Component<{}, IState> {
  constructor (props: any) {
    super(props)
    this.changeType = this.changeType.bind(this)
    this.state = {
      type: 'all'
    }
  }

  public changeType = (data: any) => {
    this.setState({type: data})
  }

  public render() {
    return (
    <body>
      <Header filter={this.changeType}/>
      {/* <Listings type={this.state.type}/> */}
    </body>
    )
  }
}




// <div className='modal fade' id='loginModal' role='dialog'>
//     <div className='modal-dialog'>
//         <div className='modal-content'>
//             <div className='modal-header'>
//               <button type='button' className='close' data-dismiss='modal'>×</button>
//               <h4><span><i className='fa fa-sign-in loginColorSize'></i></span>  L O G I N </h4>
//             </div>
//             <div className='modal-body'>
//               <form role='form' id='myform2' action='' method='post'>
//                 <p className='asteriskAlign'><span className='asteriskColor'>*</span> indicates mandatory fields</p>
//                 <div className='form-group'>
//                   <label for='usrname'><span className='glyphicon glyphicon-envelope'></span> Email Id <span className='asteriskColor'>*</span></label>
//                   <input type='text' className='form-control' id='email' name='email' placeholder='Enter email'>
//                 </div>
//                 <div className='form-group'>
//                   <label for='psw'><span className='glyphicon glyphicon-lock'></span> Password <span className='asteriskColor'>*</span></label>
//                   <input type='password' className='form-control' id='psw' name='psw' placeholder='Enter password'>
//                 </div>
               
//                 <button type='submit' className='btn-loginModal btn-block'>Submit 
//                   <span className='glyphicon glyphicon-ok'></span>
//                 </button>
//               </form><br>
//              <p align='right'><a href='#'>Forgotten your password?</a></p>
//             </div>
//             <div className='modal-footer'>
//               <button type='submit' className='btn-loginModal btn-danger btn-default pull-right' data-dismiss='modal'>
//                 <span className='glyphicon glyphicon-remove'></span> Cancel
//               </button>
//             </div>
//         </div>
//     </div>
// </div>