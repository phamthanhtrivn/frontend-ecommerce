import { useContext, useState } from "react"
import { ShopContext } from "../../context/ShopContext"
import { assets } from "../../assets/frontend_assets/assets"

function Collection() {
  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t" >
      {/* Filter Options */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">LỌC
          <img className={``} src={assets.dropdown_icon} alt="dropdown_icon" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">LOẠI SẢN PHẨM</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Men"} /> Nam
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Women"} /> Nữ
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Kids"} /> Trẻ em
            </p>
          </div>
        </div>
        {/* Sub Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">KIỂU</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Topwear"} /> Topwear 
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Bottomwear"} /> Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Winnterwear"} /> Winnterwear
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection