import React from "react";
import Main from "../Components/Main";
import Row from "../Components/Row";
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID = '1' title='Popular' fetchURL={requests.requestPopular} />
      <Row rowID = '2' title='Trending' fetchURL={requests.requestTrending} />
      <Row rowID = '3' title='TopRated' fetchURL={requests.requestTopRated} />
      <Row rowID = '4' title='Upcoming' fetchURL={requests.requestUpcoming} />
      <Row rowID = '5' title='Horror' fetchURL={requests.requestHorror} />
    </>
  )
}

export default Home;
