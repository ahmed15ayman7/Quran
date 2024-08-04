import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { UserAuthForm } from "@/components/shared/user-auth-form"

export const metadata: Metadata = {
  title: "المصادقة",
  description: "نماذج المصادقة المبنية باستخدام المكونات.",
}

export default function AuthenticationPage() {
  return (
      
            <UserAuthForm isLogin />     
  )
}
