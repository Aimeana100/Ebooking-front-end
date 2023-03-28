export const datesInRange = function (startDate, endDate, steps = 1) {
  const dateArray = []
  let currentDate = new Date(startDate)

  while (currentDate <= new Date(endDate)) {
    dateArray.push(new Date(currentDate))
    // Use UTC date to prevent problems with time zones and DST
    currentDate.setUTCDate(currentDate.getUTCDate() + steps)
  }

  return dateArray
}
export const datesInRangeWithUnix = function (startDate, endDate, steps = 1) {
  const dateArray = []
  let currentDate = new Date(startDate)

  while (currentDate <= new Date(endDate)) {
    let date = new Date(currentDate)
    date.setUTCHours(0, 0, 0, 0)
    const utcDateWithoutTime = date.toISOString().slice(0, 10)
    dateArray.push(utcDateWithoutTime)
    // Use UTC date to prevent problems with time zones and DST
    currentDate.setUTCDate(currentDate.getUTCDate() + steps)
  }

  return dateArray
}

export const getUTCDateWithoutHours = function (date) {
  let newDate = new Date(date)
  newDate.setUTCHours(0, 0, 0, 0)
  const utcDateWithoutTime = newDate.toISOString().slice(0, 10)
  return utcDateWithoutTime
}
export const getAllRemoveDates = function (service) {
  const allDates = service.Reservations.map((e) => {
    if (e.status !== 'canceled') {
      return {
        dateIn: new Date(e.checkIn).toString(),
        dateOut: new Date(e.checkOut).toString(),
      }
    }
    return []
  })

  console.log(allDates)
  const nowDates = []
  const removeDates =
    allDates.length !== 0
      ? allDates.map((date) => {
          return datesInRange(date.dateIn, date.dateOut)
        })
      : allDates

  if (removeDates.length !== 0) {
    let justDates = removeDates.map((e) => e.map((ele) => nowDates.push(ele)))

    const uniqueDates = nowDates.filter(
      (value, index, array) => array.indexOf(value) === index,
    )

    return uniqueDates
  }
  return []
}
