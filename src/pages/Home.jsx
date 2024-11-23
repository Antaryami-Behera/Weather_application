import React from 'react';
import Card from '../component/Card';

const Home = () => {
  return (
    <div className='h-[100vh] w-full bg-gray-800'>
      <h1 className='font-semibold pt-3  text-3xl text-white text-center'>Odisha</h1>
      <div className='flex flex-wrap justify-center gap-16 mt-6'>
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index} />
        ))}
    </div>
       <div className='flex flex-wrap justify-center mt-16' >
            <input type="text" placeholder='Search Location' className='h-[50px] w-[400px] rounded-l-2xl px-3'/>
            <input type="button" value="Search" className='h-[50px] w-[100px] rounded-r-2xl border-l-[.6px] border-black bg-white'/>
       </div>

       <div className='w-full flex justify-center'>
       <table className="table-auto w-[800px] border-separate border-spacing-0 border-2 mt-16 rounded-2xl bg-white ">
          <thead>
            <tr>
              <th className="text-left p-4 font-semibold border-b border-gray-300">Pela</th>
              <th className="text-left p-4 font-semibold border-b border-gray-300">Tempreture</th>
              <th className="text-left p-4 font-semibold border-b border-gray-300">Air Pressure</th>
              <th className="text-left p-4 font-semibold border-b border-gray-300">Overral Wether</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border-b border-gray-300">Odisha</td>
              <td className="p-4 border-b border-gray-300">23 c</td>
              <td className="p-4 border-b border-gray-300">1 Atm</td>
              <td className="p-4 border-b border-gray-300 flex items-center">
                Sunny <span className="ml-2 text-yellow-500">☀️</span>
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-300">Odisha</td>
              <td className="p-4 border-b border-gray-300">23 c</td>
              <td className="p-4 border-b border-gray-300">1 Atm</td>
              <td className="p-4 border-b border-gray-300 flex items-center">
                Sunny <span className="ml-2 text-yellow-500">☀️</span>
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-300">Odisha</td>
              <td className="p-4 border-b border-gray-300">23 c</td>
              <td className="p-4 border-b border-gray-300">1 Atm</td>
              <td className="p-4 border-b border-gray-300 flex items-center">
                Rainy <span className="ml-2 text-blue-500">🌧️</span>
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-300">Odisha</td>
              <td className="p-4 border-b border-gray-300">23 c</td>
              <td className="p-4 border-b border-gray-300">1 Atm</td>
              <td className="p-4 border-b border-gray-300 flex items-center">
                Sunny <span className="ml-2 text-yellow-500">☀️</span>
              </td>
            </tr>
          </tbody>
        </table>
       </div>
    </div>   
  );
};

export default Home;
