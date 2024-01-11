import React, { useState } from 'react';

interface DropdownStatusProps { }

const DropdownStatus: React.FC<DropdownStatusProps> = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="relative">
            <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button"
                onClick={toggleDropdown}
            >
                Status
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>
            <div
                id="dropdown"
                className={`z-20 ${isDropdownOpen ? '' : 'hidden'} absolute bg-white  rounded-lg shadow w-44 dark:bg-gray-700 mt-2`}
            >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Completed
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Incompleted
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Not used
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DropdownStatus;
