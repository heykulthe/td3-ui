import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className=" rounded-xs m-2 bg-[#11162f]">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between">
                <p>© {new Date().getFullYear()} Hillbert Lab, Inc.- All right reserved.</p>
                <ul className="flex items-center text-sm font-medium text-gray-400 space-x-5">
                    <li>
                        <Link href="/" className="hover:underline">About</Link>
                    </li>
                    <li>
                        <Link href="/" className="hover:underline">Privacy</Link>
                    </li>
                    <li>
                        <Link href="/" className="hover:underline">Licensing</Link>
                    </li>
                    <li>
                        <Link href="/" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>

    );
}