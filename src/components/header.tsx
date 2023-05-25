import { cookies } from 'next/headers'
import Link from 'next/link'

import { ThemeSwitcher } from '@/components/theme-switcher'

const Header = () => {
  enum Theme {
    dark = 'dark',
    light = 'light',
  }
  const theme =
    cookies().get('theme')?.value === 'dark' ? Theme.dark : Theme.light
  return (
    <header className="container flex items-center justify-between py-5">
      <Link href="/" className="text-2xl font-bold">
        &lt;&#164;&gt;
      </Link>
      <ThemeSwitcher theme={theme} />
    </header>
  )
}

export default Header
