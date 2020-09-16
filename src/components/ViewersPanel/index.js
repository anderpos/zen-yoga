import React, { useState, useEffect } from 'react';
import service from '../../services/service';
import { ViewersBar } from './ViewersPanel';
import UserAvatar from '../UserAvatar';

const ViewersPanel = () => {
  const [data, setData] = useState({ viewers: [], isLoading: true });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.get('viewers');
        setData({ viewers: response.data, isLoading: false });
      } catch (e) {
        console.log(e);
        setData({ viewers: [], isLoading: false });
      }
    };

    fetchData();
  }, []);

  const viewersList = data.viewers.slice(0, 7).map((viewer, id) => {
    return(
      <UserAvatar
        key={id}
        name={viewer.name} 
        imgSrc={viewer.avatar?`${process.env.PUBLIC_URL}/img/${viewer.avatar}`:''}
      />
    )}
  );

  const onlineCount = data.viewers.length;

  return (
    <ViewersBar>
      {viewersList}
      <span className="onlineUsers">{onlineCount}<br/>online</span>
    </ViewersBar>
  );
}

export default ViewersPanel;