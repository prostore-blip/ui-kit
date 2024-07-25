import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import clsx from 'clsx'

import s from './dropDownHeader.module.scss'

import { Bookmark, DropDownTriggerIcon, LogOut, Settings, TrendingUp } from '../../assets/icons'
import { Typography } from '../index'
import { DropDown, DropDownContent, DropDownGroup, DropDownItem, DropDownTrigger } from './'

const meta: Meta<typeof DropDown> = {
  component: DropDown,
  tags: ['autodocs'],
  title: 'components/DropDownMenu',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DropDownMenu: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <DropDown onOpenChange={setOpen} open={open}>
          <DropDownTrigger>
            <div className={clsx(s.trigger, open ? s.openColor : s.closeColor)}>
              <DropDownTriggerIcon />
            </div>
          </DropDownTrigger>
          <DropDownContent align={'end'} alignOffset={0} className={clsx(s.content)} sideOffset={0}>
            <div>
              <DropDownGroup className={s.group}>
                <DropDownItem className={s.item}>
                  <Settings />
                  <Typography variant={'regular14'}>Profile Setting</Typography>
                </DropDownItem>
                <DropDownItem className={s.item}>
                  <TrendingUp />
                  <Typography variant={'regular14'}>Statistics</Typography>
                </DropDownItem>
                <DropDownItem className={s.item}>
                  <Bookmark />
                  <Typography variant={'regular14'}>Favorites</Typography>
                </DropDownItem>
                <DropDownItem className={s.item}>
                  <LogOut />
                  <Typography variant={'regular14'}>Log Out</Typography>
                </DropDownItem>
              </DropDownGroup>
            </div>
          </DropDownContent>
        </DropDown>
      </>
    )
  },
}
