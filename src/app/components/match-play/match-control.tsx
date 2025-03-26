/*
 * Copyright (C), 2025 Quartz Systems. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

export default function MatchControl() {
    return (
        <section className="flex flex-row p-6 space-x-6 w-full justify-around">
            <div className="flex flex-row space-x-6">
                <div className="btn bg-yellow-400 text-black rounded-xl text-md p-6 font-semibold border-none">
                    Prestart<br></br>Cancel
                </div>
                <div className="btn bg-yellow-400 text-black rounded-xl text-md p-6 font-semibold border-none">
                    Show Match<br></br>Preview
                </div>
                <div className="btn bg-green-600 text-white rounded-xl text-md p-6 font-semibold border-none">
                    Show Match<br></br>Score Bar
                </div>
            </div>
            <div className="">
                <div className="btn bg-green-600 rounded-xl text-md p-6 font-semibold border-none">Start Match</div>
            </div>
            <div className="flex flex-row space-x-6">
                <div className="btn bg-green-600 text-white rounded-xl text-md p-6 font-semibold border-none">
                    Commit
                </div>
                <div className="btn bg-green-600 text-white rounded-xl text-md p-6 font-semibold border-none">
                    Post Results
                </div>
                <div className="btn bg-yellow-400 text-black rounded-xl text-md p-6 font-semibold border-none">
                    Start Break
                </div>
            </div>
        </section>
    );
}