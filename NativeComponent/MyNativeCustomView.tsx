import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import AddressNativeCustomView from './AddressNativeCustomView';

type IProps = {  
  iOSKey: String,
  iOSPrefix: String,
  onGetPataaDetails: Function,
  style: StyleProp<ViewStyle> | undefined,
}

const MyNativeCustomView: React.FC<IProps> = (props) => {

  const { iOSKey, iOSPrefix, onGetPataaDetails, style } = props;
  const _onGetPataaDetails = (event) => {
    if (!onGetPataaDetails) {
      return;
    }

    onGetPataaDetails(event.nativeEvent);
  }

  return <AddressNativeCustomView          
          iOSKey={iOSKey}
          iOSPrefix={iOSPrefix}
          onGetPataaDetails={_onGetPataaDetails}
          style={style}
        />
};
export default MyNativeCustomView;