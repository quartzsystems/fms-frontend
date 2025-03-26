/*
 * Copyright (C), 2025 Quartz Systems. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

import RobotStatus from '../components/match-play/robot-status';
import MatchControl from '../components/match-play/match-control';


export default function Page() {
    return (
        <main className="flex flex-col">
            <RobotStatus></RobotStatus>
            <MatchControl></MatchControl>
        </main>
    );
}