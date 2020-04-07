import React, { Component } from 'react';
import { Text, Image, View, StatusBar, Picker, FlatList, Dimensions, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native'
import { Header, Button, Card, Icon } from 'react-native-elements'
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

type Props = {};
export default class Category extends Component<Props> {

  constructor(props) {
    super(props)
    prefik_url = 'https://api.kawalcorona.com/indonesia/';
    this.state = {
      cases: [],
      isLoading: true
    };
  }
  componentDidMount() {
    axios.get('https://api.kawalcorona.com/indonesia/')
      .then(res => {
        const cases = res.data;
        console.log(cases);
        this.setState({ cases, isLoading: false });
      })
  }

  //   keyExtractor = (item, index) => index.toString()
  //   renderItem = ({ item }) => (
  //   <ListItem
  //     title={item.cases}
  //     leftAvatar={{ source: { uri: prefik_url+item.gambar } }}
  //   />
  // )
  ListViewQ = () => {
    return this.state.cases.map((element, i) => {
      return (
        <View key={i} style={{ flexDirection: 'row' }}>

          <View style={{ flex: 1 }}>
            <Card backgroundColor="#fcba03" style={{ backgroundColor: '#fcba03' }}>
              <Text>Kasus : {element.positif} </Text>
            </Card>
          </View>
          <View style={{ flex: 1 }}>
            <Card>
              <Text>Meninggal :{element.meninggal} </Text>
            </Card>
          </View>
          <View style={{ flex: 1 }}>
            <Card>
              <Text>Sembuh : {element.sembuh} </Text>
            </Card>
          </View>
        </View>

      );
    });
  };
  render() {
    return (
      <View>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={<Image
            source={{ uri: 'https://logos-download.com/wp-content/uploads/2016/09/Dribbble_logo_black.png' }}
            style={{ width: 100, height: 25, marginBottom: 10 }}
          />}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={
            <TouchableOpacity underlayColor="white">
              <View style={{ height: 30, borderWidth: 0.2, borderRadius: 10, width: 100, flexDirection: "row", justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>

                <Icon
                  name='filter'
                  type='font-awesome'
                  color='#f50'
                  style={{ fontSize: 2 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 12 }}>FILTER BY</Text>
              </View>
            </TouchableOpacity>

          }
          containerStyle={{
            height: 65,
            marginBottom: 10,
            backgroundColor: '#fff',
          }}
        />
        <ScrollView>
          <View>
            <this.ListViewQ />{
              this.state.isLoading &&
              <ActivityIndicator
                style={{ height: 80 }}
                color="#C00"
                size="large"
              />
            }
            {/* <ActivityIndicator size="large" color="#0000ff" /> */}
          </View>
          <View style={{ margin: 15 }}>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', backgroundColor: '#870000', height: 50, justifyContent: "center", alignContent: "center", alignItems: 'center', paddingRight: 10 }}>
                <Text style={{ flex: 2, textAlign: 'center', color: '#fff' }}>KENALI GEJALA COVID LEBIH AWAL</Text>
                <Icon
                  name='caret-right'
                  type='font-awesome'
                  color='#fff'
                  style={{ flex: 2, fontSize: 2 }}
                />
              </View>
            </TouchableOpacity>
            <View style={{ marginTop: 10 }}>
              <Text> Bantu hentikan virus corona</Text>
            </View>

            <View style={{ height: 400, backgroundColor: '', flexDirection: "column" }}>
              <View style={{ flex: 2, flexDirection: 'row' }}>
                
                <View style={{ flex: 2, backgroundColor: '', margin: 10}}>
                  
                  <ImageBackground style={{
                    flex: 3,
                    resizeMode: "cover",
                    justifyContent: "center"
                  }} source={require('../../src/img/cought.png')} >
                   
                  </ImageBackground>
                  <Text style={{justifyContent:"flex-end",alignContent:"flex-end", textAlign:'center', }}>awesome</Text>
                </View>
                <View style={{ flex: 2, backgroundColor: '', margin: 10}}>
                  
                  <ImageBackground style={{
                    flex: 3,
                    resizeMode: "cover",
                    justifyContent: "center"
                  }} source={require('../../src/img/cought.png')} >
                   
                  </ImageBackground>
                  <Text style={{justifyContent:"flex-end",alignContent:"flex-end", textAlign:'center', }}>awesome</Text>
                </View>
              </View>
              <View style={{ flex: 2, flexDirection: 'row' }}>
              <View style={{ flex: 2, backgroundColor: '', margin: 10}}>
                  
                  <ImageBackground style={{
                    flex: 3,
                    resizeMode: "cover",
                    justifyContent: "center"
                  }} source={require('../../src/img/cought.png')} >
                   
                  </ImageBackground>
                  <Text style={{justifyContent:"flex-end",alignContent:"flex-end", textAlign:'center', }}>awesome</Text>
                </View>
                <View style={{ flex: 2, backgroundColor: '', margin: 10}}>
                  
                  <ImageBackground style={{
                    flex: 3,
                    resizeMode: "cover",
                    justifyContent: "center"
                  }} source={require('../../src/img/cought.png')} >
                   
                  </ImageBackground>
                  <Text style={{justifyContent:"flex-end",alignContent:"flex-end", textAlign:'center', }}>awesome</Text>
                </View>
                
              </View>
            </View>
            <View style={{ flex: 2, backgroundColor: '', margin: 10}}>
                  
                  <ImageBackground style={{
                    flex: 3,
                    resizeMode: "cover",
                    justifyContent: "center"
                  }} source={require('../../src/img/cought.png')} >
                   
                  </ImageBackground>
                  <Text style={{justifyContent:"flex-end",alignContent:"flex-end", textAlign:'center', }}>awesome</Text>
                </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}