import React from "react";
import styled from "styled-components/native";
import Stars from "./Stars";
import { useNavigation } from "@react-navigation/native";

const Area = styled.View`
    background-color: linear-gradient(45deg, rgba(28,28,28, 0.9) 1.26%, #000000 100%);
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const Avatar = styled.Image`
width: 88px;
height: 88px;
border-radius: 20px;
`;

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;

const UserName = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: #fff;
`;

const SeeProfileButtom = styled.TouchableOpacity`
    width: 85px;
    height: 26px;
    border: 1px solid #fff;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const SeeProfileButtomText = styled.Text`
    font-size: 13px;
    color: #fff;
`;

export default ({ data }) => {
    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate('barbeiro', {
            id: data.id,
            name: data.name,
            star: data.star,
            docId: data.id,
        });
    };

    return (
        <Area>
            <Avatar source={require('../imagem/AvatarM.jpg')} />
            <InfoArea>
                <UserName>{data.name}</UserName>

                <Stars stars={data.star} showNumber={true} />

                <SeeProfileButtom onPress={handleClick}>
                    <SeeProfileButtomText>
                        Ver Perfil
                    </SeeProfileButtomText>
                </SeeProfileButtom>
            </InfoArea>
        </Area>
    )

}