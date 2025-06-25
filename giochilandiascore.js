/**
 * GiochilandiaScore - Simple Score Tracker Utility
 * Author: Giochilandia
 * License: Custom
 */

class GiochilandiaScore {
    /**
     * Initializes the score tracker.
     * @param {string} playerName - Name of the player.
     */
    constructor(playerName) {
        if (typeof playerName !== 'string' || playerName.trim() === '') {
            throw new Error('[GiochilandiaScore] Invalid player name.');
        }
        this.playerName = playerName;
        this.score = 0;
    }

    /**
     * Increases the score by a given amount.
     * @param {number} points - Points to add.
     */
    add(points) {
        if (typeof points !== 'number' || points <= 0) {
            console.error('[GiochilandiaScore] Invalid point value.');
            return;
        }
        this.score += points;
        console.log(`[GiochilandiaScore] ${this.playerName} gained ${points} points. Total: ${this.score}`);
    }

    /**
     * Resets the score to zero.
     */
    reset() {
        this.score = 0;
        console.log(`[GiochilandiaScore] ${this.playerName}'s score reset.`);
    }

    /**
     * Gets the current score.
     * @returns {number}
     */
    getScore() {
        return this.score;
    }
}

// Example usage:
// const player = new GiochilandiaScore('Mario');
// player.add(10);
// player.add(5);
// console.log(player.getScore()); // Output: 15
// player.reset();

module.exports = GiochilandiaScore;
