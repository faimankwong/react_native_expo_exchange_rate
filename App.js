import React from 'react';
import MainScreen from "./MainScreen";
import DetailsScreen from "./DetailsScreen";
import LineChart from "./LineChart";
import {Provider} from 'react-redux'
import { createStackNavigator,createBottomTabNavigator } from "react-navigation";
import {store} from './store'



const AppNavigator = createStackNavigator(

    {
           Details: {
               screen: DetailsScreen,
               navigationOptions: {
                   title: 'Historical Records ( Last 30 Days )',
                   headerTintColor: "#fff",
                   headerStyle: {
                       backgroundColor: "#202020"
                   }
               }
           },
        Line: {
            screen: LineChart,
            navigationOptions: {
                title: 'Trending of Currency Rate',
                headerTintColor: "#fff",
                headerStyle: {
                    backgroundColor: "#202020"
                }
            }
        },
    },
    {
        initialRouteName: "Details",
    }
);


const MainTabs = createBottomTabNavigator(
    {
        Home: MainScreen,
        Details: { screen: AppNavigator,
            navigationOptions: {
                showIcon: true,
                tabBarLabel: 'Last 30 days results',
            }
    }},
    {
        tabBarOptions: {
            activeTintColor: '#a41034',
        },
    }
)


export default class App extends React.Component {


    render() {
        return (
            <Provider store={store}>
                     <MainTabs />
            </Provider>
        );
    }
}

