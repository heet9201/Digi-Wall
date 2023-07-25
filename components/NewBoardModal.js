import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
const NewBoardModal = ({ showModal, onClose, onFormSubmit, handleInputChange, formData }) => {

    const [select, setSelect] = useState(1);

    if (!showModal) {
        return null;
    }

    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <form onSubmit={onFormSubmit}>
                        <div className="relative rounded-lg bg-neutral-white w-full h-[25.81rem] flex flex-col py-[2.63rem] px-[2.5rem] box-border items-start justify-center gap-[2.5rem] text-left text-[1.25rem] text-black font-subtitle-subtitle-3">
                            <div className="self-stretch h-[5.38rem] flex flex-col items-start justify-between">
                                <div className="self-stretch flex flex-row items-center justify-between">
                                    <b className="relative leading-[1.75rem]">Add a name for your board</b>
                                    <XMarkIcon
                                        onClick={onClose}
                                        className='relative cursor-pointer w-[1.25rem] h-[1.25rem]'
                                    />

                                </div>
                                <div className="self-stretch rounded box-border h-[3rem] flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-start text-[1rem] text-text-textdefault font-raleway border-[1px] border-solid border-gainsboro">
                                    <input
                                        type="text"
                                        className='border-none w-full h-full outline-none relative inline-block shrink-0'
                                        name="title"
                                        placeholder="Places around the world"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-center gap-[0.63rem]">
                                <div className="flex flex-col items-start justify-start">
                                    <b className="relative leading-[1.75rem]">Select post colour</b>
                                    <div className="relative text-[0.88rem] leading-[1.25rem] font-subtitle-subtitle-3">Here are some templates to help you get started</div>
                                </div>
                                <div className="w-[8.02rem] flex flex-row items-start justify-between">
                                    <button
                                        type='button'
                                        onClick={() => (setSelect(1), formData.color = 'bg-blue-80')}
                                        className={`cursor-pointer relative rounded-[50%] bg-blue-80 box-border w-[1.5rem] h-[1.5rem] ${select === 1 ? "border-[1.5px]" : "border-[0px]"}`}
                                    >
                                    </button>
                                    <button
                                        type='button'
                                        onClick={() => (setSelect(2), formData.color = 'bg-violet-80')}
                                        className={`cursor-pointer relative rounded-[50%] bg-violet-80 box-border w-[1.5rem] h-[1.5rem] ${select === 2 ? "border-[1.5px]" : "border-[0px]"}`}
                                    >
                                    </button>
                                    <button
                                        type='button'
                                        onClick={() => (setSelect(3), formData.color = 'bg-pink-70')}
                                        className={`cursor-pointer relative rounded-[50%] bg-pink-70 box-border w-[1.5rem] h-[1.5rem] ${select === 3 ? "border-[1.5px]" : "border-[0px]"}`}
                                    >
                                    </button>
                                    <button
                                        type='button'
                                        onClick={() => (setSelect(4), formData.color = 'bg-yellow-70')}
                                        className={`cursor-pointer relative rounded-[50%] bg-yellow-70 box-border w-[1.5rem] h-[1.5rem] ${select === 4 ? "border-[1.5px]" : "border-[0px]"}`}
                                    >
                                    </button>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-end justify-center text-[1rem] text-neutral-white">
                                <button type="submit"
                                    className=" cursor-pointer rounded-lg bg-interactive-interactiveonehover w-[7.88rem] h-[2.5rem] flex flex-row py-[0.81rem] px-[1rem] box-border items-center justify-center"
                                >
                                    <b className="relative leading-[1.5rem] text-white text-sm">
                                        Create board
                                    </b>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewBoardModal;