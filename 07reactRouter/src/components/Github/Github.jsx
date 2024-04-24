import React, { useState, useEffect } from 'react';

 function Github() {
  const [followerData, setFollowerData] = useState({});

  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
      .then((response)=>response.json())
      .then((data)=> {
        setFollowerData(data);
        console.log(data); // Log the fetched data instead of followerData
      });
  }, []);

  return (
    <div className='text-center bg-gray-600 text-xl text-white p-4'>
      Github followers: {followerData.followers}
    </div>
  );
}


export default Github;

// export const gitHubInfoLoader = async () => {

// const response = await fetch('https://api.github.com/users/hiteshchoudhary')
// return response.json()

// }