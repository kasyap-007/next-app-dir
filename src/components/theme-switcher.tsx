// app router dark mode implementation from: https://github.com/vercel/next.js/discussions/47952
'use client'

import { FC, useState } from 'react'

import Icon from '@/components/ui/icon'

enum Theme {
  dark = 'dark',
  light = 'light',
}

interface Props {
  theme: Theme
}

export const ThemeSwitcher: FC<Props> = ({ theme }) => {
  const [_theme, setTheme] = useState<Theme>(theme)

  const toogleTheme = () => {
    const root = document.getElementsByTagName('html')[0]
    root.classList.toggle(Theme.dark)
    if (root.classList.contains(Theme.dark)) {
      setTheme(Theme.dark)
      document.cookie = `theme=${Theme.dark}`
    } else {
      setTheme(Theme.light)
      document.cookie = `theme=${Theme.light}`
    }
  }

  return (
    <button
      type="button"
      aria-label="account"
      className="icon"
      onClick={toogleTheme}
    >
      {_theme == Theme.dark ? (
        <Icon iconName="SunFill" className="md:h-5 md:w-5" /> //sunfill
      ) : (
        <Icon iconName="MoonStarsFill" className="md:h-5 md:w-5" /> //moonstarfill
      )}
    </button>
  )
}
