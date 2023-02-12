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
    const res = await this.putResourse(
      `/ingredient/${id}`,
      this._transformPutIngredient(data)
    );
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

  _transformPutIngredient = (data) => {
    const {
      name,
      ingredient_image,
      category,
      stored_amount,
      measure,
      expiry_date,
    } = data;
    return {
      name: name,
      image: ingredient_image,
      category: category,
      stored_amount: stored_amount,
      measure: measure,
      expiry_date: expiry_date,
    };
  };
}
