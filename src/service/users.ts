export const getUsersData = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=10')
    if (!response.ok) {
      throw new Error(`Unable to fetch users: ${response.status}`)
    }
    const users = await response.json()
    return users
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
