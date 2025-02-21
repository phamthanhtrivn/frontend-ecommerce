import { assets } from "../../assets/frontend_assets/assets"
import NewsletterBox from "../../components/NewsletterBox"
import Title from "../../components/Title"

function Contact() {
  return (
    <div>
      
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="contact_img" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Cửa Hàng Của Chúng Tôi</p>
          <p className="text-gray-500">12 Nguyễn Văn Bảo <br /> Phường 1, Quận Gò Vấp, TP.HCM</p>
          <p className="text-gray-500">Tel: (415) 555-0132 <br /> Email: admin@forever.com</p>
          <p className="font-semibold text-xl text-gray-600">Nghề Nghiệp tại Forever</p>
          <p className="text-gray-500">Tìm hiểu thêm về đội ngũ của chúng tôi và cơ hội việc làm</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 font-semibold">Khám Phá Công Việc</button>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default Contact