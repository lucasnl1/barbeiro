import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFFFFF;
`;
export const Scroller = styled.ScrollView`
    flex: 1;
`;
export const SwipeDot = styled.View`
    height: 10px;
    width: 10px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: 3px;
`;
export const SwipeDotActive = styled.View`
    height: 10px;
    width: 10px;
    background-color: #000000;
    border-radius: 5px;
    margin: 3px;
`;
export const SwipeImage = styled.Image`
    width: 100%;
    height: 240px;

`;

export const SwipeItem = styled.View`
    flex: 1;
    background-color: linear-gradient(to bottom, rgba(61, 99, 157, 0.9), #000);
`;

export const FakeSwiper = styled.View`
    width: 100%;
    height: 240px;
    background-color: linear-gradient(to bottom, rgba(61, 99, 157, 0.9), #000);
`;

export const PageBody = styled.View`
    flex: 1;
    background-color: #1C1C1C;
    border-top-left-radius: 50px;
    margin-top: -40px;
    min-height: 550px;
`;

export const UserInfo = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export const UserInfoArea = styled.View`
    flex-direction: row;
    margin-top: -50px;
`;

export const UserAvatar = styled.Image`
    width:110px;
    height: 110px;
    border-radius:20px;
    margin-left:30px;
    margin-right: 20px;
    border-width: 4px;
    border-color: #000;
`;

export const UserInfoName = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-vottom: 10px;
`;

export const UserFavButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    margin-top: 35px;
    margin-left: 20px;
    border-width: 2px;
    border-color: #000;
    
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const ServiceArea = styled.View`
flex: 1;
`;
export const ServiceInfo = styled.View`
    flex: 1;
`;
export const ServicesTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    margin-left: 30px;
    margin-top: 30px;
    margin-bottom: 40px;
`;
export const ServiceItem = styled.View`
    flex-direction: row;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
`;
export const ServiceName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;
export const ServicePrice = styled.Text`
    font-size: 14px;
    color: #fff;
`;
export const ServiceChoosseButton = styled.TouchableOpacity`
    background-color: linear-gradient(45deg, rgba(176,196,222, 0.5) 1.26%, #000000 100%);
    padding: 10px 15px;
    border-radius: 10px;
`;
export const ServiceChooseBtnText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;
export const TestmonialArea = styled.View`
    margin-top: 30px;
    margin-bottom: 50px;
`;
export const TestmonialInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const TestmonialItem = styled.View`
    background-color: linear-gradient(45deg, rgba(176,196,222, 0.5) 1.26%, #000000 100%);
    padding: 15px;
    border-radius: 10px;
    height: 110px;
    justify-content: center;
    margin-left: 40px;
    margin-right: 40px;
    
`;

export const TestmonialName = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 5px;

`;

export const TestmonialBody = styled.Text`
    font-size: 13px;
    color: #fff;
`;




/*
linear-gradient(45deg, rgba(0,0,0, 0.9) 1.26%, #000000 100%)
  */
