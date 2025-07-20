
import { cookies } from "next/headers";
export async function getUserFromServer(){
    const cookieStore = await cookies()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`,{
        headers:{
            Cookie:cookieStore.getAll().map((cookie)=>`${cookie.name}=${cookie.value}`).join('; ')
        },
        cache:"no-store",
        credentials:'include'
    })
    if(!res.ok) return null
    return res.json()
}
