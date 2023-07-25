// components/Post.js
import React, { useState } from 'react';
import { BookmarkIcon, EllipsisVerticalIcon, HeartIcon } from '@heroicons/react/24/outline';

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [oneTime, setOneTime] = useState(
    likes > 0 ? true : false
  );

  const handleLike = () => {
    !oneTime && setLikes(likes + 1);
  };

  return (
    <>
      <div className="w-fit relative rounded-lg bg-white flex flex-col p-[2rem] box-border items-start justify-start gap-[0.63rem] text-left text-[1.25rem] text-black font-raleway">
        <div className="relative w-[14.81rem] flex flex-row items-start justify-start gap-[0.63rem]">
          <div className="relative leading-[1.75rem]">
            <div className='m-0'>{post.subject}</div>
          </div>
          <div className='relative w-[2.44rem] flex flex-row items-start justify-start gap-[0.5rem]' />
          <div className="absolute right-2 w-[2.44rem] flex flex-row items-start justify-start gap-[0rem]">
            <BookmarkIcon
              className='relative cursor-pointer w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0'
            />
            <EllipsisVerticalIcon
              className='relative cursor-pointer w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0'
            />
          </div>
        </div>
        <div className="relative text-[0.75rem] leading-[1rem] font-medium font-body-body-3 text-icons-icon-icondisabled">{post.date}</div>
        <div className="w-[15.19rem] flex flex-row flex-wrap items-start justify-start gap-[1rem] text-[0.88rem] text-gray">
          <img className="relative rounded-lg w-[15.19rem] h-[10.13rem] object-cover" alt="" src={post.image} />
          <div className="relative leading-[1.25rem] inline-block w-[15.06rem] shrink-0">{post.content}</div>
          <div className="relative rounded box-border w-[15.06rem] h-[0.06rem] border-[1px] border-solid border-whitesmoke" />
          <div className="w-[2.25rem] flex flex-row items-center justify-between text-[1rem] text-icons-icon-icondisabled">
            <HeartIcon
              onClick={
                () => {
                  handleLike();
                  setOneTime(true);
                }
              }
              {...(likes > 0 && { fill: 'red' })}
              className='cursor-pointer relative px-1 w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 mx-2'
            />
            <div className="relative leading-[1.5rem]">{likes}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
