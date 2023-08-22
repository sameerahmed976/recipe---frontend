import { useGetMeQuery } from "../../redux/services/authService";

const Profile = () => {
  const { data, isLoading } = useGetMeQuery();
  // console.log(data);

  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }

  return (
    <>
      <h3>Name : {data?.name} </h3>
      <h3>Email : {data?.email} </h3>
    </>
  );
};

export default Profile;
