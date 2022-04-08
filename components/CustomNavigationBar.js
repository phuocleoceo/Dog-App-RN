import { Appbar, Searchbar } from 'react-native-paper';
import React, { useState } from "react";
import useDog from "../hooks/useDog";


export default function CustomNavigationBar({ navigation, back })
{
    const [isSearching, setIsSearching] = useState(false);
    const { Set_Search_Dog } = useDog();

    const handleShow = () =>
    {
        if (isSearching) Set_Search_Dog("");
        setIsSearching(!isSearching);
    };

    const handleSearch = (query) => Set_Search_Dog(query);

    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            {
                (isSearching && !back) ?
                    <Searchbar
                        placeholder="Search"
                        style={{ width: "90%" }}
                        onChangeText={handleSearch}
                    /> :
                    <Appbar.Content title="Dog App" />
            }
            {!back && <Appbar.Action icon="account-search" onPress={handleShow} />}
        </Appbar.Header>
    );
}