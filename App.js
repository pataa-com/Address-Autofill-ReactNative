
import React, {Component } from 'react';
import {View,SafeAreaView,Text} from 'react-native';
import Addressfill from './components/Addressfill';

export default class PataaAddressExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myaddress: ''
   }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text >
          Welcome to React Native Pataa Address API
        </Text>
        <Addressfill keyss="bIQxCFwL6nxsc39ocarzQHv8n0Itzlyp4r2vdqVGslE=" 
            onGetAddress={(address) => 
            {
              console.log(address);
              this.setState({myaddress: address})
            }
            }
            style={{ flex:1 }}
        />
         <Text >
      {this.state.myaddress}
    </Text>
    </View>
    );
  }
}
