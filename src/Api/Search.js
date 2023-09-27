import axios from "axios";

const fetchData = async () => {
  try {
    const headers = {
      Authorization: "Bearer EqzC2SPUcFRrrJKKL4ngAGAnZDIN8ZLS",
    };

    const response = await axios.post(
      `http://caffa.smsoman.com/api/V1/products`,
      {
        currentpage: 1,
        pagesize: 100,
        sortorder: {
          field: "menu_name",
          direction: "desc",
        },
        searchstring: "",
        filter: {
          category: "",
        },
      },
      { headers }
    );
    if (response) {
      return response.data.data.products;
    }
  } catch (error) {
    console.log(error);
  }
};
const Searchproducts = await fetchData();

export default Searchproducts;
