import React, { useState, useEffect, use } from "react";
import "./schedule.css";
import "../../components/FilterListItem/filterListItem.css";
import Card from "../../components/Card/Card";
import filterListData from "../../data/filterListData";
import FilterListItem from "../../components/FilterListItem/FilterListItem";

function Schedule() {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch("/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  const [filters, setFilters] = useState(filterListData);

  const handleFilterMovies = (category) => {
    // Update active filter
    const updatedFilters = filters.map((filter) => ({
      ...filter,
      active: filter.name === category,
    }));
    setFilters(updatedFilters);

    // Filter movies
    if (category === "All") {
      setMovies(data);
    } else {
      const filteredMovies = data.filter(
        (movie) => movie.category === category
      );
      setMovies(filteredMovies);
    }
  };

  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Opening this week</h4>
        </div>
        <div className="row">
          <div className="filter">
  {filters.map((filter) => (
    <FilterListItem
      key={filter._id}
      filter={filter}
      active={filter.active}
      onClick={() => handleFilterMovies(filter.name)}
    />
  ))}
</div>
        </div>
        <div className="row mt-5 section">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => <Card key={movie._id} movie={movie} />)}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
