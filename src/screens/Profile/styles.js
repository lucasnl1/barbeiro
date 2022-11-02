import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: linear-gradient(to bottom, rgba(54,54,54, 0.9), #000);
    flex: 1;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;
export const HeaderTitle = styled.Text`
    width: 200px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
`;
export const LogoutButton = styled.TouchableOpacity`
    padding: 5px;
    box-shadow: 0px 16px 16px rgba(61, 99, 157, 0.7);
    background-color: linear-gradient(45deg, rgba(176,196,222, 0.5) 1.26%, #000000 100%);
    height: 40px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 1px;
`;
export const CustomButtonText = styled.Text`
    font-size: 15px;
    color: #fff;
`;
export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;  
`;
export const UserAvatar = styled.Image`
    width:200px;
    height: 200px;
    border-radius:50px;
    margin:30px;
    border-width: 4px;
    border-color: linear-gradient(to bottom, rgba(54,54,54, 0.9), #000);
`;
export const PageBody = styled.View`
    flex: 1;
    background-color: #1C1C1C;
    border-top-right-radius: 80px;
    margin-top: -10px;
    min-height: 50px;
`;