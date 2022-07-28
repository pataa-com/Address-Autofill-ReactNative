
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
      <View style={{padding: 10, flex:1}}>
        <Text >
          Welcome to React Native Pataa Address API v102
        </Text>
        <Addressfill keyss="JJ3cGSNdUFLvR+pXtzb6r2QHTSSWwzoZKH1kCdzWKVg="
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
