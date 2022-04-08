import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import { Card, IconButton, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, View, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import DogEntity from '../models/DogEntity';
import { useSelector } from 'react-redux';
import Swiper from "react-native-swiper";
import useDog from "../hooks/useDog";

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Home({ navigation })
{
    const { listDog } = useSelector(state => state.dog);
    const { Get_Dog_By_Id } = useDog();

    const handlePressCard = (id) =>
    {
        Get_Dog_By_Id(id);
        navigation.navigate("Detail");
    };

    //---------------------------------------------------------------------------
    const [currentWidth, setcurrentWidth] = useState(SCREEN_WIDTH);
    useEffect(() =>
    {
        Dimensions.addEventListener('change', ({ window: { width, height } }) =>
        {
            if (width < height) setcurrentWidth(SCREEN_WIDTH);
            else setcurrentWidth(SCREEN_HEIGHT);
        })
    }, []);

    const _dataProvider = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(listDog);

    const _layoutProvider = new LayoutProvider(
        (index) => _dataProvider.getDataForIndex(index),
        (type, dim) => { dim.width = currentWidth / 2 - 5; dim.height = 300; })

    const _rowRenderer = (type, data) => 
    {
        const dog = new DogEntity(data);
        return (
            <Swiper key={dog.id}
                style={styles.wrapper}
                showsButtons={false}
                showsPagination={false}
                loop={false}
            >
                <Card style={styles.dogItem} onPress={() => handlePressCard(dog.id)}>
                    <Card.Cover source={{ uri: dog.url }} />
                    <Card.Title
                        title={dog.name}
                        subtitle={dog.bred_for}
                        right={() => <IconButton icon="heart" />}
                    />
                </Card>
                <Card style={styles.dogDetail} onPress={() => handlePressCard(id)}>
                    <Card.Content>
                        <Title style={styles.detailTitle}>{dog.name}</Title>
                        <Paragraph style={styles.detailLabel}>Origin:</Paragraph>
                        <Paragraph style={styles.detailContent}>{dog.origin}</Paragraph>
                        <Paragraph style={styles.detailLabel}>Life Span:</Paragraph>
                        <Paragraph style={styles.detailContent}>{dog.life_span}</Paragraph>
                        <Paragraph style={styles.detailLabel}>Temperament:</Paragraph>
                        <Paragraph style={styles.detailContent}>{dog.temperament}</Paragraph>
                    </Card.Content>
                </Card>
            </Swiper>
        )
    }
    //---------------------------------------------------------------------------

    return (
        <View style={styles.container}>
            {
                listDog.length > 0 &&
                <RecyclerListView
                    style={{ flex: 1 }}
                    rowRenderer={_rowRenderer}
                    dataProvider={_dataProvider}
                    layoutProvider={_layoutProvider}
                    canChangeSize={true}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        minHeight: 1,
        minWidth: 1,
    },
    wrapper: {},
    dogItem: {
        flex: 1,
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: "#e3e1dc"
    },
    dogDetail: {
        flex: 1,
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: "#e3e1dc"
    },
    detailTitle: {
        fontWeight: "bold",
        fontSize: 17
    },
    detailLabel: {
        fontWeight: "bold",
        fontSize: 15
    },
    detailContent: {
        fontSize: 10
    }
});