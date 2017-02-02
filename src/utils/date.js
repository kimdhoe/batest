const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

// formatDate :: string -> string
// Given an ISO date string, produces a date string in the simple format.
// e.g. 2017-01-10  -->  Jan. 10
const formatDate = date => {
  const m = Number(date.slice(5, 7)) - 1
  const d = Number(date.slice(8, 10))

  return `${MONTH_NAMES[m]}. ${d}`
}

export { formatDate }
