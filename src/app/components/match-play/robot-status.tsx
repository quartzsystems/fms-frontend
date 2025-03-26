/*
 * Copyright (C), 2025 Quartz Systems. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

export default function RobotStatus() {
    return (
        <section className="flex flex-row p-6 space-x-6 w-full justify-center">
            <div className="bg-blue-500 text-white rounded-xl flex flex-col">
                <div className="p-4 space-x-4 flex flex-row items-center justify-center justify-between">
                    <p className="bg-red-500 rounded-xl px-4 py-1 text-md font-semibold">Not Ready</p>
                    <p className="text-md font-semibold">Blue Alliance</p>
                    <p className="text-md bg-blue-600 rounded-xl px-6 py-1 font-semibold">0</p>
                </div>
            </div>
        </section>
    );
}