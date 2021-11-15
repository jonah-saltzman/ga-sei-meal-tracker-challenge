'use strict'

const user = {
	name: 'Christopher Robin',
	email: 'sei@christopherRobin.com',
	runs: [
		{
			date: '2017-05-25 15:00',
			distance: 1200,
			timeTaken: 600
		},
		{
			date: '2017-05-25 15:00',
			distance: 1400,
			timeTaken: 800
		}
	],
	totalDistance: function () {
		let distance = 0
		for (const element of this.runs) {
			distance += element.distance
		}
		return distance
	},
	longestRunDistance: function () {
		let longest = 0
		for (const element of this.runs) {
			if (element.distance > longest) {
				longest = element.distance
			}
		}
		return longest
	},
	averageSpeed: function () {
		let totalDistance = 0
    let totalTime = 0
		for (const element of this.runs) {
      totalDistance += element.distance
      totalTime += element.timeTaken
		}
		return totalDistance / totalTime
	}
}

console.log(user.name)
console.log(user.totalDistance())
console.log(user.longestRunDistance())
console.log(user.averageSpeed() + " m/s")

module.exports = user
