'use server';

// import { deleteUserById } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function deleteUser(userId: number) {
  // Uncomment this to enable deletion
  // await deleteUserById(userId);
  // revalidatePath('/');
}
export async function Login(userId: number) {
  // Uncomment this to enable deletion
  // await deleteUserById(userId);
  // revalidatePath('/');
}
export async function SelectLevel(level: string,path:string) {
  // const response = await fetch('/api/submit', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(level),
  // });
  console.log(level)
  // revalidatePath(path);
}
