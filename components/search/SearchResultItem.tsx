import dayjs from 'dayjs'
import Image from 'next/image'
import useAddMovie from '../../hooks/useAddMovie'
import Loader from '../ui/loader'

export default function SearchResultItem({id, title, overview, poster_path, release_date}) {
  const addMovie = useAddMovie({
      movie_id: id, 
      title, 
      overview, 
      poster_path, 
      release_date
    })

  return (
    <div className="flex w-2/3 mt-4 shadow rounded py-2">
      <div className="h-30 w-1/4 grid place-items-center flex-none">
       <img src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${poster_path}`} alt="poster" height="150" width="150" />
      </div>
      <div className="px-4 flex flex-col justify-around">  
        <p className="text-2xl">{title}</p>
        <p className="text-base">{overview.slice(0, 200)}...</p>
        <p className="text-base">{dayjs(release_date).format('YYYY')}</p>
        {addMovie.isError && <div>{addMovie.error.message}</div>}
        <button 
          className="w-32 px-6 py-2 text-base bg-blue-500 text-white rounded"
          onClick={() => addMovie.mutate()}
        >
          {addMovie.isLoading ? 
            <span>
              <Loader 
                height={25}
                width={25}
              />
            </span>: 
            `Add`}
        </button>
      </div>
    </div>
  )
}