import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (
  { height = 10, width = 7, ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="currentColor"
    height={height}
    ref={ref}
    viewBox="0 0 7 10"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M1.99999 10L0.937988 8.938L4.87499 5L0.937988 1.062L1.99999 0L6.99999 5L1.99999 10Z"
      fill="currentColor"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
