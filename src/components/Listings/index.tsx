/*tslint:disable*/
import * as React from 'react'

import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'node_modules/font-awesome/css/font-awesome.min.css'
import { mockData } from '../../staticData/cardData'

import { listingCardStyles } from './styles'

// use react-bootstrap and react-fontawesome packages instead of node_modules

interface IListingsProps {
  type: string | null
}

export class Listings extends React.Component<IListingsProps> {

  displayListings = (type: any) => {
    const data: any[] = []
    mockData.map((item:any) => {
      debugger
      if (item.location.toLowerCase() === type.toLowerCase() || type.toLowerCase() === 'all') {
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
    return data
  }

  public render() {
    const { type } = this.props
    debugger
    return this.displayListings(type)
  }
}


