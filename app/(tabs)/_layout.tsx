import { Text, View, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../assets/icons';

const TabIcon = ((icon, color, name, focused)) => {
    return (
        <view className='items-center justify-center gap-2'>
            <Image
                Source = {icon}
                resizeMethod = 'contain'
                tintColor={color}
                className='w-6 h-6'
            />
            <Text className = {`${focused? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color : color }}>
                {name}
            </Text>
        </view>
    )
}

const Tabslayout = () => {
  return (
    <>
        <Tabs 
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFA001',
                tabBarInactiveTintColor: '#CDCDE0',
                tabBarStyle: {
                    backgroundColor: '#161622',
                    borderTopWidth: 1,
                    borderTopColor: '#232533',
                    height: 84,

                }
            }}
        >
            <Tabs.Screen
                name='home'
                options={{
                    title: 'home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon = {icons.home}
                            color = {color}
                            name = 'home'
                            focused = {focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='bookmark'
                options={{
                    title: 'Bookmark',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon = {icons.bookmark}
                            color = {color}
                            name = 'Bookmark'
                            focused = {focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='create'
                options={{
                    title: 'Create',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon = {icons.Create}
                            color = {color}
                            name = 'Create'
                            focused = {focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon = {icons.Profile}
                            color = {color}
                            name = 'Profile'
                            focused = {focused}
                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default Tabslayout
