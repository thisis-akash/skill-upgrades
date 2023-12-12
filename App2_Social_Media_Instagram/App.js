/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, View, TouchableOpacity, FlatList
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Title from './components/Title/Title';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';

const APP_TITLE = `Let's Explore`;
const initialState = {
  storiesFeedCurrentPage: 1,
  storiesFeedRenderedData: [],
  isLoadingStoriesFeed: false
};

function App() {
  const userStories = [{
    id: 1,
    firstName: 'User 1',
    profileImage: require('./assets/images/default_profile.png')
  }, {
    id: 2,
    firstName: 'User 2',
    profileImage: require('./assets/images/default_profile.png')
  }, {
    id: 3,
    firstName: 'User 3',
    profileImage: require('./assets/images/default_profile.png')
  }, {
    id: 4,
    firstName: 'User 4',
    profileImage: require('./assets/images/default_profile.png')
  }, {
    id: 5,
    firstName: 'User 5',
    profileImage: require('./assets/images/default_profile.png')
  }, {
    id: 6,
    firstName: 'User 6',
    profileImage: require('./assets/images/default_profile.png')
  }, {
    id: 7,
    firstName: 'User 7',
    profileImage: require('./assets/images/default_profile.png')
  }, {
    id: 8,
    firstName: 'User 8',
    profileImage: require('./assets/images/default_profile.png')
  }, {
    id: 9,
    firstName: 'User 9',
    profileImage: require('./assets/images/default_profile.png')
  }];

  const storiesFeedPageSize = 4;
  const [storiesFeedCurrentPage, setStoriesFeedCurrentPage] = useState(initialState.storiesFeedCurrentPage);
  const [storiesFeedRenderedData, setStoriesFeedRenderedData] = useState(initialState.storiesFeedRenderedData);
  const [isLoadingStoriesFeed, setIsLoadingStoriesFeed] = useState(initialState.isLoadingStoriesFeed);

  useEffect(() => {

    setIsLoadingStoriesFeed(true);

    const getInitialData = pagination(userStories, 1, storiesFeedPageSize);
    setStoriesFeedRenderedData(getInitialData);

    setIsLoadingStoriesFeed(false);

  }, []);

  const pagination = (data, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return (startIndex >= data.length) ? [] : data.slice(startIndex, endIndex);
  };

  const loadMoreStories = () => {
    if (isLoadingStoriesFeed) return;

    setIsLoadingStoriesFeed(true);

    const contentToAppend = pagination(
      userStories,
      storiesFeedCurrentPage + 1,
      storiesFeedPageSize,
    );

    if (contentToAppend.length) {
      setStoriesFeedCurrentPage(storiesFeedPageSize + 1);
      setStoriesFeedRenderedData(prev => [...prev, ...contentToAppend]);
    }

    setIsLoadingStoriesFeed(false);
  }

  return (
    <SafeAreaView>


      <View style={globalStyle.header}>


        <Title title={APP_TITLE} />

        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} color='#898DAE' size={20} />
        </TouchableOpacity>


      </View>


      <View style={globalStyle.userStoryContainer}>


        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          onEndReachedThreshold={0.5}
          onEndReached={() => loadMoreStories()}
          data={storiesFeedRenderedData}

          renderItem={({ item }) => {
            const storyKey = `story_${item.id}`;
            return <UserStory key={storyKey} firstName={item.firstName} profileImage={item.profileImage} />
          }} >

        </FlatList>


      </View>


    </SafeAreaView>
  );
}

export default App;
