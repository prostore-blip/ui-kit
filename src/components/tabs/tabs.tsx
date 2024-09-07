import { ComponentPropsWithoutRef } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './tabs.module.scss'

export type TabItem = {
  disabled?: boolean
  title: string
  value: string
}

export type TabsProps = {
  tabs: TabItem[]
} & ComponentPropsWithoutRef<typeof RadixTabs.Root>

export const Tabs = ({ tabs, ...restProps }: TabsProps) => {
  return (
    <RadixTabs.Root {...restProps}>
      <RadixTabs.List className={clsx(s.tabsList)}>
        {tabs.map(tab => (
          <RadixTabs.Trigger
            className={clsx(s.tabsTrigger, tab.disabled && s.disabledTab)}
            disabled={tab.disabled}
            key={tab.value + tab.title}
            value={tab.value}
          >
            {tab.title}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
    </RadixTabs.Root>
  )
}
