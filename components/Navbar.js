'use client';
import React from 'react';
import Image from 'next/image';
import companyIcon from '../public/assets/icons/logo.svg';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import Search from './Search';


const Navbar = ({ send1 }) => {

    const Router = useRouter();
    const pull_data = (searchQuery) => {
        // console.log(searchQuery);
        send1(searchQuery);
    };

    return (
        <div className="w-full relative bg-neutral-white flex flex-row py-[1rem] px-[3.13rem] box-border items-center justify-between text-left text-[1rem] text-text-textplaceholder font-label-label-2">
            {/* <img className="relative w-[5.98rem] h-[2rem]" alt="" src={companyIcon} /> */}
            <Image
                src={companyIcon}
                alt="company icon"
                onClick={() =>
                    Router.push('/')
                }
                className='cursor-pointer'

            />
            <div className="flex flex-row items-center justify-start gap-[5rem]">
                <div className="rounded-md box-border w-[17.75rem] h-[2.5rem] flex flex-row py-[0.81rem] px-[1rem] items-center justify-start border-[1px] border-solid border-border-bordersubtle">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[1rem]">
                        <MagnifyingGlassIcon
                            className="relative px-1 w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                        />
                        <Search
                            Query={pull_data}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

