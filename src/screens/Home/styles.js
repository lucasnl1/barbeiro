import React from "react";
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.SafeAreaView`
    background-color: linear-gradient(to bottom, rgba(61, 99, 157, 0.9), #000);
    flex: 1;

`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;  
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderTitle = styled.Text`
    width: 200px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
`;
export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;

export const LocationArea = styled.View`
    box-shadow: 0px 16px 16px rgba(61, 99, 157, 0.7);
    background-color: linear-gradient(45deg, rgba(176,196,222, 0.5) 1.26%, #000000 100%);
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
`;
export const LocationInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #fff;
`;

export const LocationFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    color : #fff;
`;
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;
export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;
