import React from "react";

function Effect() {
  const [user, setList] = React.useState(null);
  const [changeUser, setChangeUser] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        setList(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [changeUser]);

  //   console.log(list ? list[0]["userId"] : "Loading...");

  return (
    <>
      <h1>Use Effect</h1>
      <p>{user ? user.results[0]?.name?.first : "Loading..."}</p>
      <button onClick={() => setChangeUser(!changeUser)}>Change User</button>
    </>
  );
}

export default Effect;
