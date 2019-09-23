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
  FlatList
} from 'react-native';
import Wellcome from '../Haya/components/Wellcome'

class DeyaaApp extends Component {
    render(){
        return (
          <Fragment>
            <Text>Deyaa App</Text>
            {/* <Wellcome/> */}
            {/* <Button onPress={ () => this.props.navigation.navigate('comp2')} title='component #1'/> */}
            {/* <Button onPress={ () => this.props.navigation.navigate('comp3')} title='component #2'/> */}
            {/* <Button onPress={ () => this.props.navigation.navigate('wellcome')} title='component #4'/> */}
            <Button onPress={ () => this.props.navigation.navigate('wellcome')} title='Wellcome Page!'/>
            <Button onPress={ () => this.props.navigation.navigate('DashBoard')} title='DashBoard Page!'/>

          </Fragment>
        );
    }
  };
  

  export default DeyaaApp;