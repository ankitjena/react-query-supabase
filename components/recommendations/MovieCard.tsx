export default function MovieCard({title, poster_path}) {
  return (
    <div className="grid place-items-center shadow rounded py-4">
      <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`} />
      <p className="mt-4 text-2xl font-semibold">{title}</p>
    </div>
  )
}