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
        this.height_imperial = dogAPI.height.imperial;
        this.height_metric = dogAPI.height.metric;
        this.weight_imperial = dogAPI.weight.imperial;
        this.weight_metric = dogAPI.weight.metric;
    }
}