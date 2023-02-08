export default class MealService {
  _apiBase = "http://159.89.14.15:3452";
  // _apiBase = "http://127.0.0.1:8000";

  getResourse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });

    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, recieved ${res.status}`);
    }
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
    const res = await this.getResourse(`/friedge/`);
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

  getReceipt = async () => {
    const res = await this.getResourse(`/receipt/`);
    return res;
  };
}
