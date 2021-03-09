import axios from "axios";

class Api {
  async getPersons(url: string | null) {
    if (!url) url = "https://rickandmortyapi.com/api/character/";

    try {
      const res = await axios.get(url);
      return res.data;
    } catch (e) {
      return { error: JSON.stringify(e.response.data) };
    }
  }

  async getPerson(id: number) {
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );

      return res.data;
    } catch (e) {
      return { error: e.response.data.error };
    }
  }
}

type blogApiType = {
  getPersons: (url: string | null) => Promise<any>;
  getPerson: (id: number) => Promise<any>;
};
const blogApi: blogApiType = new Api();

export default blogApi;
