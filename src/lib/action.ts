'use server'

import { FormLogin } from "@/app/login/page"
import { signIn } from "./auth"

 
 
export async function authenticate(_currentState: unknown, formData: FormLogin) {
  try {
    await signIn(formData)
  } catch (error: any) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}