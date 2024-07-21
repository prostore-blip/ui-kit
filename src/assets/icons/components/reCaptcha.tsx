import { memo } from 'react'

export const ReCaptcha = memo(() => (
  <svg
    fill={'none'}
    height={'31'}
    viewBox={'0 0 30 31'}
    width={'30'}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <g filter={'url(#filter0_i_3663_9430)'}>
      <path
        d={
          'M26.4407 25.4069L21.3559 20.8307C20.339 21.8476 18.8136 23.8815 14.7458 23.8815C10.678 23.8815 9.15254 21.8476 7.62712 20.3222L11.1864 16.2544H0V28.4578L3.05085 25.4069C4.57627 26.9324 9.05085 31.0002 14.7458 31.0002C20.4407 31.0002 24.7458 27.1019 26.4407 25.4069Z'
        }
        fill={'#B5B6B5'}
      />
    </g>
    <g filter={'url(#filter1_i_3663_9430)'}>
      <path
        d={
          'M14.2373 13.2034L10.678 9.13559C7.11865 11.1695 6.44068 14.7288 6.61017 16.2542H0C0 15.2373 0.0980008 11.9414 1.01695 9.64407C2.0339 7.1017 4.23729 5.40678 5.59322 4.55932L2.54238 1H14.2373L14.2373 13.2034Z'
        }
        fill={'#4D8DF4'}
      />
    </g>
    <g filter={'url(#filter2_i_3663_9430)'}>
      <path
        d={
          'M18.3051 15.7456L21.8644 12.1864C19.8305 8.62712 15.9322 8.11854 14.2373 8.11857V1C15.7627 1.00001 19.8305 1.50847 21.8644 3.0339C23.762 4.45705 25.2543 6.08462 25.9322 7.10157L29.4915 4.05072V15.7456H18.3051Z'
        }
        fill={'#1B3CAC'}
      />
    </g>
    <path
      d={
        'M18.3051 15.7456L21.8644 12.1864C19.8305 8.62712 15.9322 8.11854 14.2373 8.11857V1C15.7627 1.00001 19.8305 1.50847 21.8644 3.0339C23.762 4.45705 25.2543 6.08462 25.9322 7.10157L29.4915 4.05072V15.7456H18.3051Z'
      }
      stroke={'black'}
      strokeWidth={'0.2'}
    />
    <defs>
      <filter
        colorInterpolationFilters={'sRGB'}
        filterUnits={'userSpaceOnUse'}
        height={'15.7456'}
        id={'filter0_i_3663_9430'}
        width={'27.4407'}
        x={'0'}
        y={'15.2544'}
      >
        <feFlood floodOpacity={'0'} result={'BackgroundImageFix'} />
        <feBlend in={'SourceGraphic'} in2={'BackgroundImageFix'} mode={'normal'} result={'shape'} />
        <feColorMatrix
          in={'SourceAlpha'}
          result={'hardAlpha'}
          type={'matrix'}
          values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'}
        />
        <feOffset dx={'1'} dy={'-1'} />
        <feGaussianBlur stdDeviation={'0.5'} />
        <feComposite in2={'hardAlpha'} k2={'-1'} k3={'1'} operator={'arithmetic'} />
        <feColorMatrix type={'matrix'} values={'0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0'} />
        <feBlend in2={'shape'} mode={'normal'} result={'effect1_innerShadow_3663_9430'} />
      </filter>
      <filter
        colorInterpolationFilters={'sRGB'}
        filterUnits={'userSpaceOnUse'}
        height={'16.2544'}
        id={'filter1_i_3663_9430'}
        width={'15.2373'}
        x={'0'}
        y={'0'}
      >
        <feFlood floodOpacity={'0'} result={'BackgroundImageFix'} />
        <feBlend in={'SourceGraphic'} in2={'BackgroundImageFix'} mode={'normal'} result={'shape'} />
        <feColorMatrix
          in={'SourceAlpha'}
          result={'hardAlpha'}
          type={'matrix'}
          values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'}
        />
        <feOffset dx={'1'} dy={'-1'} />
        <feGaussianBlur stdDeviation={'0.5'} />
        <feComposite in2={'hardAlpha'} k2={'-1'} k3={'1'} operator={'arithmetic'} />
        <feColorMatrix type={'matrix'} values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'} />
        <feBlend in2={'shape'} mode={'normal'} result={'effect1_innerShadow_3663_9430'} />
      </filter>
      <filter
        colorInterpolationFilters={'sRGB'}
        filterUnits={'userSpaceOnUse'}
        height={'15.9458'}
        id={'filter2_i_3663_9430'}
        width={'16.4542'}
        x={'14.1373'}
        y={'-0.100098'}
      >
        <feFlood floodOpacity={'0'} result={'BackgroundImageFix'} />
        <feBlend in={'SourceGraphic'} in2={'BackgroundImageFix'} mode={'normal'} result={'shape'} />
        <feColorMatrix
          in={'SourceAlpha'}
          result={'hardAlpha'}
          type={'matrix'}
          values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'}
        />
        <feOffset dx={'1'} dy={'-1'} />
        <feGaussianBlur stdDeviation={'0.5'} />
        <feComposite in2={'hardAlpha'} k2={'-1'} k3={'1'} operator={'arithmetic'} />
        <feColorMatrix type={'matrix'} values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'} />
        <feBlend in2={'shape'} mode={'normal'} result={'effect1_innerShadow_3663_9430'} />
      </filter>
    </defs>
  </svg>
))
