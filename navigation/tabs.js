import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,Text,View,Image,Tounhable } from 'react-native';



import CreateScreen from '../screens/CreateScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ScanScreen from '../screens/ScanScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                evelation: 0,
                backgroundColor: '#fffffff',
                borderRadius: 15,
                height: 90,
            }
        }}
        
        >
            <Tab.Screen name="Oluştur" component={CreateScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                        source={require('../assets/icons/qrcode.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#e32f45' : '#748c94'
                        }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Oluştur</Text>
                    </View>
                )
            }}
            
            />

            <Tab.Screen name="Geçmiş" component={HistoryScreen} options={{
                            tabBarIcon: ({focused}) => (
                                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                    <Image
                                    source={require('../assets/icons/history.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? '#e32f45' : '#748c94'
                                    }}
                                    />
                                 <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Geçmiş</Text>
                                </View>
                            )
                        }}
                        
                        />

            <Tab.Screen name="Tara" component={ScanScreen} options={{
                                tabBarIcon: ({focused}) => (
                                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                                <Image
                                                source={require('../assets/icons/scan.png')}
                                                resizeMode='contain'
                                                style={{
                                                    width: 25,
                                                    height: 25,
                                                    tintColor: focused ? '#e32f45' : '#748c94'
                                                }}
                                                />
                                                  <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Tara</Text> 
                                            </View>
                                        )
                                    }}
                                    
                                    />
                                    
            <Tab.Screen name="Profil" component={ProfileScreen} options={{
                                tabBarIcon: ({focused}) => (
                                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                                <Image
                                                source={require('../assets/icons/profile.png')}
                                                resizeMode='contain'
                                                style={{
                                                    width: 25,
                                                    height: 25,
                                                    tintColor: focused ? '#e32f45' : '#748c94'
                                                }}
                                                />
                                                 <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Profil</Text>    
                                            </View>
                                        )
                                    }}
                                    
                                    /> 
                                    
            <Tab.Screen name="Ayarlar" component={SettingsScreen} options={{
                                tabBarIcon: ({focused}) => (
                                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                                <Image
                                                source={require('../assets/icons/settings.png')}
                                                resizeMode='contain'
                                                style={{
                                                    width: 25,
                                                    height: 25,
                                                    tintColor: focused ? '#e32f45' : '#748c94'
                                                }}
                                                />
                                                 <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Ayarlar</Text>    
                                            </View>
                                        )
                                    }}
                                    
                                    />                     
            
        </Tab.Navigator>
    );
}


export default Tabs;