import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePic from './components/HomePic'
import MiniImages from './components/MiniImages'
import ProductList from './components/ProductList'
import SmallPics from './components/SmallPics'

function App() {

  return (
    <>
      <Header />
      <div className="w-[100%] flex justify-center">
        <div className="w-[82%] mt-[12vh]">
          <HomePic />
        </div>
      </div>
      <div className="w-[100%] flex justify-center">
        <div className="w-[80%]">
          <SmallPics />
          <MiniImages />
          <ProductList />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
