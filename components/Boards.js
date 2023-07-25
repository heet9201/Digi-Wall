'use client';
import React, { useState } from 'react';
import { EllipsisVerticalIcon, FilmIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import UpdateBoardModal from './UpdateBoardModal';


const Boards = ({ board, onDelete, handleOpenModal, handleCloseModal, onUpdate }) => {

    const Router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [update, setUpdate] = useState(false);



    return (
        <div className="rounded-4xs box-border w-[22.69rem] flex flex-row items-center justify-between font-body-body-2 border-[1px] border-solid border-whitesmoke" >
            <div className={`relative rounded-tl-4xs rounded-tr-none rounded-br-none rounded-bl-4xs w-[5rem] h-[5rem] ${board.color ? board.color : "bg-blue-80"}`}>
                <button
                    type='button'
                    className='w-full h-full bg-transparent cursor-pointer'
                    onClick={() => (
                        Router.push('/boards/' + board.id)
                    )}
                >
                </button>
            </div>
            <div className="flex-1 h-[4.81rem] overflow-hidden flex flex-row py-[1.81rem] px-[1.13rem] box-border items-start justify-between">
                <div className="w-[15.44rem] flex flex-row items-center justify-between">
                    <div className="relative leading-[1.25rem] font-medium">{board.title}</div>
                    <div className='text-black relative' >
                        <EllipsisVerticalIcon
                            onClick={() => setShowModal(true)}
                            className="z-100 relative cursor-pointer text-black w-6 h-6"
                        />
                        {showModal && (
                            <div className='fixed inset-100 z-50 flex items-center justify-center'>
                                <div className='modal-overlay absolute inset-0 bg-black opacity-50'>
                                </div>
                                <div className="flex flex-col justify-start items-start modal-content m-0 bg-white p-0 w-fit rounded shadow-lg z-50 gap-y-1 p-2">
                                    <button
                                        type='button'
                                        className="cursor-pointer modal-button bg-transparent" onClick={() => (onUpdate(board.id), setShowModal(false), setUpdate(true))}>
                                        Edit
                                    </button>
                                    {update && (<UpdateBoardModal
                                        showModal={showModal}
                                        onClose={handleCloseModal}
                                        onFormSubmit={handleFormSubmit}
                                        handleInputChange={handleInputChange}
                                        formData={formData}
                                        color={board.color}
                                    />)}
                                    <button
                                        type='button'
                                        className="cursor-pointer modal-button bg-transparent" onClick={() => (onDelete(board.id))}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boards;