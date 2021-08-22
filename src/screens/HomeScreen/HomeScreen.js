import React, { useEffect, useRef, useState } from "react";
import {TouchableOpacity, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-deck-swiper";
import {ActivityIndicator, Button, FAB, Portal, Title} from "react-native-paper";
import {useTheme} from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {Card, OverlayLabel} from "../../components";
import {useLoading, useCards, useFavorites} from "../../hooks";
import styles from "./styles";

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();
  const swiperRef = useRef(null);
  const [previous, setPrevious] = useState(false);
  const [swipedAllCards, setSwipedAllCards] = useState(false);

  const {loading, setLoadingF} = useLoading();
  const {cards, getCardsF} = useCards();
  const {setFavoriteF, setUnFavoriteF} = useFavorites();

  useEffect(() => {
    setLoadingF(true);
    getCardsF();
  }, [cards]);

  const handleOnSwipedAllCards = () => setSwipedAllCards(true);
  const handleOnSwipedLeft = () => swiperRef.current.swipeLeft();
  const handleOnSwipedRight = () => swiperRef.current.swipeRight();
  const handleOnSwipeBack = () => swiperRef.current.swipeBack((previousCardIndex) => {
    if (previousCardIndex == 1) {
      if (previous)
        setPrevious(false);
    }

    if (previousCardIndex > 0) {
      const card = cards[previousCardIndex - 1];
      setUnFavoriteF(card);
    }
  });

  const handleOnSwipedLeftCallback = (index) => {
    if (!previous)
      setPrevious(true);
  };

  const handleOnSwipedRightCallback = (index) => {
    if (!previous)
      setPrevious(true);
    const card = cards[index];
    setFavoriteF(card);
  };

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Button mode="text" color="red" uppercase={false} onPress={handleOnSwipeBack} disabled={!previous}>Undo</Button>
        <Title>My Mars</Title>
        <TouchableOpacity
          style={styles.headerRightButton}
          onPress={() => navigation.push("Favorite")}
        >
          <FontAwesome5
            name="heart"
            size={20}
            color="red"
          />
        </TouchableOpacity>
      </View>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {loading ?
          <Portal>
            <ActivityIndicator 
              animating={true}
              size="large"
              style={styles.loadingContainer}/>
          </Portal>
        : <View style={styles.container}>
            <Swiper
              ref={swiperRef}
              cardIndex={0}
              cards={cards}
              keyExtractor={(card) => card.key}
              cardVerticalMargin={80}
              renderCard={(card) => <Card card={card}/>}
              backgroundColor="transparent"
              onSwipedAll={handleOnSwipedAllCards}
              onSwipedLeft={handleOnSwipedLeftCallback}
              onSwipedRight={handleOnSwipedRightCallback}
              verticalSwipe={false}
              stackSize={4}
              stackSeparation={-20}
              overlayLabels={{
                left: {
                  title: "NOPE",
                  element: <OverlayLabel label="NOPE" color="#e5566d"/>,
                  style: {
                    wrapper: styles.overlayWrapperLeft,
                  },
                },
                right: {
                  title: "LIKE",
                  element: <OverlayLabel label="LIKE" color="#4ccc93"/>,
                  style: {
                    wrapper: styles.overlayWrapperRight,
                  },
                }
              }}
              showSecondCard
              animateOverlayLabelsOpacity
              animateCardOpacity
              swipeBackCard
            />
            {!swipedAllCards &&
            <View style={styles.bottomContainer}>
              <FAB
                style={styles.fabDislike}
                icon="thumb-down-outline"
                color="white"
                onPress={handleOnSwipedLeft}
              />
              <FAB
                style={styles.fabLike}
                icon="thumb-up-outline"
                color="white"
                onPress={handleOnSwipedRight}
              />
            </View>}
          </View>
        }
        {renderHeader()}
      </View>
    </SafeAreaView>
  );
};



export default HomeScreen;
