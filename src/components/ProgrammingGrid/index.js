import React from 'react';
import { Grid, TimeSeparator, ProgramBox } from './ProgrammingGrid';

const ProgrammingGrid = () => {
  return (
    <Grid>
      <img className="timeLine" alt="Search icon" src={`${process.env.PUBLIC_URL}/img/time_line.png`}/>
      <h3>Programação de Hoje</h3>
      <TimeSeparator>07:30 <hr/></TimeSeparator>
      <ProgramBox>
        <span className="programTitle">Vipassana Yoga - Ao Vivo</span>
        <span className="programTime">07:30 ~ 08:30</span>
      </ProgramBox>

      <TimeSeparator>08:30 <hr/></TimeSeparator>
      <TimeSeparator>09:00 <hr/></TimeSeparator>
      <ProgramBox>
        <span className="programTitle">Vipassana Yoga - Ao Vivo</span>
        <span className="programTime">07:30 ~ 08:30</span>
      </ProgramBox>
    </Grid>
  );
}

export default ProgrammingGrid;