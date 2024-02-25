
export const SocialPill = ({ href, children }) => {
  return (
    <a 
    className="bg-white/5 border border-white/10 rounded-full flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base hover:scale-110 hover:bg-white/10 transition"
    href={ href }
    target="_blank"
    rel="noopener noreferrer"
    >
    { children }
    </a>
  )
}
