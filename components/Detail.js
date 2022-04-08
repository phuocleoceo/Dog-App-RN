import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { useSelector } from 'react-redux';
import React from 'react';


export default function Detail()
{
    const { currentDog: { name, url, bred_for, breed_group, life_span, origin,
        temperament, height_metric, weight_metric } } = useSelector(state => state.dog);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.avatarIcon}>
                <Image style={styles.avatarImage} source={{ uri: url }} />
            </View>

            <View style={styles.title}>
                <Text style={styles.titleContent}>{name}</Text>
            </View>

            <View style={styles.formControl}>
                <Text style={styles.formLabel}>Breed for:</Text>
                <Text style={styles.formContent}>{bred_for}</Text>
            </View>

            <View style={styles.formControl}>
                <Text style={styles.formLabel}>Breed group:</Text>
                <Text style={styles.formContent}>{breed_group}</Text>
            </View>

            <View style={styles.formControl}>
                <Text style={styles.formLabel}>Life span:</Text>
                <Text style={styles.formContent}>{life_span}</Text>
            </View>

            <View style={styles.formControl}>
                <Text style={styles.formLabel}>Origin:</Text>
                <Text style={styles.formContent}>{origin}</Text>
            </View>

            <View style={styles.formControl}>
                <Text style={styles.formLabel}>Temperament:</Text>
                <Text style={styles.formContent}>{temperament}</Text>
            </View>

            <View style={styles.formControl}>
                <Text style={styles.formLabel}>Height:</Text>
                <Text style={styles.formContent}>{height_metric}</Text>
            </View>

            <View style={styles.formControl}>
                <Text style={styles.formLabel}>Weight:</Text>
                <Text style={styles.formContent}>{weight_metric}</Text>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        minHeight: 1,
        minWidth: 1,
    },
    avatarIcon: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10
    },
    avatarImage: {
        width: "90%",
        height: 210,
        alignSelf: "center"
    },
    title: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10
    },
    titleContent: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center"
    },
    formControl: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
    },
    formLabel: {
        flex: 1,
        padding: 5,
        color: "#8f8c8b",
        fontSize: 15
    },
    formContent: {
        flex: 2,
        padding: 5,
        fontSize: 15
    }
});