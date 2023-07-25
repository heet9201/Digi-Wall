import React from 'react'
import { PlusIcon } from '@heroicons/react/24/outline';

const AddBoard = ({ handleOpenModal }) => {
    return (
        <div>
            <button
                onClick={handleOpenModal}
                type="button" className="absolute cursor-pointer top-5 right-0 mr-12 rounded-lg bg-interactive-interactiveonedefault w-[11.75rem] h-[2.5rem] flex flex-row py-[0.81rem] px-[1rem] box-border items-center justify-center gap-[0.5rem] text-neutral-white font-label-label-2"
            >
                <PlusIcon
                    className="relative w-[1.02rem] h-[1.02rem]"
                />
                Create new board
            </button>
        </div>
    )
}

export default AddBoard;