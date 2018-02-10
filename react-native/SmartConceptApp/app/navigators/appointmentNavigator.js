import { StackNavigator } from 'react-navigation';

import ChooseVehicle from './../screens/chooseVehicle';
import ChooseAddress from './../screens/chooseAddress';
import ChoosePackage from './../screens/choosePackage';
import ChooseDays from './../screens/chooseDays';

export const Appointment = StackNavigator({
    ChooseVehicle: {
        screen: ChooseVehicle,
        navigationOptions: {
            header: null,
        }
    },
    ChooseAddress: {
        screen: ChooseAddress,
        navigationOptions: {
            header: null,
        }
    },
    ChoosePackage: {
        screen: ChoosePackage,
        navigationOptions: {
            header: null,
        }
    },
    ChooseDays: {
        screen: ChooseDays,
        navigationOptions: {
            header: null,
        }
    },
},
{
    initialRouteName: 'ChooseVehicle'
}
);