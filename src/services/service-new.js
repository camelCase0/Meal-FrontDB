export default class MealService {
  _apiBase = "http://159.89.14.15:3452";

  getResourse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, recieved ${res.status}`);
    }
    return await res.json();
  };

  postResourse = async (url, data = {}) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, recieved ${res.status}`);
    }
    return await res.json();
  };

  putResourse = async (url, data = {}) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, recieved ${res.status}`);
    }
    return await res.json();
  };

  deleteResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        accept: "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    return await res.json();
  };

  getIngredient = async () => {
    const res = await this.getResourse(`/ingredient/`);
    return res;
  };

  getIngredientById = async (id) => {
    const res = await this.getResourse(`/ingredient/${id}`);
    return res;
  };

  getFriedge = async () => {
    const res = await this.getResourse(`/fridge/`);
    return res;
  };

  postIngredient = async (data) => {
    const res = await this.postResourse(`/ingredient/`, data);
    return res;
  };

  putIngredient = async (id, data) => {
    const res = await this.putResourse(`/ingredient/${id}`, data);
    return res;
  };

  deleteIngredient = async (id) => {
    const res = await this.deleteResource(`/ingredient/${id}`);
    return res;
  };

  getMeal = async () => {
    const res = await this.getResourse(`/meal/`);
    return res;
  };

  getMealById = async (id) => {
    const res = await this.getResourse(`/meal/${id}`);
    return res;
  };

  postMeal = async (data) => {
    const res = await this.postResourse(`/meal`, data);
    return res;
  };

  deleteMeal = async (id) => {
    const res = await this.deleteResource(`/meal/${id}`);
    return res;
  };

  getReceipt = async () => {
    const res = await this.getResourse(`/receipt/`);
    return res;
  };

  postReceipt = async (id, data) => {
    const res = await this.postResourse(`/receipt/${id}`, data);
    return res;
  };

  deleteReceipt = async (id) => {
    const res = await this.deleteResource(`/receipt/${id}`);
    return res;
  };
}

// serv = new MealService();
// const DataIngredient = {
//   name: "String",
//   image: "String",
//   category: "Vegetables",
//   stored_amount: 2,
//   measure: "pieces",
//   expiry_date: "2023-02-06",
// };
// const DataMeal = {
//   id: 0,
//   name: "string",
//   image: "string",
//   receipt: "string",
//   difficulty: 5,
// };
// const DataReceipt = [
//   {
//     ingredient_id: 0,
//     amount: 0,
//   },
// ];

//serv.getIngredient().then((data)=>console.log(data))
//serv.putIngredient(0, DataIngredient).then((data)=> console.log(data))
//serv.getIngredientById(0).then((data)=>console.log(data))

//serv.getFriedge().then((data) => console.log(data))
//serv.postMeal(DataMeal).then((data) => console.log(data))
//serv.getMeal().then((data) => console.log(data))
//serv.deleteMeal(0).then((data) => console.log(data))
