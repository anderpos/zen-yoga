import React, { useState, useEffect } from 'react';
import service from '../../services/service';
import { VideoPlayer, VideoDetails, VideoAuthor, VideoDescription, TagBox } from './VideoContent';
import UserAvatar from '../UserAvatar';

const VideoContent = () => {
  const [data, setData] = useState({ content: {}, isLoading: true });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.get('video');
        setData({ content: response.data, isLoading: false });
      } catch (e) {
        console.log(e);
        setData({ content: {}, isLoading: false });
      }
    };

    fetchData();
  }, []);

  if (data.isLoading) {
    return (
      <h3>Video is loading</h3>
    )
  } else
  {
    return (
      <>
        <VideoPlayer>
          <iframe title={data.content.title} width="882" height="513" src={data.content.url}/>
        </VideoPlayer>
  
        <VideoDetails>
          <div className="leftDetails">
            <VideoAuthor>
              <div className="leftAvatar">
                <UserAvatar className="avatar" name={data.content.author} imgSrc={`${process.env.PUBLIC_URL}/img/${data.content.avatar}`}/>
              </div>
              
              <h3>{data.content.title}</h3>
              <span className="description">{data.content.type} - </span><span className="authorName">{data.content.author}</span>
            </VideoAuthor>
            
            <VideoDescription>
              <p>{data.content.description}</p>
            </VideoDescription>
          </div>
  
          <div className="rightDetails">
            <TagBox>{data.content.type}</TagBox>
            <img alt="Share" src={`${process.env.PUBLIC_URL}/img/share_button.png`}/>
          </div>
        </VideoDetails>
      </>
    );
  }


  
}

export default VideoContent;