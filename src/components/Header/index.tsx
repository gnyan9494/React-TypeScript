/*tslint:disable*/
import * as React from 'react'
import  Autosuggest  from 'react-autosuggest'

import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
import { uniqueSkillList, uniqueManagerList } from '../../staticData/cardData'

import { headerStyles } from './styles'

// use react-bootstrap package instead of node_modules

interface IHeaderProps {
  filter (event: any): any
}

interface IState {
  type: string
}

export class Header extends React.Component<IHeaderProps, IState> {


  public change = (event:any) => {
    const { filter } = this.props
    filter(event.target.value)
  }

    public render() {
      return (
    <nav className='navbar navbar-inverse' {...headerStyles}>
      <div className='container-fluid'>
        <div className='navbar-header'>
            <a className='navbar-brand' href='#'>
                <span className='ggkColor'>GGK</span> <span className='techColor'>TECH</span>
            </a>
        </div>
        <form className='navbar-form navbar-left locationDropdown'>
            <div className='form-group'>
                <select className='form-control' onChange={this.change} >
                  <option value = 'All'>All</option>
                  <option value = 'Uppal'>Uppal</option>
                  <option value = 'Waverock'>Waverock</option>
                </select>
            </div> 
        </form>
        <form className='navbar-form navbar-left'>
            <div className='form-group'>
            {/* <Autosuggest  /> */}
            </div>
            <button type='submit' className='btn btn-default'>Submit</button>
        </form>
        <form className='navbar-form navbar-left' >
            <div className='form-group'>
              <input type='text' className='form-control' placeholder='Search by technology'/>
            </div>
            <button type='submit' className='btn btn-default'>Submit</button>
        </form>
        <ul className='nav navbar-nav navbar-right'>
          <li><a href='#' className='btn' data-toggle='modal' data-target='#loginModal'>
          <span className='glyphicon glyphicon-log-in'/>  L O G I N</a></li>
        </ul>
      </div>
    </nav>
      )
    }
}

