import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../../actions';

import UserAvatar from '../UserAvatar';
import { UserName } from './HeaderUser';

const User = (props) => {

  const [debouncedProps, setDebouncedProps] = useState(props);
  const userData = props.user[0];

  useEffect(() => {
    if (props.fetchPostsAndUsers && !userData) setDebouncedProps(props);
  },[props, userData]);

  useEffect(() => {
    debouncedProps.fetchCurrentUser();
  },[debouncedProps]); 

  if (userData) {
    return (
      <>
        <UserAvatar name={userData.name} imgSrc={`${process.env.PUBLIC_URL}/img/${userData.avatar}`}/>
        <UserName>
          <span>{userData.name}</span>
          <img alt="Expand arrow" src={`${process.env.PUBLIC_URL}/img/down_arrow.png`}/>
        </UserName>
      </>
    );
  } else {
    return (
      <>Sign in</>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, { fetchCurrentUser })(User);