import * as React from 'react';
import { useState, useEffect } from 'react';
import useFetch from 'react-fetch-hook';

import './App.css';

//importing our components and services
import UserCard from './components/UserCard/UserCard';
import SearchBar from './components/SearchBar/SearchBar';
import UserCardGrid from './components/UserCardGrid/UserCardGrid';

// import loadUsers from './services/users';

const App = () => {
  const url = 'https://randomuser.me/api/?results=100';

  //Calling and setting our Hooks
  const [users, setUsers] = useState([]);
  const [filterQuery, setFilterQuery] = useState('');
  const { isLoading, data, error } = useFetch(url);

  useEffect(() => {
    const filterData = data?.results.filter(
      (user) =>
        user.name.first.toLowerCase().includes(filterQuery.toLowerCase()) ||
        user.name.last.toLowerCase().includes(filterQuery.toLowerCase()) ||
        user.cell.includes(filterQuery) ||
        user.location.city.toLowerCase().includes(filterQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(filterQuery.toLowerCase())
    );

    setUsers(filterData);
  }, [data, filterQuery]);

  return (
    <div className="list">
      {/* <SearchBar /> */}
      <section className="searchWrapper">
        <form className="searchBar">
          <input
            onChange={(e) => setFilterQuery(e.target.value)}
            type="text"
            placeholder="Type here to filter..."
          />
        </form>
      </section>
      <UserCardGrid users={users} />;
    </div>
  );
};

export default App;
