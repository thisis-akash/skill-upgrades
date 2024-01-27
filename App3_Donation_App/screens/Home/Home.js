import {
    SafeAreaView, View,
    Text,
    ScrollView,
    Image,
    Pressable,
    FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';

import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../components/Header/Header";
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import { updateSelectedCategoryId } from '../../redux/reducers/Categories';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import { Routes } from '../../navigation/Routes';
import { updateSelectedDonationId } from '../../redux/reducers/Donations';
import { resetToInitialState } from '../../redux/reducers/User';
import { logOut } from '../../api/User';

import style from './style';

const Home = (props) => {

    const dispatch = useDispatch();

    const user = useSelector(state => state.user);
    const categories = useSelector(state => state.categories);
    const donations = useSelector(state => state.donations);

    const homePageTitle = `${user.displayName} 👋`;

    const [categoryPage, setCategoryPage] = useState(1);
    const [categoryList, setCategoryList] = useState([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);
    const [donationItems, setDonationItems] = useState([]);

    const categoryPageSize = 4;

    useEffect(() => {

        setIsLoadingCategories(true);
        setCategoryList(
            pagination(categories.categories, categoryPage, categoryPageSize)
        );
        setCategoryPage(prev => prev + 1);
        setIsLoadingCategories(false);

    }, []);

    useEffect(() => {
        const items = donations.items.filter(value =>
            value.categoryIds.includes(categories.selectedCategoryId)
        );
        setDonationItems(items);
            }, [categories.selectedCategoryId]);

    const pagination = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        if (startIndex >= items.length) {
            return [];
        }
        return items.slice(startIndex, endIndex);
    };

    const loadMoreCategories = () => {
        if (isLoadingCategories) return;
        setIsLoadingCategories(true);
        let newData = pagination(
            categories.categories,
            categoryPage,
            categoryPageSize,
        );
        if (newData.length > 0) {
            setCategoryList(prevState => [...prevState, ...newData]);
            setCategoryPage(prevState => prevState + 1);
        }
        setIsLoadingCategories(false);
    }

    const onLogout = async () => {
        dispatch(resetToInitialState());
        await logOut();

        props.navigation.navigate(Routes.Login);
    }

    const donationsListing = (
        <View style={style.donationItemsContainer}>

            {donationItems.map(value => {
                const categoryInformation = categories.categories.find(
                    val => val.categoryId === categories.selectedCategoryId
                );
                                return (
                    <View
                        key={value.donationItemId}
                        style={style.singleDonationItem}>
                        <SingleDonationItem
                            onPress={selectedDonationId => {
                                dispatch(updateSelectedDonationId(selectedDonationId));
                                props.navigation.navigate(Routes.SingleDonationItem, {
                                    categoryInformation,
                                });
                            }}
                            donationItemId={value.donationItemId}
                            uri={value.image}
                            donationTitle={value.name}
                            badgeTitle={categoryInformation.name}
                            price={parseFloat(value.price)}
                        />
                    </View>
                );
            })}

        </View>
    );

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={style.header}>
                    <View>
                        <Text style={style.headerIntroText}>Hello, </Text>
                        <View style={style.username}>
                            <Header
                                title={homePageTitle}
                            />
                        </View>
                    </View>
                    <View>
                        <Image
                            source={{ uri: user.profileImage }}
                            style={style.profileImage}
                            resizeMode={'contain'}
                        />
                        <Pressable
                            onPress={() => onLogout()} >
                            <Header type={3} title={'Logout'} color={'#156CF7'} />
                        </Pressable>
                    </View>
                </View>


                <View style={style.searchBox}>
                    <Search />
                </View>


                <Pressable style={style.highlightedImageContainer}>
                    <Image
                        style={style.highlightedImage}
                        source={require('../../assets/images/highlighted_image.png')}
                        resizeMode={'contain'}
                    />
                </Pressable>


                <View style={style.categoryHeader}>
                    <Header title={'Select Category'} type={2} />
                </View>


                <View style={style.categories}>
                    <FlatList
                        onEndReachedThreshold={0.5}
                        onEndReached={() => loadMoreCategories()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={categoryList}
                        renderItem={({ item }) => (
                            <View style={style.categoryItem} key={item.categoryId}>
                                <Tab
                                    tabId={item.categoryId}
                                    onPress={value => dispatch(updateSelectedCategoryId(value))}
                                    title={item.name}
                                    isInactive={item.categoryId !== categories.selectedCategoryId}
                                />
                            </View>
                        )}
                    />
                </View>


                {donationItems.length ? donationsListing : null}

            </ScrollView>
        </SafeAreaView>
    );

};

export default Home;