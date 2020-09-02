import axios from "axios";

type Form = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  message: string;
};

// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export const sendEmail = async (formData: Form) => {
  const response = await axios.post(
    "https://vxkres7ttj.execute-api.ap-southeast-2.amazonaws.com/dev/sendEmail",
    {}
    // {
    //   ...formData,
    //   source: "michaelcshodges@gmail.com",
    // }
  );
  return response;
};
