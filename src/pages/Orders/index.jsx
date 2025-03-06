import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../../components/Title";
import axios from "axios";
import { toast } from "react-toastify";

function Orders() {
  const { backendUrl, token, currency, formatMoney } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, {headers: {token}})
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse());
        
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    loadOrderData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return (
    <div className="border-t pt-16 border-gray-300">
      <div className="text-2xl">
        <Title text1={"ĐƠN HÀNG"} text2={"CỦA TÔI"} />
      </div>

      <div >
        {
          orderData.map((product, index) => (
            <div key={index} className="py-4 border-gray-300 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-6 text-sm">
                <img className="w-16 sm:w-22" src={product.image[0]} alt="" />
                <div>
                  <p className="sm:text-base font-medium">{product.name}</p>
                  <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                    <p className="text-lg">{formatMoney(product.price)} {currency}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Size: {product.size}</p>
                  </div>
                  <p className="mt-1">Date: <span className="text-gray-400">{new Date(product.date).toDateString()}</span></p>
                  <p className="mt-1">Payment: <span className="text-gray-400">{product.paymentMethod}</span></p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text-sm sm:text-base">{product.status}</p>
                </div>
                <button onClick={loadOrderData} className="border px-4 py-2 text-sm font-medium rounded-sm border-gray-300 active:scale-95 transition-transform duration-150">Theo Dõi Đơn Hàng</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Orders;
