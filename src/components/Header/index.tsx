/*tslint:disable*/
import * as React from 'react'
import   Autosuggest   from 'react-autosuggest'

import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
import { SkillList, ManagerList } from '../../staticData/cardData'

import { headerStyles } from './styles'

// use react-bootstrap package instead of node_modules

interface IHeaderProps {
  filter (v1: string, v2:string, v3: string): any
}

interface IState {
  type: string,
  manValue: string,
  techValue: string,
  techSuggestions: Array<object>
  manSuggestions: Array<object>
}

export class Header extends React.Component<IHeaderProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      type: 'ALL',
      manValue: '',
      techValue: '',
      techSuggestions: [],
      manSuggestions: []
    } 
  }


  onManChange = (event: any, { newValue, method }: any) => {
    this.setState({
      manValue: newValue
    });
  };

  onTechChange = (event: any, { newValue, method }: any) => {
    this.setState({
      techValue: newValue
    });
  };
  
  onTechSuggestionsFetchRequested = ({ value }: any) => {
    this.setState({
      techSuggestions: this.getTechSuggestions(value)
    });
  };

  onManSuggestionsFetchRequested = ({ value }: any) => {
    this.setState({
      manSuggestions: this.getManSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      techSuggestions: [],
      manSuggestions: []
    });
  };

  getLocation = (event: any) => {
    const { filter } = this.props
    const { manValue, techValue } = this.state  
    this.setState({ type: event.target.value})
    filter(event.target.value, techValue, manValue)    
  }

  change = (event:any): any => {
    const { filter } = this.props
    const { type, manValue, techValue } = this.state  
    filter(type, techValue, manValue)
  }

  escapeRegexCharacters = (str: any) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  getManSuggestions = (value: any) => {
    const escapedValue = this.escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') {
      return [];
    }
  
    const regex = new RegExp('^' + escapedValue, 'i');
  
    return ManagerList.filter((language: any) => regex.test(language.name));
  }

  getTechSuggestions = (value: any) => {
    const escapedValue = this.escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') {
      return [];
    }
  
    const regex = new RegExp('^' + escapedValue, 'i');
  
    return SkillList.filter((language: any) => regex.test(language.name));
  }
  
  getTechSuggestionValue = (suggestion: any) => {
    return suggestion.name;
  }

  getManSuggestionValue = (suggestion: any) => {
    return suggestion.name;
  }
  
  renderManSuggestion = (suggestion: any) => {
    return (
      <span>{suggestion.name}</span>
    );
  }

  renderTechSuggestion = (suggestion: any) => {
    return (
      <span>{suggestion.name}</span>
    );
  }

    render() {

      const { manValue, techValue, techSuggestions, manSuggestions } = this.state;
      const techInputProps = {
        placeholder: 'Search by technology',
        value: techValue,
        onChange: this.onTechChange
      };
      const manInputProps = {
        placeholder: 'Search by manager',
        value: manValue,
        onChange: this.onManChange
      };

      return (
    <nav className='navbar navbar-inverse' {...headerStyles}>
      <div className='container-fluid'>
        <div className='navbar-header'>
            <a className='navbar-brand' href='#'>
                <span className='ggkColor'>GGK</span> <span className='techColor'>TECH</span>
            </a>
        </div>
        <div className='navbar-form navbar-left locationDropdown'>
            <div className='form-group'>
                <select className='form-control' onChange={this.getLocation}>
                  <option value = 'All'>All</option>
                  <option value = 'Uppal'>Uppal</option>
                  <option value = 'Waverock'>Waverock</option>
                </select>
            </div> 
        </div>
        <div className='navbar-form navbar-left'>
            <div className='form-group'>
              <Autosuggest 
                suggestions={techSuggestions}
                onSuggestionsFetchRequested={this.onTechSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getTechSuggestionValue}
                renderSuggestion={this.renderTechSuggestion}
                inputProps={techInputProps} />
            </div>
            <button className='btn btn-default' onClick={this.change}>Submit</button>
        </div>
        <div className='navbar-form navbar-left' >
            <div className='form-group'>
            <Autosuggest 
                suggestions={manSuggestions}
                onSuggestionsFetchRequested={this.onManSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getManSuggestionValue}
                renderSuggestion={this.renderManSuggestion}
                inputProps={manInputProps} />
            </div>
            <button className='btn btn-default' onClick={this.change}>Submit</button>
        </div>
        {/* <ul className='nav navbar-nav navbar-right'>
          <li><a href='#' className='btn' data-toggle='modal' data-target='#loginModal'>
          <span className='glyphicon glyphicon-log-in'/>  L O G I N</a></li>
        </ul> */}
      </div>
    </nav>
      )
    }
}
