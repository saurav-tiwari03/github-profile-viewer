import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Repositories = (props) => {
  const searchName = props.search;
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchRepo() {
      try {
        const response = await axios.get(`https://api.github.com/users/${searchName}/repos`);
        setRepositories(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRepo();
  }, [searchName]);

  return (
    <div className='flex items-center justify-center'>
      <div className='  border-2 border-black p-4'>
        <h2 className='text-2xl font-semibold mb-4'>Repositories:</h2>
        <table>
          <tr>
            <td className='text-xl font-semibold'>
              RepoName
            </td>
            <td className='text-xl font-semibold text-center px-12'>
              Link
            </td>
            <td className='text-xl font-semibold text-center pl-12'>
              Language
            </td>
          </tr>
          {repositories.map((repo) => (
            <tr key={repo.id} className='border-b-2 border-black'>
              <td className='pl-2 overflow-hidden text-start text-sm '>
                {repo.name}
              </td>
              <td className='px-12 w-[24px] text-center text-sm '>
                <a href={repo.html_url} target='_blank' rel="noreferrer"  className='text-[#f15858] font-semibold'>View</a>
              </td>
              <td className='pl-12 w-[24px] text-sm'>
                {repo.language}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
