'use client';

import React, { useState } from 'react';
import NewBoardModal from './NewBoardModal';
import Boards from './Boards';
import AddBoard from './AddBoard';
import { boardData } from '../database/Boards.js';
import UpdateBoardModal from './UpdateBoardModal';
import Navbar from './Navbar';

const DashBoard = ({ boardId }) => {
    const [query, setQuery] = useState("");
    const pull_data = (searchQuery) => {
        setQuery(searchQuery);
        if (query.length > 0) {
            console.log(query.length);
        }
    };

    const [boardList, setBoardList] = useState(boardData);
    const [update, setUpdate] = useState(false);
    const [id, setId] = useState(boardId);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        color: '',
        image: '',
        content: '',
        color: 'bg-blue-80',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newBoard = {
            id: Date.now(),
            boardId,
            title: formData.title,
            color: formData.color,
        };

        setBoardList([...boardList, newBoard]);
        boardData.push(newBoard);

        setShowModal(false);

        setFormData({
            title: '',
            color: '',
            image: '',
            content: '',
        });
    };

    const onDelete = (id) => {
        const newBoardList = boardList.filter((board) => board.id !== id);
        setBoardList(newBoardList);
    };

    const onUpdate = async (id) => {

        setUpdate(true);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <Navbar
                send1={pull_data}
            />
            <div className="relative rounded box-border w-full h-[0.06rem] border-[1px] border-solid border-border-bordersubtle" />
            <div className="relative bg-white w-full h-[51.63rem] overflow-hidden shrink-0 flex flex-col p-[3.13rem] box-border items-start justify-start gap-[1.5rem] text-left text-[2rem] text-black font-raleway">
                <div className="flex flex-row items-start justify-start">
                    <b className="relative leading-[2.75rem]">My Boards</b>
                </div>
                <AddBoard
                    handleOpenModal={handleOpenModal}
                />
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.5rem] text-[0.88rem] text-text-textdefault">

                    {query.length > 0 ? (
                        boardList.filter((board) => {
                            if (query === "") {
                                return board;
                            } else if (board.title.toLowerCase().includes(query.toLowerCase())) {
                                return board;
                            }
                        }).map((board) => (
                            <div key={board.id}>
                                <Boards
                                    board={board}
                                    handleOpenModal={handleOpenModal}
                                    onDelete={() => onDelete(board.id)}
                                    onUpdate={() => (onUpdate(board.id), setUpdate(true), setId(board.id))}
                                />
                            </div>
                        ))
                    ) : (
                        boardList.map((board) => (
                            <div key={board.id}>
                                <Boards
                                    board={board}
                                    handleOpenModal={handleOpenModal}
                                    onDelete={() => onDelete(board.id)}
                                    onUpdate={() => (onUpdate(board.id), setUpdate(true), setId(board.id))}
                                />
                            </div>
                        )))
                    }

                    <NewBoardModal
                        showModal={showModal}
                        onClose={handleCloseModal}
                        onFormSubmit={handleFormSubmit}
                        handleInputChange={handleInputChange}
                        formData={formData}
                    />
                </div>
            </div>
        </>
    );
};

export default DashBoard;
