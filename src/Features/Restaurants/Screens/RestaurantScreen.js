import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import RestaurantInfoComponent from "../Components/RestaurantInfoCardComponent";
import styled from 'styled-components/native';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]}
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]}
`;

const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoComponent />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantScreen;
