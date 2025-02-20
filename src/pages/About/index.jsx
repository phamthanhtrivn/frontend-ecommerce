import Title from "../../components/Title";
import { assets } from "../../assets/frontend_assets/assets";
import NewsletterBox from "../../components/NewsletterBox"

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="about_img"
        />
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-600">
          <p>
            Forever là điểm đến lý tưởng cho những ai yêu thích thời trang hiện
            đại và phong cách. Chúng tôi cung cấp đa dạng các mẫu quần áo từ
            thanh lịch đến cá tính, giúp bạn tự tin thể hiện bản thân mỗi ngày.
            Với chất liệu cao cấp, thiết kế hợp xu hướng và mức giá hợp lý,
            Forever cam kết mang đến trải nghiệm mua sắm tuyệt vời cho khách
            hàng.
          </p>
          <p>
            Tại Forever, bạn có thể dễ dàng tìm thấy những bộ trang phục phù hợp
            chỉ với vài cú nhấp chuột. Website thân thiện, hỗ trợ tìm kiếm
            nhanh, bộ lọc tiện lợi giúp bạn chọn sản phẩm theo sở thích. Đặc
            biệt, chúng tôi có chính sách đổi trả linh hoạt và giao hàng toàn
            quốc, đảm bảo mọi đơn hàng đến tay bạn nhanh chóng và an toàn.
          </p>
          <b className="text-gray-800">Nhiệm Vụ Của Chúng Tôi</b>
          <p>
            Sứ mệnh của chúng tôi là mang đến những sản phẩm chất lượng cao, hợp
            xu hướng với mức giá phải chăng, giúp mọi khách hàng tự tin và tỏa
            sáng trong mọi khoảnh khắc.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"TẠI SAO"} text2={"NÊN CHỌN CHÚNG TÔI"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Đảm Bảo Chất Lượng</b>
          <p className="text-gray-600" >
            Chất lượng luôn là ưu tiên hàng đầu. Chúng tôi lựa chọn kỹ lưỡng
            từng loại vải, chú trọng từng đường may để đảm bảo sản phẩm không
            chỉ đẹp mà còn bền bỉ theo thời gian. Mỗi thiết kế đều trải qua quy
            trình kiểm tra nghiêm ngặt trước khi đến tay khách hàng, giúp bạn
            luôn an tâm khi mua sắm.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-5 sm:py-20 flex flex-col gap-5">
          <b>Sự Tiện Lợi</b>
          <p className="text-gray-600" >
            Chúng tôi mang đến một trải nghiệm mua sắm đơn giản, nhanh chóng và
            thuận tiện. Với giao diện website thân thiện, bạn có thể dễ dàng tìm
            kiếm, chọn lọc và đặt hàng chỉ trong vài bước. Chúng tôi cũng hỗ trợ
            nhiều phương thức thanh toán an toàn, giúp bạn linh hoạt trong mọi
            giao dịch.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Dịch Vụ Khách Hàng Đặc Biệt</b>
          <p className="text-gray-600" >
            Sự hài lòng của khách hàng là ưu tiên hàng đầu. Chúng tôi cung cấp
            dịch vụ chăm sóc khách hàng tận tâm, sẵn sàng hỗ trợ bạn 24/7 qua
            nhiều kênh như hotline, email và chat trực tuyến.
          </p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  );
}

export default About;
