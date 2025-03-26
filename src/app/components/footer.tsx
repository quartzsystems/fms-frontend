/*
 * Copyright (C), 2025 Quartz Systems. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

'use client';

export default function Footer() {
    return (
        <footer className="footer footer-center fixed bottom-0 p-4 bg-base-300 text-base-content flex justify-between">
            <div className="justify-start">
                <p>© 2025 Hibiscus Software</p>
            </div>
            <div className="flex flex-row">
                <p>Demo</p> - <p>FiM District Escanaba</p>
            </div>
            <div className="justify-end">
                <p>5m Ahead</p>
            </div>
        </footer>
    );
}