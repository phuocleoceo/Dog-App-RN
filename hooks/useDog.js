import { SET_CURRENT_DOG, SET_LIST_DOG, SET_SEARCHING, SET_SEARCH_DOG } from "../redux/slices/dogSlice";
import { useDispatch, useSelector } from 'react-redux';
import DogContext from "../models/DogContext";
import { GET_DOG_API } from "../api/apiDog";

export default function useDog()
{
    const { isSearching } = useSelector(state => state.dog);
    const dispatch = useDispatch();

    const Create_Table_Dog = async () =>
    {
        await DogContext.createTable();
        console.log(">> Created table Dog !");
    };

    const Drop_Table_Dog = () =>
    {
        DogContext.dropTable();
    };

    const Get_Dog_From_API = async () =>
    {
        const dog_api = await GET_DOG_API();
        dog_api.forEach(dog =>
        {
            const { id, name, bred_for, breed_group,
                life_span, origin, temperament, url } = dog;
            const { imperial: height_imperial, metric: height_metric } = dog.height;
            const { imperial: weight_imperial, metric: weight_metric } = dog.weight;
            DogContext.create({
                id, name, bred_for, breed_group, life_span, origin, temperament,
                url, height_imperial, height_metric, weight_imperial, weight_metric
            });
        });
        dispatch(SET_LIST_DOG(await DogContext.query()));
    }

    const Get_Dog_From_DB = async () =>
    {
        const dogDB = await DogContext.query();
        console.log(">> Dog quantity : ", dogDB.length);
        if (dogDB.length == 0)
            await Get_Dog_From_API();
        else dispatch(SET_LIST_DOG(dogDB));
    };

    const Get_Dog_By_Id = async (id) =>
    {
        const dog = await DogContext.find(id);
        dispatch(SET_CURRENT_DOG(dog));
    };

    const Set_Searching = () =>
    {
        dispatch(SET_SEARCHING(!isSearching));
    };

    const Set_Search_Dog = async (name) =>
    {
        // const searchList = listDog.filter(c =>
        //     c.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
        const searchList = await DogContext.query({
            columns: "name",
            where: {
                name_cont: name
            }
        });
        dispatch(SET_SEARCH_DOG(searchList));
    };

    const Destroy_All_Dog = () =>
    {
        DogContext.destroyAll();
    };

    return {
        Create_Table_Dog, Drop_Table_Dog, Get_Dog_From_API, Get_Dog_From_DB,
        Get_Dog_By_Id, Set_Searching, Set_Search_Dog, Destroy_All_Dog
    };
}