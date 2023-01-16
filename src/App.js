import * as React from 'react';
import { useState, useEffect } from 'react';
import useFetch from 'react-fetch-hook';

import './App.css';

//importing our components and services
import UserCard from './components/UserCard/UserCard';
import SearchBar from './components/SearchBar/SearchBar';
import UserCardGrid from './components/UserCardGrid/UserCardGrid';

const App = () => {
  // Fetching our API
  const url = 'https://randomuser.me/api/?results=100';
  const { isLoading, data, error } = useFetch(url);

  //Calling and setting our Hooks
  const [users, setUsers] = useState([]);
  const [filterQuery, setFilterQuery] = useState('');

  useEffect(() => {
    setUsers(data?.results);
  }, []);

  const handleFilterUsers = (event) => {
    setFilterQuery(event.target.value);

    //handles the filtering of our users
    const filteredData = data?.results.filter(
      (user) =>
        user.name.first.toLowerCase().includes(filterQuery.toLowerCase()) ||
        user.name.last.toLowerCase().includes(filterQuery.toLowerCase()) ||
        user.cell.includes(filterQuery) ||
        user.location.city.toLowerCase().includes(filterQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(filterQuery.toLowerCase())
    );
    setUsers(filteredData);
  };

  const handleSortUser = (event) => {
    // Handles sorting Users based on Select's value

    switch (event.target.value) {
      case 'name':
        function compareNames(a, b) {
          const personA = a.name.first.toLowerCase();
          const personB = b.name.first.toLowerCase();

          const comparsion = personA > personB ? 1 : -1;
          return comparsion;
        }
        let nameResults = users.sort(compareNames);
        setUsers([...nameResults]);
        break;
      case 'city':
        function compareCities(a, b) {
          const cityA = a.location.city.toLowerCase();
          const cityB = b.location.city.toLowerCase();

          const comparsion = cityA > cityB ? 1 : -1;
          return comparsion;
        }
        let cityResults = users.sort(compareCities);
        setUsers([...cityResults]);
        break;
      case 'email':
        function compareEmails(a, b) {
          const emailA = a.email.toLowerCase();
          const emailB = b.email.toLowerCase();

          const comparsion = emailA > emailB ? 1 : -1;
          return comparsion;
        }
        let emailResults = users.sort(compareEmails);
        setUsers([...emailResults]);
        break;
      case 'number':
        function compareNumbers(a, b) {
          const numberA = a.cell;
          const numberB = b.cell;

          const comparsion = numberA > numberB ? 1 : -1;
          return comparsion;
        }
        let numberResults = users.sort(compareNumbers);
        setUsers([...numberResults]);
        break;
      default:
    }
  };

  return (
    <div className="list">
      {/* <SearchBar /> */}
      <section className="searchWrapper">
        <form className="searchBar">
          <input
            onChange={handleFilterUsers}
            type="text"
            placeholder="Type here to filter..."
          />
        </form>

        <select className="dropdown" onChange={handleSortUser}>
          <option value="">Please Select An Option to Sort By</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="number">Number</option>
          <option value="city">City</option>
        </select>
      </section>
      <UserCardGrid users={users} />;
    </div>
  );
};

export default App;
