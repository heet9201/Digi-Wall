import React, { useState } from 'react';
import { useRouter } from 'next/router';
import nothing from '../../public/assets/images/nothing.png';
import Image from 'next/image';
import icon from '../../public/assets/icons/onlyLogo.svg';
import { ChevronLeftIcon, MagnifyingGlassIcon, BookmarkIcon, PlusIcon } from '@heroicons/react/24/outline';
import Post from '@components/Post';
import NewPostModal from '@components/NewPostModal';
import { postData } from '../../database/Posts.js';
import { boardData } from '../../database/Boards.js';
import Search from '@components/Search';

const BoardPage = () => {
  const router = useRouter();
  const [postList, setPostList] = useState(postData);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    image: '',
    content: '',
  });

  const [query, setQuery] = useState("");
  const pull_data = (searchQuery) => {
    setQuery(searchQuery);
    if (query.length > 0) {
      console.log(query.length);
    }
  };

  const { boardId } = router.query;
  const selectedBoard = boardData.find((board) => board.id === parseInt(boardId));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      boardId: parseInt(boardId),
      date: 'Today',
      subject: formData.subject,
      image: 'https://images.unsplash.com/photo-1690184432588-81068877d852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
      // image: formData.image,
      content: formData.content,
    };
    console.log(newPost);
    console.log("And");
    setPostList([...postList, newPost]);
    postData.push(newPost);

    console.log(postList);
    setShowModal(false);
    setFormData({
      subject: '',
      image: '',
      content: '',
    });
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className='w-screen h-screen'>
        <div className="relative w-full bg-neutral-white flex flex-row py-[1rem] pr-[2rem] pl-[1.13rem] box-border items-center justify-between text-left text-[1rem] text-text-textplaceholder font-label-label-2">
          <div
            className='flex items-center w-full h-[2rem]'
          >

            <ChevronLeftIcon
              className='w-6 h-6 cursor-pointer'
              onClick={() =>
                router.push('/')
              }
            />
            <Image
              className='w-6 h-6 mx-2 cursor-pointer'
              src={icon}
              alt="company icon"
              onClick={() =>
                router.push('/')
              }
            />

            <p className='text-base text-black font-medium'
            >{selectedBoard === undefined ? '' : selectedBoard.title}</p>

          </div>
          <div className="relative flex flex-row items-center justify-start gap-[5rem]">
            <div className="rounded-md box-border h-[2.5rem] flex flex-row py-[0.81rem] px-[1rem] right-0 items-center justify-end">
              <div className="flex-1 flex flex-row items-center justify-start gap-[1rem]">
                <div
                  className='flex flex-row items-center w-full h-[2rem]'
                >
                  <div className="flex-1 w-[17rem] flex flex-row items-center justify-start gap-[1rem] border-[1px] border-solid border-border-bordersubtle p-1 mr-4">
                    <MagnifyingGlassIcon
                      className="relative px-1 w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                    />
                    <Search
                      Query={pull_data}
                    />
                  </div>
                  |
                  <BookmarkIcon
                    className='relative px-1 w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 mx-2'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-blue-100 w-screen h-screen overflow-hidden shrink-0 flex flex-col p-[3.13rem] box-border items-start justify-start gap-[1.5rem] text-left text-[2rem] text-black font-raleway">
          <div className="flex flex-row">
            <b className="leading-[2.75rem]">Your Posts</b>
            <button
              onClick={handleOpenModal}
              className='absolute right-0 top-5 cursor-pointer mr-12 mt-5 rounded-lg bg-interactive-interactiveonedefault w-[11.75rem] h-[2.5rem] flex flex-row py-[0.81rem] px-[1rem] box-border items-center justify-center gap-[0.5rem] text-neutral-white font-label-label-2'
            >
              <PlusIcon
                className='w-[1.02rem] h-[1.02rem]'
              />
              Create New Post
            </button>
            <NewPostModal
              showModal={showModal}
              onClose={handleCloseModal}
              onFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
              formData={formData}
            />
          </div>
          <div
            className='flex flex-row flex-wrap items-start justify-start gap-[1.2rem] text-[0.88rem] text-gray'
          >
            {query.length > 0 ?
              postList.map((post) => (
                post.boardId === parseInt(boardId) && post.subject.toLowerCase().includes(query.toLowerCase()) ?
                  <Post
                    key={post.id}
                    post={post}
                  />
                  : null
              ))
              :
              postList.map((post) => (
                post.boardId === parseInt(boardId) ?
                  <Post
                    key={post.id}
                    post={post}
                  />
                  : null
              ))
            }
          </div>
          {selectedBoard === undefined ?
            <div className="w-screen h-screen flex flex-col items-center justify-center text-center text-[1rem] text-black font-raleway">
              <div className="absolute flex flex-col items-center justify-center gap-[0.63rem]">
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={nothing}
                    alt="nothing"
                    width={203}
                    height={180}

                  />
                </div>
                <div className="h-[2.88rem] flex flex-col items-center justify-between">
                  <b className="relative text-[1rem] text-center">Nothing here yet</b>
                  <div className="relative text-[0.88rem] font-raleway">Create your first post by clicking on the + button above</div>
                </div>
              </div>
            </div>
            :
            null
          }
        </div>
      </div>
    </>
  );
};

export default BoardPage;