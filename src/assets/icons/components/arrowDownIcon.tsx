import { type Ref, type SVGProps, forwardRef, memo } from 'react'

import { IconWrapper } from '../IconWrapper'

const SvgArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <IconWrapper
    icon={
      <svg
        height={'100%'}
        ref={ref}
        viewBox={'0 0 24 24'}
        width={'100%'}
        xmlns={'http://www.w3.org/2000/svg'}
        {...props}
      >
        <path
          d={
            'M5.514 9.458a1 1 0 0 1 1.64-.77l5.36 4.48 5.37-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.15 1.46l-6 4.83a1 1 0 0 1-1.27 0l-6-5a1 1 0 0 1-.36-.83'
          }
          fill={'currentColor'}
        />
      </svg>
    }
  />
)
const ForwardRef = forwardRef(SvgArrowDown)
const Memo = memo(ForwardRef)

export default Memo
