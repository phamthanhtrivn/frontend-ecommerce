import { assets } from "../../assets/frontend_assets/assets"

function OurPolicy() {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">

      <div>
        <img className="w-12 m-auto mb-5" src={assets.exchange_icon} alt="exchange_icon" />
        <p className="font-semibold">Chính Sách Đổi Trả Dễ Dàng</p>
        <p className="text-gray-400">Chúng tôi cung cấp chính sách trao đổi miễn phí</p>
      </div>
      <div>
        <img className="w-12 m-auto mb-5" src={assets.quality_icon} alt="quality_icon" />
        <p className="font-semibold">Chính Sách Hoàn Trả 7 ngày</p>
        <p className="text-gray-400">Chúng tôi cung cấp chính sách hoàn trả miễn phí 7 ngày</p>
      </div>
      <div>
        <img className="w-12 m-auto mb-5" src={assets.support_img} alt="support_img" />
        <p className="font-semibold">Hỗ Trợ Khách Hàng Tốt Nhất</p>
        <p className="text-gray-400">Chúng tôi cung cấp chính sách hỗ trợ khách hàng 24/7</p>
      </div>

    </div>
  )
}

export default OurPolicy