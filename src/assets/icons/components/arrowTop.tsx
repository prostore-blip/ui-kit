import type { SVGProps } from 'react'

export const ArrowTop = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill={'none'}
      height={8}
      viewBox={'0 0 15 8'}
      width={15}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <path
        d={
          'M14.542 6.514a1 1 0 0 1-1.64.77l-5.36-4.48-5.37 4.32a1 1 0 0 1-1.41-.15 1 1 0 0 1 .15-1.46l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .36.83Z'
        }
        fill={'#fffefe'}
      />
    </svg>
  )
}
