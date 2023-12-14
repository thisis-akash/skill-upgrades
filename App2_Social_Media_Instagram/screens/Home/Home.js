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

import Title from '../../components/Title/Title';
import style from './style';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import { scaleFontSize } from '../../assets/styles/scaling';
import globalStyle from '../../assets/styles/globalStyle';
import { Routes } from '../../navigation/Routes';

const APP_TITLE = `Let's Explore`;
const initialState = {
  userStoriesFeedCurrentPage: 1,
  userStoriesFeedRenderedData: [],
  isLoadingUserStoriesFeed: false,
  userPostsCurrentPage: 1,
  userPostsRenderedData: [],
  isLoadingUserPosts: false
};

function Home(props) {

  const { navigation } = props;

  // Static data
  const userStories = [{
    id: 1,
    firstName: 'User 1',
    profileImage: require('../../assets/images/default_profile.png')
  }, {
    id: 2,
    firstName: 'User 2',
    profileImage: require('../../assets/images/default_profile.png')
  }, {
    id: 3,
    firstName: 'User 3',
    profileImage: require('../../assets/images/default_profile.png')
  }, {
    id: 4,
    firstName: 'User 4',
    profileImage: require('../../assets/images/default_profile.png')
  }, {
    id: 5,
    firstName: 'User 5',
    profileImage: require('../../assets/images/default_profile.png')
  }, {
    id: 6,
    firstName: 'User 6',
    profileImage: require('../../assets/images/default_profile.png')
  }, {
    id: 7,
    firstName: 'User 7',
    profileImage: require('../../assets/images/default_profile.png')
  }, {
    id: 8,
    firstName: 'User 8',
    profileImage: require('../../assets/images/default_profile.png')
  }, {
    id: 9,
    firstName: 'User 9',
    profileImage: require('../../assets/images/default_profile.png')
  }];

  // Static data
  const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston, MA',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Worcester, MA',
      likes: 1301,
      comments: 25,
      bookmarks: 70,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Worcester, MA',
      likes: 100,
      comments: 8,
      bookmarks: 3,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 3,
    },
    {
      firstName: 'Nata',
      lastName: 'Vacheishvili',
      location: 'New York, NY',
      likes: 200,
      comments: 16,
      bookmarks: 6,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 4,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      likes: 2000,
      comments: 32,
      bookmarks: 12,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 5,
    },
  ];

  // State variable for user stories
  const storiesFeedPageSize = 4;
  const [userStoriesFeedCurrentPage, setUserStoriesFeedCurrentPage] = useState(initialState.userStoriesFeedCurrentPage);
  const [userStoriesFeedRenderedData, setUserStoriesFeedRenderedData] = useState(initialState.userStoriesFeedRenderedData);
  const [isLoadingUserStoriesFeed, setIsLoadingUserStoriesFeed] = useState(initialState.isLoadingUserStoriesFeed);

  // State variable for user posts
  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(initialState.userPostsCurrentPage);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState(initialState.userPostsRenderedData);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(initialState.isLoadingUserPosts);

  useEffect(() => {

    // User Stories
    setIsLoadingUserStoriesFeed(true);

    const getInitialUserStories = pagination(userStories, 1, storiesFeedPageSize);
    setUserStoriesFeedRenderedData(getInitialUserStories);

    setIsLoadingUserStoriesFeed(false);


    // User Posts
    setIsLoadingUserPosts(true);

    const getInitialPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialPosts);

    setIsLoadingUserPosts(false);

  }, []);

  const pagination = (data, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return (startIndex >= data.length) ? [] : data.slice(startIndex, endIndex);
  };

  const loadMoreStories = () => {
    if (isLoadingUserStoriesFeed) return;

    setIsLoadingUserStoriesFeed(true);

    const contentToAppend = pagination(
      userStories,
      userStoriesFeedCurrentPage + 1,
      storiesFeedPageSize,
    );

    if (contentToAppend.length) {
      setUserStoriesFeedCurrentPage(storiesFeedPageSize + 1);
      setUserStoriesFeedRenderedData(prev => [...prev, ...contentToAppend]);
    }

    setIsLoadingUserStoriesFeed(false);
  }

  const loadMorePosts = () => {
    if (isLoadingUserPosts) return;

    setIsLoadingUserPosts(true);

    const contentToAppend = pagination(
      userPosts,
      userPostsCurrentPage + 1,
      userPostsPageSize,
    );

    if (contentToAppend.length) {
      setUserPostsCurrentPage(userPostsPageSize + 1);
      setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
    }

    setIsLoadingUserPosts(false);
  }

  const listHeaderComponent = (
    <>
      <View style={style.header}>


        <Title title={APP_TITLE} />

        <TouchableOpacity style={style.messageIcon} onPress={() => navigation.navigate(Routes.Profile)} >
          <FontAwesomeIcon icon={faEnvelope} color='#898DAE' size={scaleFontSize(20)} />
        </TouchableOpacity>


      </View>


      <View style={style.userStoryContainer}>


        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          onEndReachedThreshold={0.5}
          onEndReached={() => loadMoreStories()}
          data={userStoriesFeedRenderedData}

          renderItem={({ item }) => {
            const storyKey = `story_${item.id}`;
            return <UserStory key={storyKey} firstName={item.firstName} profileImage={item.profileImage} />
          }} />


      </View>
    </>
  );

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>

      <View>


        <FlatList data={userPostsRenderedData}
          ListHeaderComponent={listHeaderComponent}
          onEndReachedThreshold={0.5}
          onEndReached={() => loadMorePosts()}
          showsVerticalScrollIndicator={false}

          renderItem={({ item }) => {
            const postKey = `post_${item.id}`;
            return (
              <View style={style.userPostContainer}>
                <UserPost
                  profileImage={item.profileImage} image={item.image} location={item.location}
                  firstName={item.firstName} lastName={item.lastName}
                  likes={item.likes} bookmarks={item.bookmarks} comments={item.comments}
                  key={postKey} />
              </View>
            );
          }} />


      </View>

    </SafeAreaView>
  );
}

export default Home;
