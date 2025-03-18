import { auth } from '@clerk/nextjs/server'

const DefaultPage = async () => {
  const { userId } = await auth()

  return <h1>Hello, {userId}</h1>
}
export default DefaultPage
