import { SVGAttributes } from 'react'
 interface LogoProps extends SVGAttributes<HTMLOrSVGElement>{}
export function Logo(props: LogoProps) {
  return (
    <svg
      width={130}
      height={148}
      viewBox="0 0 130 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M130 74.013c0-8.604-10.785-16.758-27.32-21.815 3.816-16.838 2.12-30.234-5.352-34.523-1.723-1.006-3.737-1.483-5.936-1.483v5.904c1.22 0 2.2.239 3.021.689 3.604 2.065 5.167 9.928 3.948 20.041-.291 2.489-.768 5.11-1.351 7.784-5.194-1.271-10.865-2.25-16.827-2.886-3.577-4.898-7.287-9.346-11.023-13.237C77.8 26.465 85.907 22.07 91.42 22.07v-5.904c-7.287 0-16.827 5.19-26.472 14.19-9.645-8.948-19.185-14.084-26.472-14.084v5.904c5.486 0 13.62 4.368 22.259 12.337a125.071 125.071 0 00-10.944 13.21c-5.989.636-11.66 1.616-16.853 2.913a79.83 79.83 0 01-1.378-7.678c-1.245-10.113.292-17.976 3.869-20.067.795-.477 1.828-.689 3.047-.689v-5.904c-2.226 0-4.24.477-5.988 1.483-7.446 4.289-9.116 17.659-5.273 34.444C10.732 57.308 0 65.435 0 74.013c0 8.605 10.785 16.759 27.32 21.815-3.816 16.838-2.12 30.234 5.352 34.523 1.723 1.006 3.736 1.483 5.962 1.483 7.287 0 16.827-5.189 26.472-14.19 9.645 8.948 19.185 14.084 26.472 14.084 2.225 0 4.24-.477 5.988-1.483 7.446-4.288 9.116-17.658 5.273-34.443C119.268 90.745 130 82.59 130 74.013zM95.5 56.355c-.981 3.415-2.2 6.936-3.578 10.457a125.247 125.247 0 00-3.471-6.354c-1.219-2.118-2.517-4.183-3.816-6.195 3.763.556 7.393 1.244 10.864 2.092zM83.362 84.55c-2.067 3.574-4.186 6.963-6.386 10.114-3.948.344-7.95.529-11.977.529-4.001 0-8.002-.185-11.924-.503-2.2-3.15-4.346-6.513-6.413-10.06a137.82 137.82 0 01-5.511-10.537 137.936 137.936 0 015.485-10.564c2.067-3.574 4.187-6.963 6.386-10.113 3.948-.344 7.95-.53 11.977-.53 4.001 0 8.002.186 11.924.503 2.2 3.15 4.346 6.513 6.413 10.06a137.803 137.803 0 015.511 10.538 148.14 148.14 0 01-5.485 10.563zm8.56-3.442c1.43 3.548 2.649 7.096 3.656 10.537a119.026 119.026 0 01-10.917 2.118c1.298-2.038 2.596-4.13 3.815-6.274a150.265 150.265 0 003.445-6.38zm-26.87 28.249c-2.464-2.542-4.929-5.374-7.366-8.472 2.384.106 4.822.185 7.287.185 2.49 0 4.955-.053 7.366-.185a103.359 103.359 0 01-7.287 8.472zM45.338 93.763c-3.762-.556-7.393-1.244-10.864-2.091.98-3.415 2.2-6.936 3.577-10.458a125.25 125.25 0 003.472 6.354 175.255 175.255 0 003.815 6.195zM64.921 38.67c2.464 2.542 4.928 5.375 7.366 8.472A164.178 164.178 0 0065 46.956c-2.49 0-4.955.053-7.367.185 2.385-3.097 4.85-5.93 7.288-8.471zM45.31 54.264c-1.297 2.039-2.596 4.13-3.815 6.275a149.563 149.563 0 00-3.445 6.353 113.413 113.413 0 01-3.656-10.536c3.47-.821 7.128-1.536 10.917-2.092zM21.332 87.41c-9.38-3.997-15.448-9.24-15.448-13.396 0-4.156 6.068-9.425 15.448-13.396 2.279-.98 4.77-1.853 7.34-2.674 1.51 5.19 3.498 10.59 5.962 16.123-2.438 5.507-4.399 10.881-5.883 16.044-2.623-.82-5.114-1.721-7.419-2.7zm14.256 37.833c-3.604-2.065-5.167-9.928-3.948-20.042.291-2.488.768-5.109 1.351-7.783 5.194 1.27 10.864 2.25 16.827 2.886 3.577 4.897 7.286 9.345 11.023 13.237-8.639 8.022-16.747 12.417-22.259 12.417-1.192-.027-2.199-.265-2.994-.715zm62.854-20.174c1.245 10.113-.292 17.976-3.87 20.068-.794.476-1.827.688-3.046.688-5.486 0-13.62-4.368-22.259-12.337 3.71-3.892 7.42-8.313 10.944-13.211 5.989-.635 11.66-1.615 16.853-2.912.61 2.674 1.086 5.242 1.378 7.704zm10.201-17.659c-2.278.98-4.769 1.854-7.34 2.674-1.51-5.189-3.497-10.59-5.962-16.123 2.438-5.506 4.4-10.88 5.883-16.043 2.623.82 5.114 1.72 7.446 2.7 9.38 3.998 15.448 9.24 15.448 13.396-.026 4.157-6.094 9.425-15.475 13.396z"
        fill="#61DAFB"
      />
      <path
        d="M64.974 86.112c6.688 0 12.11-5.417 12.11-12.099s-5.422-12.099-12.11-12.099c-6.689 0-12.11 5.417-12.11 12.1 0 6.681 5.422 12.098 12.11 12.098z"
        fill="#61DAFB"
      />
    </svg>
  )
}

