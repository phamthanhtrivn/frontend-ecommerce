import { useContext } from "react"
import { ShopContext } from "../../context/ShopContext"
import Title from "../Title"

function CartTotal() {
  const { currency, delivery_fee, totalCartAmount, formatMoney } = useContext(ShopContext)
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={'TỔNG'} text2={'TIỀN'} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{formatMoney(totalCartAmount)} {currency}</p>
        </div>
        <hr className="text-gray-300" />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{formatMoney(delivery_fee)} {currency}</p>
        </div>
        <hr className="text-gray-300" />
        <div className="flex justify-between text-xl sm:text-2xl">
          <b>Total</b>
          <b>{totalCartAmount === 0 ? 0 : formatMoney(totalCartAmount + delivery_fee)} {currency}</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal