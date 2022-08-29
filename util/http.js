import axios from "axios";

let url = "http://192.168.100.10:3001/rooms?type=";

export async function getRoomsData(name) {
  try {
    const response = await axios.get(url + name);

    console.log(response.data.count);
    console.log("***************************************8");
    const price = response.data.rooms[0].price;
    console.log("***************************************8");

    return {
      count: response.data.count,
      price: price,
      data: response.data.rooms,
    };
  } catch (err) {
    console.log("err", err);
  }
}
