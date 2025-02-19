/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = "VNĐ";
  const delivery_fee = 50000;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false)
  const [cartItems, setCartItems] = useState({})
  const navigate = useNavigate()

  const formatMoney = (number) => {
    return number.toLocaleString('vi-VN')
  }

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error('Vui lòng chọn size trước khi thêm vào giỏ hàng')
      return
    }

    let cartData = structuredClone(cartItems)
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1
      }
      else {
        cartData[itemId][size] = 1
      }
    }
    else {
      cartData[itemId] = {}
      cartData[itemId][size] = 1
    }
    setCartItems(cartData)
    toast.success('Thêm sản phẩm vào giỏ hàng thành công!', {
      position: 'top-center'
    })
  }

  const getCartCount = () => {
    let totalCount = 0
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalCount += cartItems[items][item]
        }
      }
    }
    return totalCount
  }

  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems)
    cartData[itemId][size] = quantity;
    setCartItems(cartData)
  }

  const getCartAmount = () => {
    let totalAmout = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items)
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalAmout += itemInfo.price * cartItems[items][item]
        }
      }
    }
    return totalAmout
  }

  const value = {
    products,
    currency,
    delivery_fee,
    search, 
    setSearch,
    showSearch,
    setShowSearch,
    cartItems, 
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    formatMoney
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;