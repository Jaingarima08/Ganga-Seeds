import BackToTop from "./BacktoTop"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-white py-4 mt-10">
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


