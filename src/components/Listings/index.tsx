/*tslint:disable*/
import * as React from 'react'

import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'node_modules/font-awesome/css/font-awesome.min.css'
import { mockData } from '../../staticData/cardData'

import { listingCardStyles } from './styles'

// use react-bootstrap and react-fontawesome packages instead of node_modules

interface IListingsProps {
  type: string | null
  techValue: string | null
  manValue : string | null
}

export class Listings extends React.Component<IListingsProps> {

  displayListings = (type: any, techValue: any, manValue: any) => {
    const data: any[] = []
    mockData.map((item:any) => {
    
    if (item.location.toLowerCase() === type.toLowerCase() || type.toLowerCase() === 'all') {

      if(techValue && manValue){
        if(item.name.toLowerCase() === manValue.toLowerCase()) {
          (item.projects).map((x:any) => { 
            if((x.technologies).includes(techValue)) {
              const temp = <div {...listingCardStyles}>
                        <div className='card'>
                          <div className='cardDetails'>
                            <div className='name'>
                              {item.name}
                            </div>
                            <div className='role'>
                              {item.role}
                              <div className='location'>
                                {item.location}
                              </div>
                            </div>
                          </div>
                          <div className='logo'>
                            <i className='fa fa-user-circle employeeImage iconColorSize'/>
                          </div>
                          <div className='projects'>
                             <div className='openProjects'>open projects</div>
                          </div>
                        </div>
                      </div>
              data.push(temp)
            }
          })
        }
      }

      else if (techValue) {
        if(item.projects) {
          (item.projects).map((x:any) => { 
            if((x.technologies).includes(techValue)) {
              const temp = <div {...listingCardStyles}>
                        <div className='card'>
                          <div className='cardDetails'>
                            <div className='name'>
                              {item.name}
                            </div>
                            <div className='role'>
                              {item.role}
                              <div className='location'>
                                {item.location}
                              </div>
                            </div>
                          </div>
                          <div className='logo'>
                            <i className='fa fa-user-circle employeeImage iconColorSize'/>
                          </div>
                          <div className='projects'>
                             <div className='openProjects'>open projects</div>
                          </div>
                        </div>
                      </div>
              data.push(temp)
            }
          })
        }
      }

      else if (manValue) {
        if(item.name.toLowerCase() === manValue.toLowerCase()) {
          const temp = <div {...listingCardStyles}>
                        <div className='card'>
                          <div className='cardDetails'>
                            <div className='name'>
                              {item.name}
                            </div>
                            <div className='role'>
                              {item.role}
                              <div className='location'>
                                {item.location}
                              </div>
                            </div>
                          </div>
                          <div className='logo'>
                            <i className='fa fa-user-circle employeeImage iconColorSize'/>
                          </div>
                          <div className='projects'>
                             <div className='openProjects'>open projects</div>
                          </div>
                        </div>
                      </div>
          data.push(temp)
        }
      }

      else {
        const temp = <div {...listingCardStyles}>
                      <div className='card'>
                        <div className='cardDetails'>
                          <div className='name'>
                            {item.name}
                          </div>
                          <div className='role'>
                            {item.role}
                            <div className='location'>
                              {item.location}
                            </div>
                          </div>
                        </div>
                        <div className='logo'>
                          <i className='fa fa-user-circle employeeImage iconColorSize'/>
                        </div>
                        <div className='projects'>
                           <div className='openProjects'>open projects</div>
                        </div>
                      </div>
                    </div>
        data.push(temp)
      }
    }
    })
    return data
  }

  render() {
    const { type, techValue, manValue } = this.props
    console.log(this.props)
    return this.displayListings(type, techValue, manValue)
  }
}


