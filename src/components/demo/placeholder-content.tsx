'use client'

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

export default function PlaceholderContent() {
    const [activeTab, setActiveTab] = useState('Profile');

    return (
        <Card className="rounded-lg border-none mt-5">
            <CardContent className="p-6">
                <div className="flex justify-center min-h-[calc(100vh-56px-64px-20px-24px-36px)]">
                    <ul className="flex w-full border flex-row text-sm font-medium text-center text-gray-500 border-b border-gray-200 h-fit dark:border-gray-700 dark:text-gray-400">
                        <li className={`transition-colors duration-300 border w-1/2 ${activeTab === 'Profile' ? 'bg-blue-600 text-white' : ''}`}>
                            <a
                                href="#"
                                onClick={() => setActiveTab('Profile')}
                                className={`inline-block p-4 rounded-t-lg ${activeTab === 'Profile' ? 'bg-blue-600 text-white' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'}`}
                            >
                                Profile
                            </a>
                        </li>
                        <li className={`transition-colors duration-300 border w-1/2 ${activeTab === 'Dashboard' ? 'bg-blue-600 text-white' : ''}`}>
                            <a
                                href="#"
                                onClick={() => setActiveTab('Dashboard')}
                                className={`inline-block p-4 rounded-t-lg ${activeTab === 'Dashboard' ? 'bg-blue-600 text-white' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'}`}
                            >
                                Dashboard
                            </a>
                        </li>
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
}
