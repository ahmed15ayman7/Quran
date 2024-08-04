"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  isLogin?: boolean; // تحديد نوع العملية: تسجيل الدخول أو إنشاء حساب
}

export function UserAuthForm({ className, isLogin = false, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [formData, setFormData] = React.useState({
    nationalId: "",
    password: "",
    name: "",
    phoneNumber: "",
    confirmPassword: "",
  })
  
  const [errors, setErrors] = React.useState({
    nationalId: "",
    password: "",
    name: "",
    phoneNumber: "",
    confirmPassword: "",
  })

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    const { nationalId, password, name, phoneNumber, confirmPassword } = formData
    const newErrors = {
      nationalId: !validateNationalId(nationalId) ? "الرقم القومي يجب أن يكون 14 رقمًا" : "",
      password: password.length < 6 ? "يجب أن تحتوي كلمة المرور على الأقل على 6 أحرف" : "",
      name: !isLogin && name.trim() === "" ? "يرجى إدخال الاسم" : "",
      phoneNumber: !isLogin && phoneNumber.trim() === "" ? "يرجى إدخال رقم الهاتف" : "",
      confirmPassword: !isLogin && password !== confirmPassword ? "يجب أن تتطابق كلمتي المرور" : "",
    }
    setErrors(newErrors)

    if (Object.values(newErrors).some(error => error !== "")) {
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: "" }) // Clear error when input changes
  }

  const validateNationalId = (nationalId: string) => {
    const nationalIdRegex = /^\d{14}$/
    return nationalIdRegex.test(nationalId)
  }

  return (
    <div className="container flex relative h-[100vh] flex-col items-center justify-center   ">
        <Link
          href={isLogin ?'/sign-up':'/login'}
          className={cn(
            
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          {!isLogin ? "تسجيل الدخول" : "إنشاء حساب"}
        </Link>
       
        <div className="lg:p-8 flex items-center" style={{direction:"rtl"}}>
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {isLogin ? "تسجيل الدخول" : "إنشاء حساب"}
              </h1>
              <p className="text-sm text-muted-foreground">
                {isLogin ? "أدخل رقمك القومي وكلمة المرور لتسجيل الدخول" : "أدخل بريدك الإلكتروني وكلمة المرور لإنشاء حسابك"}
              </p>
            </div>
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          {!isLogin && (
            <div className="grid gap-1">
              <Label className="" htmlFor="name">
                الاسم
              </Label>
              <Input
                id="name"
                placeholder="الاسم"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
              />
              <div className="text-red-600">{errors.name}</div>
            </div>
          )}
          {!isLogin && (
            <div className="grid gap-1">
              <Label className="" htmlFor="phone-number">
                رقم الهاتف
              </Label>
              <Input
                id="phone-number"
                placeholder="رقم الهاتف"
                type="tel"
                name="phoneNumber"
                style={{direction:"rtl"}}
                value={formData.phoneNumber}
                onChange={handleChange}
                disabled={isLoading}
              />
              <div className="text-red-600">{errors.phoneNumber}</div>
            </div>
          )}
          <div className="grid gap-1">
            <Label className="" htmlFor="national-id">
              الرقم القومي
            </Label>
            <Input
              id="national-id"
              placeholder="الرقم القومي"
              type="tel"
              maxLength={14}
              name="nationalId"
              style={{direction:"rtl"}}
              value={formData.nationalId}
              onChange={handleChange}
              disabled={isLoading}
            />
            <div className="text-red-600">{errors.nationalId}</div>
          </div>
          <div className="grid gap-1">
            <Label className="" htmlFor="password">
              الرقم السري
            </Label>
            <Input
              id="password"
              placeholder="الرقم السري"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
            />
            <div className="text-red-600">{errors.password}</div>
          </div>
          {!isLogin && (
            <div className="grid gap-1">
              <Label className="" htmlFor="confirm-password">
                تأكيد الرقم السري
              </Label>
              <Input
                id="confirm-password"
                placeholder="تأكيد الرقم السري"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                disabled={isLoading}
              />
              <div className="text-red-600">{errors.confirmPassword}</div>
            </div>
          )}
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {isLogin ? "تسجيل الدخول" : "إنشاء الحساب"}
          </Button>
        </div>
      </form>
    </div>

          </div>
        </div>
      </div>

  )
}
