import * as React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setUser, setPhone, setEmail} from '../redux/action';
import {TextInput} from 'react-native-paper';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const EditProfile = () => {
  const {UserReducer} = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <View style={{marginHorizontal: 15, flex: 1}}>
      <TextInput
        onChangeText={text => dispatch(setUser(text))}
        value={UserReducer.user}
        style={{marginVertical: 10}}
        label="Username"
        left={<TextInput.Icon name="account" />}
      />

      <TextInput
        onChangeText={text => dispatch(setEmail(text))}
        value={UserReducer.email}
        style={{marginVertical: 10}}
        label="Email"
        left={<TextInput.Icon name="mail" />}
      />

      <TextInput
        onChangeText={text => dispatch(setPhone(text))}
        value={UserReducer.phone}
        style={{marginVertical: 10}}
        label="Phone"
        left={<TextInput.Icon name="phone" />}
      />

      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          image={{
            uri: 'https://pointofcommerce.com/wp-content/uploads/2018/01/pointofcommercelogo-300x300.png',
          }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    // marginTop: 100,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 280,
  },
});

export default EditProfile;
