const newStartingLetterGroup = function (endingLetter, nextSurfaceInt) {
    if (endingLetter === 'A') {
        if (nextSurfaceInt < 1440) {
            return 'A'
        } else {
            return 'No Group'
        }
    } else if (endingLetter === 'B') {
        if (10 <= nextSurfaceInt <= 76) {
            return 'B'
        } else if (77 <= nextSurfaceInt < 1440) {
            return 'A'
        } else {
            return 'No Group'
        }
    } else if (endingLetter === 'C') {
        if (10 <= nextSurfaceInt <= 55) {
            return 'C'
        } else if (56 <= nextSurfaceInt <= 131) {
            return 'B'
        } else if (132 <= nextSurfaceInt < 1440) {
            return 'A'
        } else {
            return 'No Group'
        }
    } else if (endingLetter === 'D') {
        if (10 <= nextSurfaceInt <= 52) {
            return 'D'
        } else if (53 <= nextSurfaceInt <= 107) {
            return 'C'
        } else if (108 <= nextSurfaceInt <= 183) {
            return 'B'
        } else if (184 <= nextSurfaceInt < 1440) {
            return 'A'
        } else {
            return 'No Group'
        }
    } else if (endingLetter === 'E') {
        if (10 <= nextSurfaceInt <= 52) {
            return 'E'
        } else if (53 <= nextSurfaceInt <= 104) {
            return 'D'
        } else if (105 <= nextSurfaceInt <= 159) {
            return 'C'
        } else if (160 <= nextSurfaceInt <= 235) {
            return 'B'
        } else if (236 <= nextSurfaceInt < 1440) {
            return 'A'
        } else {
            return 'No Group'
        }
    } else if (endingLetter === 'F') {
        if (10 <= nextSurfaceInt <= 52) {
            return 'F'
        } else if (53 <= nextSurfaceInt <= 104) {
            return 'E'
        } else if (105 <= nextSurfaceInt <= 157) {
            return 'D'
        } else if (158 <= nextSurfaceInt <= 211) {
            return 'C'
        } else if (212 <= nextSurfaceInt <= 288) {
            return 'B'
        } else if (289 <= nextSurfaceInt < 1440) {
            return 'A'
        } else {
            return 'No Group'
        }
    } else if (endingLetter === 'G') {
        if (10 <= nextSurfaceInt <= 52) {
            return 'G'
        } else if (53 <= nextSurfaceInt <= 104) {
            return 'F'
        } else if (105 <= nextSurfaceInt <= 157) {
            return 'E'
        } else if (158 <= nextSurfaceInt <= 209) {
            return 'D'
        } else if (210 <= nextSurfaceInt <= 263) {
            return 'C'
        } else if (264 <= nextSurfaceInt <= 340) {
            return 'B'
        } else if (341 <= nextSurfaceInt < 1440) {
            return 'A'
        } else {
            return 'No Group'
        }
    } else if (endingLetter === 'H') {
        if (10 <= nextSurfaceInt <= 52) {
            return 'H'
        } else if (53 <= nextSurfaceInt <= 104) {
            return 'G'
        } else if (105 <= nextSurfaceInt <= 157) {
            return 'F'
        } else if (158 <= nextSurfaceInt <= 209) {
            return 'E'
        } else if (210 <= nextSurfaceInt <= 261) {
            return 'D'
        } else if (262 <= nextSurfaceInt <= 316) {
            return 'C'
        } else if (317 <= nextSurfaceInt <= 392) {
            return 'B'
        } else if (393 <= nextSurfaceInt < 1440) {
            return 'A'
        } else {
            return 'No Group'
        }
    } else if (endingLetter === 'I') {
        if (10 <= nextSurfaceInt <= 52) {
            return 'I'
        } else if (53 <= nextSurfaceInt <= 104) {
            return 'H'
        } else if (105 <= nextSurfaceInt <= 157) {
            return 'G'
        } else if (158 <= nextSurfaceInt <= 209) {
            return 'F'
        } else if (210 <= nextSurfaceInt <= 261) {
            return 'E'
        } else if (262 <= nextSurfaceInt <= 313) {
            return 'D'
        } else if (314 <= nextSurfaceInt <= 368) {
            return 'C'
        } else if (369 <= nextSurfaceInt <= 444) {
            return 'B'
        } else if (445 <= nextSurfaceInt < 1440) {
            return 'A'
        } else {
            return 'No Group'
        }
    } else if (endingLetter === 'J') {
        if (10 <= nextSurfaceInt <= 52) {
            return 'J'
        } else if (53 <= nextSurfaceInt <= 104) {
            return 'I'
        } else if (105 <= nextSurfaceInt <= 157) {
            return 'H'
        } else if (158 <= nextSurfaceInt <= 209) {
            return 'G'
        } else if (210 <= nextSurfaceInt <= 261) {
            return 'F'
        } else if (262 <= nextSurfaceInt <= 313) {
            return 'E'
        } else if (314 <= nextSurfaceInt <= 366) {
            return 'D'
        } else if (367 <= nextSurfaceInt <= 420) {
            return 'C'
        } else if (421 <= nextSurfaceInt <= 496) {
            return 'B'
        } else if (497 <= nextSurfaceInt < 1440) {
            return 'A'
        } else {
            return 'No Group'
        }
    } else if (endingLetter === 'K') {
        if (10 <= nextSurfaceInt <= 52) {
            return 'K'
        } else if (10 <= nextSurfaceInt <= 104) {
            return 'J'
        } else if (105 <= nextSurfaceInt <= 157) {
            return 'I'
        } else if (158 <= nextSurfaceInt <= 209) {
            return 'H'
        } else if (210 <= nextSurfaceInt <= 261) {
            return 'G'
        } else if (262 <= nextSurfaceInt <= 313) {
            return 'F'
        } else if (314 <= nextSurfaceInt <= 366) {
            return 'E'
        } else if (367 <= nextSurfaceInt <= 418) {
            return 'D'
        } else if (419 <= nextSurfaceInt <= 472) {
            return 'C'
        } else if (473 <= nextSurfaceInt <= 549) {
            return 'B'
        } else if (550 <= nextSurfaceInt < 1440) {
            return 'A'
        } else {
            return 'No Group'
        }
    } else if (endingLetter === 'L') {
        if (10 <= nextSurfaceInt <= 52) {
            return 'L'
        } else if (10 <= nextSurfaceInt <= 104) {
            return 'K'
        } else if (105 <= nextSurfaceInt <= 157) {
            return 'J'
        } else if (158 <= nextSurfaceInt <= 209) {
            return 'I'
        } else if (210 <= nextSurfaceInt <= 261) {
            return 'H'
        } else if (262 <= nextSurfaceInt <= 313) {
            return 'G'
        } else if (314 <= nextSurfaceInt <= 366) {
            return 'F'
        } else if (367 <= nextSurfaceInt <= 418) {
            return 'E'
        } else if (419 <= nextSurfaceInt <= 470) {
            return 'D'
        } else if (471 <= nextSurfaceInt <= 524) {
            return 'C'
        } else if (525 <= nextSurfaceInt <= 601) {
            return 'B'
        } else if (602 <= nextSurfaceInt < 1440) {
            return 'A'
        } else {
            return 'No Group'
        }
    } else if (endingLetter === 'M') {
        if (10 <= nextSurfaceInt <= 52) {
            return 'M'
        } else if (10 <= nextSurfaceInt <= 104) {
            return 'L'
        } else if (105 <= nextSurfaceInt <= 157) {
            return 'K'
        } else if (158 <= nextSurfaceInt <= 209) {
            return 'J'
        } else if (210 <= nextSurfaceInt <= 261) {
            return 'I'
        } else if (262 <= nextSurfaceInt <= 313) {
            return 'H'
        } else if (314 <= nextSurfaceInt <= 366) {
            return 'G'
        } else if (367 <= nextSurfaceInt <= 418) {
            return 'F'
        } else if (419 <= nextSurfaceInt <= 470) {
            return 'E'
        } else if (471 <= nextSurfaceInt <= 502) {
            return 'D'
        } else if (503 <= nextSurfaceInt <= 577) {
            return 'C'
        } else if (578 <= nextSurfaceInt <= 653) {
            return 'B'
        } else if (654 <= nextSurfaceInt < 1440) {
            return 'A'
        } else {
            return 'No Group'
        }
    } else if (endingLetter === 'N') {
        if (10 <= nextSurfaceInt <= 52) {
            return 'N'
        } else if (53 <= nextSurfaceInt <= 104) {
            return 'M'
        } else if (105 <= nextSurfaceInt <= 157) {
            return 'L'
        } else if (158 <= nextSurfaceInt <= 209) {
            return 'K'
        } else if (210 <= nextSurfaceInt <= 261) {
            return 'J'
        } else if (262 <= nextSurfaceInt <= 313) {
            return 'I'
        } else if (314 <= nextSurfaceInt <= 366) {
            return 'H'
        } else if (367 <= nextSurfaceInt <= 418) {
            return 'G'
        } else if (419 <= nextSurfaceInt <= 470) {
            return 'F'
        } else if (471 <= nextSurfaceInt <= 522) {
            return 'E'
        } else if (523 <= nextSurfaceInt <= 574) {
            return 'D'
        } else if (575 <= nextSurfaceInt <= 629) {
            return 'C'
        } else if (630 <= nextSurfaceInt <= 705) {
            return 'B'
        } else if (706 <= nextSurfaceInt < 1440) {
            return 'A'
        } else {
            return 'No Group'
        }
    }
}

module.exports = newStartingLetterGroup;