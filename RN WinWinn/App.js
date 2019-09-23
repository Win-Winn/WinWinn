import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Deyaa from './Apps/Deyaa/DeyaaApp';
import Moath from './Apps/Moath/MoathApp';
import Emad from './Apps/Emad/EmadApp';
import Haya from './Apps/Haya/HayaApp';
import Wellcome from './Apps/Haya/components/Wellcome'
import SignUp from './Apps/Deyaa/components/signup'
import LogIn from './Apps/Deyaa/components/login'
import DashBoard from './Apps/Haya/components/DashBoard'



const navigator = createStackNavigator(
  {
    comp1: Deyaa,
    comp2: Moath,
    comp3: Emad,
    comp4: Haya,
    wellcome: Wellcome,
    SignUp: SignUp,
    LogIn: LogIn,
    DashBoard: DashBoard
  },
  {
    initialRouteName: 'DashBoard',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
)

export default createAppContainer(navigator);

