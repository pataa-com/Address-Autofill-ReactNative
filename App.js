
import React, { useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import MyNativeCustomView from './NativeComponent/MyNativeCustomView'

const App = () => {
  const windowWidth = Dimensions.get('window').width;
  const [pataaCode, setPataaCode] = useState('');
  const [address1, setAddress1] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [countryName, setCountryName] = useState('');
  const [cityName, setCityName] = useState('');
  const [lastName, setLastName] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [address3, setAddress3] = useState('');
  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [userCountryCode, setUserCountryCode] = useState('');
  const [stateName, setStateName] = useState('');
  const [address4, setAddress4] = useState('');
  const [address2, setAddress2] = useState('');
  const [firstName, setFirstName] = useState('');
  const [mapLink, setMapLink] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  const [isResponse, setIsResponse] = useState(false);
  const [email, setEmail] = useState('');

  
  console.log("Status: " + status)

  return (    
    <View style={{ height:'100%'}}>
      <View style={{ height:220}}>
        <MyNativeCustomView
        iOSKey={"NMyaGrfjCXWokYAGPj1CbWJsbzg8Ou8YtDx4MrTMAz0="}
        iOSPrefix={"4TVCUP6HC7"}     
        onGetPataaDetails={(event: Object) => { 
          
          setIsResponse(true)

          setPataaCode(event.pataaCode)
          setAddress1(event.address1)
          setAddress2(event.address2)
          setAddress3(event.address3)
          setAddress4(event.address4)
          setCountryName(event.countryName)
          setCityName(event.cityName)
          setLastName(event.lastName)
          setFirstName(event.firstName)
          setStateName(event.stateName)
          setMapLink(event.mapLink)
          setError(event.error)
          setStatus(event.status)
          setZipcode(event.zipcode)
          setMobile(event.mobile)
          setEmail(event.email)

          console.log("Click event: " + JSON.stringify(event))
        }}
        style={{ left:10,  top:100, width: windowWidth - 20, height: 100, }}
      />      
    </View>
    <View style={{ margin:10, borderWidth:1.0, borderColor: isResponse == false ? 'transparent' : 'black', borderRadius:5.0}}>
      {
        isResponse == false
        ?
        <View></View>
        :
        status == 204 
        ?
        <View style={{margin:10,}}>
          <Text>Error: {error}</Text>
        </View> 
        :
        <View style={{margin:10,}}>        
          <Text>Pataa Code: {pataaCode}</Text>
          <Text>Address 1: {address1}</Text>
          <Text>Address 2: {address2}</Text>
          <Text>Address 3: {address3}</Text>
          <Text>Address 4: {address4}</Text>
          <Text>City Name: {cityName}</Text>
          <Text>State Name: {stateName}</Text>
          <Text>Country Name: {countryName}</Text>
          <Text>First Name: {firstName}</Text>
          <Text>Last Name: {lastName}</Text>
          <Text>Zipcode: {zipcode}</Text>
          <Text>Mobile: {mobile}</Text>
          <Text>Map Link: {mapLink}</Text>     
          <Text>Email: {email}</Text>     
        </View>                 
      }  
    </View>
    </View>    
  );
};

export default App;
