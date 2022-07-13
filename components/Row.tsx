import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"
import { useRef, useState } from "react"
import { Movie } from "../typings"
import Thumbnail from "./Thumbnail"

interface Props {
  title: string
  movies: Movie[]
}

function Row({ title, movies } : Props) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction : string) => {
    setIsMoved(true)

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo = 
        direction === "left" 
          ? scrollLeft - clientWidth 
          : scrollLeft + clientWidth

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  console.log(rowRef.current?.scrollLeft, rowRef.current?.clientWidth)

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="rowTitle">{title}</h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon className={`rowIcon left-2 ${!isMoved && "hidden" }`}
          onClick={() => handleClick("left")}
        />
        
        <div className="flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll 
                        md:space-x-2.5 md:p-2"
            ref={rowRef}
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon className={`rowIcon right-2`}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  )
}

export default Row