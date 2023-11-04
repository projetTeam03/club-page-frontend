import api from "../api";

// post
export async function CreateRecruit(recruitInfo) {
  console.log(recruitInfo);
  const { data } = await api.post(
    "http://27.96.130.189:8080/api/recruit/",
    recruitInfo
  );
  console.log(data);
  return data;
}
