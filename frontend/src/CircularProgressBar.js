import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar({ value, color_opt }) {
  return (
    <div style={{ width: '270px', height: '270px' ,
     marginLeft: '150px',
     marginRight: '150px',
     marginTop: '30px',
     marginBottom: '80px'}}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          pathColor: color_opt,
          textColor: 'green',
          trailColor: '#d6d6d6',
          
        })}
      />
    </div>
  );
}

export default CircularProgressBar;
