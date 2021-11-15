'use strict'


const meal1 = {
  title: 'breakfast',
  date: '2021-11-15',
  description: 'N/A',
  calories: 1000
}

const meal2 = {
	title: 'dinner',
	date: '2021-11-15',
	description: 'N/A',
	calories: 2000,
}

const meal3 = {
	title: 'breakfast',
	date: '2021-11-16',
	description: 'N/A',
	calories: 5000,
}

const meal4 = {
	title: 'breakfast',
	date: '2021-11-16',
	description: 'N/A',
	calories: 10000,
}

const user = {
  name: 'Jonah',
  bornOn: '1994-12-18',
  calorieTarget: 10000,
  meals: [meal1, meal2, meal3, meal4],
  caloriesEatenOn: function(date) {
    let totalCals = 0
    for (const meal of this.meals) {
      if (meal.date === date) {
        totalCals += meal.calories
      }
    }
    return totalCals
  },
  avgDailyCalories: function() {
    const days = {}
    let totalCals = 0
    for (const meal of this.meals) {
      if (!Object.keys(days).includes(meal.date)) {
        days[meal.date] = meal.calories
      }
      else {
        days[meal.date] += meal.calories
      }
      totalCals += meal.calories
    }
    return Math.floor(totalCals / Object.keys(days).length)
  },
  onTrack: function() {
    return this.avgDailyCalories() <= this.calorieTarget ? true : false
  }
}

console.log(user.onTrack())

module.exports = user
