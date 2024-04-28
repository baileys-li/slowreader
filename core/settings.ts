import { persistentAtom } from '@nanostores/persistent'
import { nanoid } from 'nanoid'

import { getClient } from './client.js'
import { getEnvironment } from './environment.js'

export const userId = persistentAtom<string | undefined>('slowreader:userId')

export async function signOut(): Promise<void> {
  await getClient().clean()
  userId.set(undefined)
  getEnvironment().restartApp()
}

export function generateCredentials(): void {
  userId.set(nanoid(10))
}

export type ThemeOption = 'dark' | 'light' | 'system'

export const theme = persistentAtom<ThemeOption>('slowreader:theme', 'system')

export const preloadImages = persistentAtom<'always' | 'free' | 'never'>(
  'slowreader:preloadImages',
  'always'
)
