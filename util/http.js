import axios from "axios";




export async function getRoomsData(name) {
  try {
    const response = await axios.get(url + "rooms?type=" + name);

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

export async function postLogin({ email, password }) {
  try {
    console.log("This is the login Dta");
    console.log(email, password);
    const response = await axios.post(Loginurl, {
      email: email,
      password: password,
    });
    // console.log(response);
    return response;
  } catch (err) {
    console.log("this is err");
    console.log(err);
    if (typeof err.response.data.message !== "undefined") {
      let errObj = {
        status: err.response.status,
        message: err.response.data.message,
      };

      return errObj;
    }
  }
}

export async function postRegister({
  firstname,
  lastname,
  email,
  password,
  phonenumber,
}) {
  try {
    console.log("**********************************&&&&&&&&&&&&&");
    console.log(firstname, lastname, email, phonenumber, password);
    console.log("**********************************&&&&&&&&&&&&&");
    const response = await axios.post(registerUrl, {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      phoneNumber: phonenumber,
    });
    console.log(response);
    return response;
  } catch (err) {
    console.log("this is err");
    console.log(err);
    console.log(err.response.data);
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    console.log(err.response.status);
    console.log(err.response.data);
    console.log("&&&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    console.log(typeof err.response.data);
    console.log(typeof err.response);
    if (typeof err.response.data !== "undefined") {
      let errObj = {
        status: err.response.status,
        message: err.response.data.message,
      };

      return errObj;
    }
  }
}

export async function getRoomType() {
  try {
    const response = await axios.get(roomUrl);
    console.log(response.data);
   
  } catch (err) {
    console.log(err);
  }
}

