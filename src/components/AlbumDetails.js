import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Linking} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default class AlbumDetails extends Component {
 
    render() {
        const {title, artist, thumbnail_image, image, url} = this.props.album;
        const {thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle} = styles;
        return (
            <Card>
                <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image source={{uri: thumbnail_image}} style={thumbnailStyle}/>
                    </View>

                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image source={{uri: image}} style={imageStyle}/>
                </CardSection>

                <CardSection>
                    <Button onPress={() => Linking.openURL(url)}> 
                        Buy Now
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
})