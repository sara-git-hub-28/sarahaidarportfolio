'use server'

import { setRequestLocale } from "next-intl/server";
import { cookies } from "next/headers";

export async function changeLocale(newLocale: string): Promise<void> {
    let cookieStore = await cookies();
    cookieStore.set({ name: 'locale', value: newLocale})
    setRequestLocale(newLocale)
    return
}

export async function getLocale(): Promise<string|undefined> {
    let cookieStore = await cookies();
    return cookieStore.get('locale')?.value;
}