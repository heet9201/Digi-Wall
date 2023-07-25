import React from 'react';
import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline';

const NewPostModal = ({ showModal, onClose, onFormSubmit, handleInputChange, formData }) => {
    if (!showModal) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content w-[500px]">
                <form onSubmit={onFormSubmit}>
                    <div className="relative bg-neutral-white w-full overflow-hidden flex flex-col py-[2.56rem] px-[2.25rem] box-border items-start justify-start gap-[2.25rem] text-left text-[1rem] text-black font-avenir-next-lt-pro">
                        <div className="flex flex-col items-start justify-start text-[1.25rem] font-body-body-1">
                            <div className="flex flex-row items-center justify-center gap-[16.38rem]">
                                <b className="relative leading-[1.75rem]">Create a post</b>
                                <XMarkIcon
                                    onClick={onClose}
                                    className='absolute right-0 mr-10 cursor-pointer w-[1.25rem] h-[1.25rem]'
                                />
                            </div>
                            <div className="relative text-[0.88rem] leading-[1.25rem] font-avenir-next-lt-pro text-gray">Write something for your post</div>
                        </div>
                        <div className="self-stretch h-[4.63rem] flex flex-col items-start justify-start gap-[0.56rem] text-darkslategray">
                            <b className="relative">Subject</b>
                            <div className="self-stretch mr-5 rounded bg-neutral-white flex flex-row py-[0.69rem] px-[0.63rem] items-center justify-start text-text-textdefault border-[1px] border-solid border-gainsboro">
                                <div className="relative leading-[1.5rem] inline-block w-[14.63rem] shrink-0">
                                    <input

                                        type="text"
                                        className='border-none w-full h-full outline-none relative inline-block shrink-0'
                                        name="subject"
                                        placeholder="Galápagos Islands, Ecuador"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="rounded flex flex-row p-[0.63rem] items-center justify-center gap-[0.5rem] text-[0.88rem] text-text-textsubtle border-[1px] border-solid border-border-bordersubtle">

                            <PhotoIcon
                                className='relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0'
                            />

                            <div className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden" />
                            <label className="cursor-pointer bg-none border-none decoration-none px-4 py-2 text-textsubtle">
                                Add your image
                                <input type="file"
                                    name='image'
                                    className="hidden" onChange={handleInputChange} />
                            </label>
                        </div>
                        <div className="relative rounded box-border w-[25.63rem] h-[0.06rem] border-[1px] border-solid border-border-bordersubtle" />
                        <div className="self-stretch flex flex-col items-end justify-end gap-[0.5rem] text-text-textdefault font-body-body-1">
                            <div className="self-stretch relative leading-[1.5rem]">{`What’s on your mind? `}</div>
                            <div className="self-stretch rounded-md flex flex-col p-[1rem] items-center justify-center text-text-textplaceholder border-[1px] border-solid border-border-bordersubtle">
                                <div className="self-stretch relative leading-[1.5rem] font-medium inline-block h-[2.75rem] shrink-0">
                                    <input
                                        type="text"
                                        className='border-none w-full h-full outline-none relative inline-block shrink-0'
                                        name="content"
                                        placeholder="Type here"
                                        value={formData.content}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-end justify-center text-neutral-white">
                            <button
                                type='submit'
                                className='cursor-pointer rounded-lg bg-interactive-interactiveonedefault w-[11.75rem] h-[2.5rem] flex flex-row py-[0.81rem] px-[1rem] box-border items-center justify-center text-white font-raleway'
                            >
                                <b className="relative leading-[1.5rem] text-white text-sm">Create new post</b>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default NewPostModal;
