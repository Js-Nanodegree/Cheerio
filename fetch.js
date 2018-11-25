import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }
    componentDidMount () {
        return fetch('https://asiaoptom.com/local/api/v1/getSectionElements.php?section=%E6%97%B6%E5%B0%9A%E5%A5%B3%E8%A3%85&page=1')
            .then ( (response) => response.json() )
            .then( (responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.items,
                })
            })
        .catch((error) => {
            console.log(error)
        });
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } else {
            let items = this.state.dataSource.map((val, key) => {
                return <View key={key} style={styles.item}><Text>{val.price}</Text><Text>{val.id}</Text></View>
            });
            return (
                <View style={styles.container}>
                    
                    {items}
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    }
});