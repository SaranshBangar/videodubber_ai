import { VscChevronRight } from "react-icons/vsc"

const Breadcrumbs = () => {
  return (
    <section className="flex flex-row justify-start items-center gap-2 py-5">
      <a href="https://www.producthunt.com/" className="text-sm font-light text-slate-700 hover:text-blue-400">Home</a>
      <VscChevronRight />
      <a href="https://www.producthunt.com/products/videodubber-fast-video-translator" className="text-sm font-light text-slate-700 hover:text-blue-500">Product</a>
      <VscChevronRight />
      <p className="text-sm font-normal text-slate-700 hover:text-blue-400">VideoDubber - Fast Video Translator</p>
    </section>
  )
}

export default Breadcrumbs