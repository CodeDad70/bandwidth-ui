import React, {Component} from 'react' ;
import Messaging from '../components/Messaging'
import Voice from '../components/Voice'
import EmerAccess from '../components/EmerAccess'
import PhoneNumbers from '../components/PhoneNumbers'


const ServicesMenu  = () => (
  <div className = "services" >
  
      <Messaging/>
      <Voice/>
      <EmerAccess/>
      <PhoneNumbers/>

  </div>
)

export default ServicesMenu;