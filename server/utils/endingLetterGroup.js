const endingLetterGroup = function (depth, totalNitrogenTime,) {
    console.log(totalNitrogenTime);
    if (depth <= 20) {
        if (totalNitrogenTime <= 26) {
            return 'A';
        } else if (27 <= totalNitrogenTime <= 43) {
            return 'B';
        } else if (44 <= totalNitrogenTime <= 61) {
            return 'C';
        } else if (62 <= totalNitrogenTime <= 82) {
            return 'D';
        } else if (83 <= totalNitrogenTime <= 106) {
            return 'E';
        } else if (107 <= totalNitrogenTime <= 133) {
            return 'F';
        } else if (134 <= totalNitrogenTime <= 165) {
            return 'G';
        } else if (166 <= totalNitrogenTime <= 205) {
            return 'H';
        } else if (206 <= totalNitrogenTime <= 256) {
            return 'I';
        } else if (257 <= totalNitrogenTime <= 330) {
            return 'J';
        } else if (331 <= totalNitrogenTime <= 461) {
            return 'K';
        }
    } else if (21 <= depth <= 30) {
        if (totalNitrogenTime <= 17) {
            return 'A';
        } else if (18 <= totalNitrogenTime <= 27) {
            return 'B';
        } else if (28 <= totalNitrogenTime <= 38) {
            return 'C';
        } else if (39 <= totalNitrogenTime <= 50) {
            return 'D';
        } else if (51 <= totalNitrogenTime <= 62) {
            return 'E';
        } else if (63 <= totalNitrogenTime <= 76) {
            return 'F';
        } else if (77 <= totalNitrogenTime <= 91) {
            return 'G';
        } else if (92 <= totalNitrogenTime <= 107) {
            return 'H';
        } else if (108 <= totalNitrogenTime <= 125) {
            return 'I';
        } else if (126 <= totalNitrogenTime <= 145) {
            return 'J';
        } else if (146 <= totalNitrogenTime <= 167) {
            return 'K';
        } else if (168 <= totalNitrogenTime <= 193) {
            return 'L';
        } else if (194 <= totalNitrogenTime <= 223) {
            return 'M';
        }
    } else if (31 <= depth <= 40) {
        if (totalNitrogenTime <= 12) {
            return 'A';
        } else if (13 <= totalNitrogenTime <= 20) {
            return 'B';
        } else if (21 <= totalNitrogenTime <= 27) {
            return 'C';
        } else if (28 <= totalNitrogenTime <= 36) {
            return 'D';
        } else if (37 <= totalNitrogenTime <= 44) {
            return 'E';
        } else if (45 <= totalNitrogenTime <= 53) {
            return 'F';
        } else if (54 <= totalNitrogenTime <= 63) {
            return 'G';
        } else if (64 <= totalNitrogenTime <= 73) {
            return 'H';
        } else if (74 <= totalNitrogenTime <= 84) {
            return 'I';
        } else if (85 <= totalNitrogenTime <= 95) {
            return 'J';
        } else if (96 <= totalNitrogenTime <= 108) {
            return 'K';
        } else if (109 <= totalNitrogenTime <= 121) {
            return 'L';
        } else if (122 <= totalNitrogenTime <= 130) {
            return 'M';
        }
    } else if (41 <= depth <= 50) {
        if (totalNitrogenTime <= 9) {
            return 'A';
        } else if (10 <= totalNitrogenTime <= 15) {
            return 'B';
        } else if (16 <= totalNitrogenTime <= 21) {
            return 'C';
        } else if (22 <= totalNitrogenTime <= 28) {
            return 'D';
        } else if (29 <= totalNitrogenTime <= 34) {
            return 'E';
        } else if (35 <= totalNitrogenTime <= 41) {
            return 'F';
        } else if (42 <= totalNitrogenTime <= 48) {
            return 'G';
        } else if (49 <= totalNitrogenTime <= 56) {
            return 'H';
        } else if (57 <= totalNitrogenTime <= 63) {
            return 'I';
        } else if (64 <= totalNitrogenTime <= 71) {
            return 'J';
        } else if (72 <= totalNitrogenTime <= 75) {
            return 'K';
        }
    } else if (51 <= depth <= 60) {
        if (totalNitrogenTime <= 7) {
            return 'A';
        } else if (8 <= totalNitrogenTime <= 12) {
            return 'B';
        } else if (13 <= totalNitrogenTime <= 17) {
            return 'C';
        } else if (18 <= totalNitrogenTime <= 22) {
            return 'D';
        } else if (23 <= totalNitrogenTime <= 28) {
            return 'E';
        } else if (29 <= totalNitrogenTime <= 33) {
            return 'F';
        } else if (34 <= totalNitrogenTime <= 39) {
            return 'G';
        } else if (40 <= totalNitrogenTime <= 45) {
            return 'H';
        } else if (46 <= totalNitrogenTime <= 50) {
            return 'I';
        } 
    } else if (61 <= depth <= 70) {
        if (totalNitrogenTime <= 6) {
            return 'A';
        } else if (7 <= totalNitrogenTime <= 10) {
            return 'B';
        } else if (11 <= totalNitrogenTime <= 14) {
            return 'C';
        } else if (15 <= totalNitrogenTime <= 19) {
            return 'D';
        } else if (20 <= totalNitrogenTime <= 23) {
            return 'E';
        } else if (24 <= totalNitrogenTime <= 28) {
            return 'F';
        } else if (29 <= totalNitrogenTime <= 32) {
            return 'G';
        } else if (33 <= totalNitrogenTime <= 37) {
            return 'H';
        } else if (38 <= totalNitrogenTime <= 40) {
            return 'I';
        }
    } else if (71 <= depth <= 80) {
        if (totalNitrogenTime <= 5) {
            return 'A';
        } else if (6 <= totalNitrogenTime <= 9) {
            return 'B';
        } else if (10 <= totalNitrogenTime <= 12) {
            return 'C';
        } else if (13 <= totalNitrogenTime <= 16) {
            return 'D';
        } else if (17 <= totalNitrogenTime <= 20) {
            return 'E';
        } else if (21 <= totalNitrogenTime <= 24) {
            return 'F';
        } else if (25 <= totalNitrogenTime <= 28) {
            return 'G';
        } else if (29 <= totalNitrogenTime <= 30) {
            return 'H';
        } 
    } else if (81 <= depth <= 90) {
        if (totalNitrogenTime <= 4) {
            return 'A';
        } else if (5 <= totalNitrogenTime <= 7) {
            return 'B';
        } else if (8 <= totalNitrogenTime <= 11) {
            return 'C';
        } else if (12 <= totalNitrogenTime <= 14) {
            return 'D';
        } else if (15 <= totalNitrogenTime <= 17) {
            return 'E';
        } else if (18 <= totalNitrogenTime <= 21) {
            return 'F';
        } else if (22 <= totalNitrogenTime <= 24) {
            return 'G';
        } else if ( totalNitrogenTime = 25) {
            return 'H';
        }
    } else if (91 <= depth <= 100) {
        if (totalNitrogenTime <= 4) {
            return 'A';
        } else if (5 <= totalNitrogenTime <= 6) {
            return 'B';
        } else if (7 <= totalNitrogenTime <= 9) {
            return 'C';
        } else if (10 <= totalNitrogenTime <= 12) {
            return 'D';
        } else if (13 <= totalNitrogenTime <= 15) {
            return 'E';
        } else if (16 <= totalNitrogenTime <= 18) {
            return 'F';
        } else if (19 <= totalNitrogenTime <= 20) {
            return 'G';
        } 
    } else if (101 <= depth <= 110) {
        if (totalNitrogenTime <= 3) {
            return 'A';
        } else if (4 <= totalNitrogenTime <= 6) {
            return 'B';
        } else if (7 <= totalNitrogenTime <= 8) {
            return 'C';
        } else if (9 <= totalNitrogenTime <= 11) {
            return 'D';
        } else if (12 <= totalNitrogenTime <= 14) {
            return 'E';
        } else if (totalNitrogenTime = 15) {
            return 'F';
        }
    } else if (111 <= depth <= 120) {
        if (totalNitrogenTime <= 3) {
            return 'A';
        } else if (4 <= totalNitrogenTime <= 5) {
            return 'B';
        } else if (6 <= totalNitrogenTime <= 7) {
            return 'C';
        } else if (8 <= totalNitrogenTime <= 10) {
            return 'D';
        } else if (11 <= totalNitrogenTime <= 12) {
            return 'E';
        } 
    } else if (121 <= depth <= 130) {
        if (totalNitrogenTime <= 2) {
            return 'A';
        } else if (3 <= totalNitrogenTime <= 4) {
            return 'B';
        } else if (5 <= totalNitrogenTime <= 6) {
            return 'C';
        } else if (7 <= totalNitrogenTime <= 8) {
            return 'D';
        }
    };
}

module.exports = endingLetterGroup