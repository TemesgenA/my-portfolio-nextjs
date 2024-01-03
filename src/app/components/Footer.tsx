import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-20 text-center border-t border-gray-700 w-full mt-20">
            <ul className="list-none flex justify-center">
                <li className="m-0 mx-2 hover:bg-gray-700 transition-colors duration-300">About</li>
                <li className="m-0 mx-2 hover:bg-gray-700 transition-colors duration-300">Projects</li>
                <li className="m-0 mx-2 hover:bg-gray-700 transition-colors duration-300">Contact</li>
            </ul>
        </footer>
    );
};

export default Footer;
