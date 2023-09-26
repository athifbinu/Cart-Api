import testImg from "../images/product_09.jpg";
import axios from "axios";


const fetchData = async () => {
  try {
    const headers = {
      Authorization: "Bearer EqzC2SPUcFRrrJKKL4ngAGAnZDIN8ZLS",
    };
    // const id = 100;
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
    if(response){

      return response.data.data.products
    }
    // console.log(response.data.data);
  } catch (error) {
    console.log(error);
  }
};
const products = await fetchData();

export default products;
