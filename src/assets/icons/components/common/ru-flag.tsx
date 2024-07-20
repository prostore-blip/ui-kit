import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (
  { height = 24, width = 24, ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="currentColor"
    height={height}
    ref={ref}
    viewBox="0 0 24 24"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <rect fill="url(#ru_pattern)" height="24" width="24" />
    <defs>
      <pattern height="1" id="ru_pattern" patternContentUnits="objectBoundingBox" width="1">
        <use transform="scale(0.0138889)" xlinkHref="#ru" />
      </pattern>
      <image
        height="72"
        id="ru"
        width="72"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
