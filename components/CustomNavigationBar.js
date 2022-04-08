import { Appbar, Searchbar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import useDog from "../hooks/useDog";


export default function CustomNavigationBar({ navigation, back })
{
    const { isSearching } = useSelector(state => state.dog);
    const { Set_Searching, Set_Search_Dog } = useDog();

    const handleShow = () =>
    {
        if (isSearching) Set_Search_Dog("");
        Set_Searching();
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