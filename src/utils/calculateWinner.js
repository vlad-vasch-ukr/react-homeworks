export function calculateWinner(users) {
  const getSeconds = (time) => {
    const timeArr = time.split(':');
    let result = +timeArr[0] * 3600 + +timeArr[1] * 60 + +timeArr[2]
    return result
  }

  const sortedUsers = users.sort((a, b) => {
    const transformedA = getSeconds(a.time);
    const transformedB = getSeconds(b.time);
    return transformedA - transformedB
  })

  return sortedUsers[0]
}
