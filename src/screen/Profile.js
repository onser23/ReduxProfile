import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import {setPhoto} from '../redux/action';

import * as ImagePicker from 'react-native-image-picker';

const windowWidth = Dimensions.get('window').width;
const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const {UserReducer} = useSelector(state => state);

  return (
    <View style={styles.main}>
      {/* <Button title="SSS" onPress={() => navigation.navigate('Map')} /> */}
      <View style={styles.header}>
        <ImageBackground
          source={require('../images/bg.jpg')}
          resizeMode="stretch"
          style={styles.image}>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <MaterialCommunityIcons
              style={{
                position: 'absolute',
                alignSelf: 'flex-end',
                color: '#fff',
                margin: 12,
              }}
              name="square-edit-outline"
              size={27}
              color="red"
            />
          </TouchableOpacity>

          <Image style={styles.profile} source={{uri: UserReducer.photo}} />
          <TouchableOpacity
            onPress={() =>
              ImagePicker.launchImageLibrary(
                {
                  mediaType: 'photo',
                  includeBase64: false,
                  maxHeight: 200,
                  maxWidth: 200,
                },
                response => {
                  console.log(response);

                  dispatch(setPhoto(response.assets[0].uri));
                },
              )
            }
            title="Select Image"
            style={{
              position: 'absolute',
              alignSelf: 'center',
              marginTop: 135,
            }}>
            <MaterialCommunityIcons name="camera" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.profileName}>{UserReducer.user}</Text>
          <View style={styles.userLocaltion}>
            <Ionicons name="location" size={19} color="#fff" />
            <Text style={styles.userLocaltionText}>Baku, Azerbaijan</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.container}>
        <View style={styles.phoneContainer}>
          <Text style={styles.contactTitle}>Phone</Text>
          <View style={styles.phone}>
            <MaterialCommunityIcons name="phone" size={27} color="red" />
            <Text style={styles.text}>{UserReducer.phone}</Text>
          </View>
        </View>

        <View style={styles.phoneContainer}>
          <Text style={styles.contactTitle}>Email</Text>
          <View style={styles.phone}>
            <MaterialCommunityIcons
              // style={{margin: 15}}
              name="email"
              size={27}
              color="red"
            />

            <Text style={styles.text}>{UserReducer.email}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
  image: {
    height: 250,
    width: windowWidth,
    // opacity: 0.1,
  },
  profile: {
    height: 150,
    width: 150,
    borderRadius: 90,
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'red',
  },
  profileName: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 6,
    fontWeight: '700',
    alignSelf: 'center',
  },
  userLocaltion: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  userLocaltionText: {
    color: '#fff',
    fontSize: 16,
  },
  container: {
    marginHorizontal: 40,
  },
  phoneContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    marginVertical: 10,
  },
  contactTitle: {
    color: 'blue',
    marginLeft: 30,
    marginTop: 10,
  },
  phone: {
    flexDirection: 'row',
  },
  text: {
    color: '#000',
    marginLeft: 5,
  },
});
export default Profile;
