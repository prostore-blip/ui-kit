import type { FC } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './tabs.module.scss'

export type TabType = {
  disabled?: boolean
  title: string
  // A unique value that associates the trigger with a content
  value: string
}

export type TabsProps = {
  // use when you do not need to control the state of the tabs
  defaultValue?: string
  // The value of the tab that should be active when initially rendered
  // Event handler called when the value changes
  onValueChange?: (value: string) => void
  tabs: TabType[]
  // The controlled value of the tab to activate. Should be used in conjunction with onValueChange
  value?: string
  variant: 'blue' | 'grey'
}

export const Tabs: FC<TabsProps> = ({ defaultValue, onValueChange, tabs, value, variant }) => {
  return (
    <RadixTabs.Root
      className={clsx(s.RadixTabsRoot)}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      value={value}
    >
      <RadixTabs.List className={clsx(s.RadixTabsList)}>
        {tabs.map(tab => (
          <RadixTabs.Trigger
            className={clsx(s.RadixTabsTrigger, s[variant])}
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            {tab.title}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
    </RadixTabs.Root>
  )
}
