import axios from 'axios';

class Api {
  async getPersons(url = 'https://rickandmortyapi.com/api/character/') {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (e) {
      return { error: JSON.stringify(e.response.data) };
    }
  }

  async getPerson(id) {
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      return res.data;
    } catch (e) {
      return { error: JSON.stringify(e.response.data) };
    }
  }
}

const blogApi = new Api();
export default blogApi;
