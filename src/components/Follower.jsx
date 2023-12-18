import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Follower = (props) => {
  const searchUser = props.search;
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    async function searchFollowers() {
      try {
        const response = await axios.get(`https://api.github.com/users/${searchUser}/followers`);
        setFollowers(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    async function searchFollowing() {
      try {
        const response = await axios.get(`https://api.github.com/users/${searchUser}/following`);
        setFollowing(response.data); 
      } catch (error) {
        console.log(error);
      }
    }

    searchFollowers();
    searchFollowing();
  }, [searchUser]);

  return (
    <div className='flex items-center justify-center'>
      <div className='flex justify-around border-2 border-black w-[500px] p-4'>
        <div className=''>
          <h3 className='text-2xl font-bold'>Followers:</h3>
          <ul>
            {followers.map((follow) => (
              <li key={follow.id}>
                <a href={`https://github.com/${follow.login}`} target='_blank' rel='noreferrer'>{follow.login}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div>
            <h3 className='text-2xl font-bold'>Following:</h3>
            <ul>
              {following.map((foll) => (
                <li key={foll.id}>
                  <a href={`https://github.com/${foll.login}`} target='_blank' rel='noreferrer'>{foll.login}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
};
