import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (
  { height = 18, width = 18, ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="currentColor"
    height={height}
    ref={ref}
    viewBox="0 -960 960 960"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
