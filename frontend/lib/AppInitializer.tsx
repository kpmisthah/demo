// components/AppInitializer.tsx
'use client'

import { useEffect, useState } from 'react'
import { useAuthStore } from '@/store/Auth'
import { User } from '@/modules/admin/types/user.type'

export default function AppInitializer({
  user,
  children
}: {
  user: User
  children: React.ReactNode
}) {
  const [loaded,setLoaded] = useState(false)
  const setAuthUser = useAuthStore((state) => state.setAuthUser)
  useEffect(() => {
    if (user) {
      setAuthUser(user)
    }
    setLoaded(true)
  }, [user, setAuthUser])

  if(!loaded) return null
  return <>{children}</>
}
