import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, Image, Button, TouchableHighlight, TouchableWithoutFeedback, Alert } from 'react-native'
import { Card, Icon, Divider } from 'react-native-elements'
import { Header } from 'react-native-elements'
import axios from 'axios'
import { ListItem } from "react-native-elements"

function MentorScreen({ navigation }) {

	const [newsku, setNews] = useState()

	const _onPressButton = () => {
		alert('You tapped the button!')
	}
	useEffect(() => {
		axios.get('http://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=266d190c4442467880148c3565390825')
			.then(res => {
				const news = res.data.articles
				setNews(news)
				console.log(newsku)
			})
	}, [])
	// const	renderNativeItem = (item) => {
	//     const name = item.articles.title
	//     return <ListItem
	//             // roundAvatar
	//             title={name}
	//             // subtitle={item.email}
	//             // avatar={{ uri: item.picture.thumbnail }}
	//             onPress={() => onPressItem(item)}
	//           />;
	//   }
	return (

		<View>


			{/* <FlatList
          data={newsku}
          renderItem={({item}) => renderNativeItem(item)}
        /> */}
			<FlatList
				data={newsku}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item, index }) =>
					// console.log(item.title)
					<View key={index}>
						<TouchableWithoutFeedback onPress={() => navigation.navigate('Details', {
							itemId: item.name, imgId: item.img
						})}>
							<Card style={{ borderWidth: 1, borderRadius: 200 }}>
								<View style={{ flexDirection: 'row' }}>
									<Image
										resizeMode="contain"
										style={{
											flex: 1,
											height: 50,
											borderRadius: 50 / 2,
											width: '100%',

										}}
										source={{uri:item.urlToImage}}
									/>
									<View style={{ flex: 3, marginLeft: 20 }}>
										<Text style={{ fontSize: 20 }}>{item.title}</Text>
										<Text style={{}}>{item.description}</Text>
									</View>
									
								</View>
								<Divider style={{ marginTop: 15, backgroundColor: '#6e7278' }} />

								
							</Card>

						</TouchableWithoutFeedback  >
					</View>
				}
			/>
			{/* <FlatList
					data={newsku}
					renderItem={({ item }) => (
						<ListItem
							roundAvatar
							title={`${item.articles.title}`}
							// subtitle={item.email}
							containerStyle={{ borderBottomWidth: 0 }}
						/>
					)}
					keyExtractor={item => item.articles.title}
				/> */}
		</View>
	)
}

export default MentorScreen