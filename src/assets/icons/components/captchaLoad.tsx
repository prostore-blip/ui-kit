import { type SVGProps, memo } from 'react'

import s from './captchaLoad.module.scss'

export const CaptchaLoad = memo((props: SVGProps<SVGSVGElement>) => (
  <svg
    className={s.load}
    fill={'none'}
    height={'13'}
    viewBox={'0 0 18 17'}
    width={'13'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={'M2.5 2C6.69126 2.20312 15.159 5.0875 15.5 15'}
      stroke={'#4D8DF4'}
      strokeLinecap={'round'}
      strokeWidth={'4'}
    />
  </svg>
))
