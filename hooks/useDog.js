import { SET_CURRENT_DOG, SET_LIST_DOG } from "../redux/slices/dogSlice";
import DogContext from "../models/DogContext";
import DogEntity from "../models/DogEntity";
import { GET_DOG_API } from "../api/apiDog";
import { useDispatch } from 'react-redux';

export default function useDog()
{
    const dispatch = useDispatch();

    const Create_Table_Dog = async () =>
    {
        await DogContext.createTable();
        console.log(">> Created table Dog !");
    };

    const Drop_Table_Dog = async () =>
    {
        await DogContext.dropTable();
    };

    const Get_Dog_From_API = async () =>
    {
        const { data: dog_api } = await GET_DOG_API();
        dog_api.forEach(dogAPI =>
        {
            DogContext.create(new DogEntity(dogAPI));
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
        const dogAPI = await DogContext.find(id);
        dispatch(SET_CURRENT_DOG({
            id: dogAPI.id, name: dogAPI.name,
            bred_for: dogAPI.bred_for, breed_group: dogAPI.breed_group,
            life_span: dogAPI.life_span, origin: dogAPI.origin,
            temperament: dogAPI.temperament, url: dogAPI.url,
            height_imperial: dogAPI.height_imperial, height_metric: dogAPI.height_metric,
            weight_imperial: dogAPI.weight_imperial, weight_metric: dogAPI.weight_metric
        }));
        // Lỗi Serialize làm app delay nhiều
        // dispatch(SET_CURRENT_DOG(new DogEntity(dogAPI)));
    };

    const Set_Search_Dog = async (name) =>
    {
        const searchList = await DogContext.searchDog(name);
        dispatch(SET_LIST_DOG(searchList));
    };

    const Destroy_All_Dog = () =>
    {
        DogContext.destroyAll();
    };

    return {
        Create_Table_Dog, Drop_Table_Dog, Get_Dog_From_API, Get_Dog_From_DB,
        Get_Dog_By_Id, Set_Search_Dog, Destroy_All_Dog
    };
}