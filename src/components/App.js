import React from 'react';

import {GlobalStyle} from './GlobalStyles';
import Header from './Header';
import ViewersPanel from './ViewersPanel';
import VideoContent from './VideoContent';
import ProgrammingGrid from './ProgrammingGrid';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <ViewersPanel/>
      <VideoContent/>
      <ProgrammingGrid/>
    </>
  )
}

export default App;