import BackToTop from "./BacktoTop"

const Footer = () => {
  return (
    <footer className="bg-[#37ff7d] py-4 mt-10">
      <div className="container mx-auto text-center text-md flex flex-row justify-between px-4">
        <p className="text-md">
          &copy; {new Date().getFullYear()} GangaSeeds. All rights reserved.
        </p>
           <BackToTop />
      </div>
      
    </footer>
  )
}

export default Footer


