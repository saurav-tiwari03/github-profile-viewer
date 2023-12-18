import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Home = (props) => {
  const searchName = props.search;
  const [name,setName] = useState("");
  const [bio,setBio] = useState("");
  const [company,setCompany] = useState();
  const [id,setId] = useState("");
  const [avatarUrl,setAvatarUrl] = useState("");
  const [followers,setFollowers] = useState("");
  const [following,setFollowing] = useState("");
  const [viewCounter,setViewCounter] = useState("");

  useEffect( () => {
    async function userDtails () {
      try {
        const response = await axios.get(`https://api.github.com/users/${searchName}`);
        setName(response.data.name);
        setBio(response.data.bio)
        setCompany(response.data.company);
        setId(response.data.id)
        setAvatarUrl(response.data.avatar_url)
        setFollowers(response.data.followers)
        setFollowing(response.data.following)
      } catch (error) {
        console.log(error);
      }
    }
    async function viewCounterGithub () {
      try {
        const response = await axios.get(`https://komarev.com/ghpvc/?username=${searchName}&color=dc143c`);
        console.log(response)
        setViewCounter(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    viewCounterGithub();
    userDtails();
  })

  if(company === "") {
    setCompany("NUll");
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='border-2 border-black w-[500px] p-4'>
        <div className='flex items-center gap-4'>
          <img src={avatarUrl} alt="" width={100} className='rounded-full' />
          <div>
            <p><span className='font-semibold'>Name :</span> {name} ({id})</p>
            <p><span className='font-semibold'>Bio : </span>{bio}</p>
            <img src={viewCounter} alt="" />
          </div>
        </div>
        <p><span className='font-semibold'>Institution :</span> {company}</p>
        <table>
          <tr>
            <td className='font-semibold'>
              Followers : 
            </td>
            <td>
              {followers}
            </td>
          </tr>
          <tr>
            <td className='font-semibold'>
              Following :
            </td>
            <td>
              {following}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
