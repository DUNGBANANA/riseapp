import React from 'react';

const TeamItem = (props:any) => {
  return (
    <div className='team-item'>
      <div className='team-img'>
        <img src={props.image} alt=''/>
      </div>
      <div className='team-job'>{props.job}
      </div>
      <div className='team-name'>
        {props.name}
      </div>
    </div>
  );
};

export default TeamItem;
