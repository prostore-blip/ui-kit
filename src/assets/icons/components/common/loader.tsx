import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (
  { height = 100, width = 100, ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="currentColor"
    height={height}
    ref={ref}
    viewBox="0 0 108 108"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <rect fill="#333333" height="108" id="rect" rx="10" width="108"></rect>
    <circle
      cx="54"
      cy="54"
      fill="#4C8DFF"
      id="circle"
      r="25"
      stroke="white"
      strokeDasharray="157"
      strokeWidth="10"
    >
      <animate
        attributeName="stroke-dashoffset"
        dur="2s"
        fill="freeze"
        from="314"
        id="load"
        repeatCount="indefinite"
        to="0"
      />
    </circle>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
