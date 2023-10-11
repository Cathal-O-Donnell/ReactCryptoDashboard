import React, { useState, useEffect } from "react";

const AccountDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".menu")) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div>
            <div className="menu relative ml-3">
                <div>
                    <button className="menu-button relative flex rounded-full bg-gray-800 text-sm" onClick={toggleMenu}>
                        <img className="h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </button>
                </div>

                {isOpen && (
                    <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1" role="none">
                            <a href="#" className="menu-item block px-4 py-2 text-sm text-gray-700">Profile</a>
                            <a href="#" className="menu-item block px-4 py-2 text-sm text-gray-700">Privacy &Settings</a>
                        </div>

                        <div class="py-1" role="none">
                            <a href="#" className="menu-item block px-4 py-2 text-sm text-red-700">Log Out</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AccountDropdown;