// import {requireNativeComponent, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
// var viewProps = {
//     name: 'RNAutofillView',
//     propTypes: {
//       keys: PropTypes.string,
//       ...ViewPropTypes,
//     }
//   }

// module.exports = requireNativeComponent('RNAutofillView',viewProps);


import React, { Component } from 'react';
import { NativeModules, requireNativeComponent, View, Text } from 'react-native';

// class Addressfill extends Component {

// 	constructor(props) {
// 		super(props);
// 		this._onChange = this._onChange.bind(this);
// 	}

// 	_onChange(event) {
// 		if(!this.props.onAddress) {
// 			return;
// 		}
// 		this.props.onAddress(event.nativeEvent);
// 	}

// 	render() {
// 		return <AddressView {...this.props} onChange={this._onChange} />;
// 	}
// }

class Addressfill extends React.Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
      }
      _onChange(event) {
        if (!this.props.onGetAddress) {
          return;
        }
        this.props.onGetAddress(event.nativeEvent.address);
      }
    render() {
      return <AddressView    {...this.props} onChange={this._onChange} />;
    }
  }

Addressfill.propTypes = {
	keyss: PropTypes.string,
	onGetAddress: PropTypes.func,
	...View.propTypes,
}

const AddressView = requireNativeComponent('AutofillViews'
);

export default Addressfill;

