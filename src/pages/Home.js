import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation             }) => {
    return (
        <View>
            <Text>Liberdade</Text>

            <Button 
                title="Sobre"
                onPress={ () => navigation.navigate('Sobre') }
            />
        </View>
    );
}

export default Home;
