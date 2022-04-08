export default class DogEntity
{
    constructor(dogAPI)
    {
        this.id = dogAPI.id;
        this.name = dogAPI.name;
        this.bred_for = dogAPI.bred_for;
        this.breed_group = dogAPI.breed_group;
        this.life_span = dogAPI.life_span;
        this.origin = dogAPI.origin;
        this.temperament = dogAPI.temperament;
        this.url = dogAPI.url;
        this.height_imperial = isUdf(dogAPI.height) ? "" : dogAPI.height.imperial;
        this.height_metric = isUdf(dogAPI.height) ? "" : dogAPI.height.metric;
        this.weight_imperial = isUdf(dogAPI.weight) ? "" : dogAPI.weight.imperial;
        this.weight_metric = isUdf(dogAPI.weight) ? "" : dogAPI.weight.metric;
    }
}

const isUdf = (field) => typeof field === "undefined";