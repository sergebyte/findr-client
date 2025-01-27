import AuthLayout from '@/components/Auth/AuthLayout'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { useAuth0 } from 'react-native-auth0'

export default function LoginScreen() {
  const { authorize, user, isLoading } = useAuth0()
  const router = useRouter()

  const login = async () => {
    try {
      await authorize()
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (user && !isLoading) {
      router.replace('/')
    }
  }, [isLoading, router, user])

  return <AuthLayout onPress={login} />
}
