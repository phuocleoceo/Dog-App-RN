import { BaseModel, types } from 'expo-sqlite-orm'
import * as  SQLite from 'expo-sqlite'

export default class DogContext extends BaseModel
{
    constructor(obj)
    {
        super(obj);
    }

    static get database()
    {
        return async () => SQLite.openDatabase("dogGK.db");
    }

    static get tableName()
    {
        return "dog";
    }

    static searchDog(name)
    {
        const sql = `SELECT * FROM dog WHERE name LIKE '%${name}%'`;
        const params = [];
        return this.repository.databaseLayer.executeSql(sql, params).then(({ rows }) => rows);
    }

    static get columnMapping()
    {
        return {
            id: { type: types.INTEGER, primary_key: true },
            name: { type: types.TEXT },
            bred_for: { type: types.TEXT },
            breed_group: { type: types.TEXT },
            life_span: { type: types.TEXT },
            origin: { type: types.TEXT },
            temperament: { type: types.TEXT },
            url: { type: types.TEXT },
            height_imperial: { type: types.TEXT },
            height_metric: { type: types.TEXT },
            weight_imperial: { type: types.TEXT },
            weight_metric: { type: types.TEXT },
            isHeart: { type: types.INTEGER }
        }
    }
}