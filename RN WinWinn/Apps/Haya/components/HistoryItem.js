import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Switch,
  Text,
  TextInput,
  Button,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';


class HistoryItem extends Component {

    render(){
        return (
          <Fragment >
              <View style={styles.info}>
              <View style={styles.historyContainer}>
              <View style={styles.historyItem}>
                <Text>Task Discription: </Text>
                <Text>Some blahblahblah !</Text>
                <View style={styles.row}>
                  <Text>Price:</Text>
                  <Text>Some Number$ ..</Text>
                </View>
                <View style={styles.row}>
                  <Text>Date: </Text>
                  <Text>Some filtered date!</Text>
                </View>
                <View style={styles.row}>
                  <Text>Your Task Rating: </Text>
                  <Text>Your rate ..</Text>
                </View>
              </View>
              </View>
            </View>
          </Fragment>
        );
    }
  };
  
  const styles = StyleSheet.create({
      info:{
          flexDirection: 'row',
          justifyContent: 'flex-start'
      },
      item:{
        marginRight: 30,
        width: 50,
        height: 50,
      },
      stars:{
        width: 30,
        alignItems: 'flex-start',
        marginLeft: 10
      },
      historyContainer: {
        alignItems: 'center'
      },
      historyItem: {
        borderColor: 'black',
        borderWidth: 2,
        width: 300,
        padding: 10
      },
      row: {
        flexDirection: 'row',
      }
  })

  export default HistoryItem;