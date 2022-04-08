import callAPI from "./apiService";

export const GET_DOG_API = () => callAPI.get("DevTides/DogsApi/master/dogs.json");