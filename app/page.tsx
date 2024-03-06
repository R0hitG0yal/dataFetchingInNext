
import axios from "axios";

async function getUserDetails() {
  const response = await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );
  return response.data;
}
async function getMyDetails() {
  //bad way as we are sending a http req from next server to itself in this case.
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}

export default async function Home() {
  const userData = await getMyDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userData?.name}</div>

          {userData?.email}
        </div>
      </div>
    </div>
  );
}
