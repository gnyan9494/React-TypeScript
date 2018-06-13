/*tslint:disable*/
import { css } from 'glamor'

const listingCardStyles = css({
    margin: '0px 130px 0px 200px',
  
 ' .card': {
    float: 'left',
    position: 'relative',
    width: '140px',
    height: '215px',
    borderRadius: '5px',
    marginRight: '22px',
    marginTop: '20px',
    backgroundColor: '#00406d'
  },
    
 ' .cardDetails': {
    textAlign: 'center'
  },
  
 ' .name': {
    color: '#fff',
    fontSize: '13px',
    padding: '15px 10px 0',
    fontWeight: '600',
    height: '40px',
    textTransform: 'capitalize'
  },
  
 ' .logo': {
    position: 'relative',
    textAlign: 'center',
    margin: '0 auto',
    width: '85px'
  },
  
 ' .employeeImage': {
    verticalAlign: 'middle',
    borderRadius: '50%'
  },
  
 ' .projects': {
    textAlign: 'center',
    margin:'0',
    padding: '0',
    border: '0',
    fontSize: '100%',
    fontWeight: '400',
    verticalAlign: 'baseline',
    background: '0 0'
  },
  
 ' .role': {
    height: '40px',
    marginBottom: '10px',
    color: '#fff',
    fontSize: '14px',
    textTransform: 'capitalize'
  },
  
 ' .location': {
    color: 'yellowgreen',
    letterSpacing: '0.4px'
  },
  
 ' .openProjects': {
    backgroundColor: '#005b9a',
    minWidth: '102px',
    display: 'inline-block',
    color: '#fff',
    fontSize: '11px',
    textTransform: 'uppercase',
    padding: '7px 10px',
    borderRadius: '2px',
    letterSpacing: '0.4px',
    margin: '20px 0'
  },
  
 ' .openProjects:hover': {
    backgroundColor: 'white',
    color:'#005b9a',
    cursor: 'pointer'
  },
  
 ' .iconColorSize': {
    fontSize:'48px !important',
    color:'white !important'
  }

})

export { listingCardStyles }

// CSS format 

/* .cardContainer{
  margin: 0px 130px 0px 200px;
}

.card{
  float: left;
  position: relative;
  width: 140px;
  height: 215px;
  border-radius: 5px;
  margin-right: 22px;
  margin-top: 20px;
  background-color: #00406d;
}
  
.cardDetails{
  text-align: center;
}

.name{
  color: #fff;
  font-size: 13px;
  padding: 15px 10px 0;
  font-weight: 600;
  height: 40px;
  text-transform: capitalize;
}

.logo{
  position: relative;
  text-align: center;
  margin: 0 auto;
  width: 85px;
}

.employeeImage{
  vertical-align: middle;
  border-radius: 50%;
}

.projects{
  text-align: center;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: 400;
  vertical-align: baseline;
  background: 0 0;
}

.role{
  height: 40px;
  margin-bottom: 10px;
  color: #fff;
  font-size: 14px;
  text-transform: capitalize;
}

.location{
  color: yellowgreen;
  letter-spacing: 0.4px;
}

.openProjects{
  background-color: #005b9a;
  min-width: 102px;
  display: inline-block;
  color: #fff;
  font-size: 11px;
  text-transform: uppercase;
  padding: 7px 10px;
  border-radius: 2px;
  letter-spacing: .4px;
  margin: 20px 0;
}

.openProjects:hover{
  background-color: white;
  color:#005b9a;
  cursor: pointer;
}

.iconColorSize{
  font-size:48px !important;
  color:white !important;
} */