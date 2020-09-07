import axios from "axios";

type Form = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  message: string;
};

type Email = {
  fist_name: string;
  last_name: string;
  phone: number;
  receiver: string;
  message: string;
  sender: string;
  subject: string;
};
// axios.defaults.headers.common["Content-Type"] =
//   "application/x-www-form-urlencoded";
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export const sendEmail = async (formData: FormData) => {
  const response = await axios.post(
    "https://vxkres7ttj.execute-api.ap-southeast-2.amazonaws.com/dev/sendEmail"
  );
  return response;
};

export async function fetchAPI(formData: FormData) {
  const res = await fetch(
    "https://vxkres7ttj.execute-api.ap-southeast-2.amazonaws.com/dev/sendEmail",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "[POST, OPTIONS]",
      },
      body: JSON.stringify(formData),
    }
  );

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}
