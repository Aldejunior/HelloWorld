import React from 'react';
import { View, Text, Button } from "react-native";

const Sobre = ({ navigation }) => {
    return (
        <View>
            <Text>Sobre mim</Text>
            <Text>
                Sou um jovem que tem algumas, quero continuar aprendendo e trabalhando.
            </Text>

            <Button 
                title="Voltar"
                onPress={ () => navigation.goBack() }
            />
        </View>
    );
}

export default Sobre;