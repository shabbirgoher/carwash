import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MenuButton = ({ navigate }) => <View>
    <TouchableOpacity onPress={() => navigate('DrawerOpen')}>
        <Icon name="bars" style={{ padding: 10, marginLeft: 10 }} size={20} color="black" type={"font-awesome"} />
    </TouchableOpacity>
</View>
export default MenuButton;