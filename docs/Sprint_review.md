### Kịch bản Sprint Review với Hòa - PO, Huy - SM, và Tín - Dev - chỉ review trong 5 phút

---

#### **Bắt đầu buổi Sprint Review**

**Đặng Xuân Huy (Scrum Master)**:  
“Chào mọi người, hôm nay chúng ta có buổi Sprint Review. Trong sprint này, team đã cam kết hoàn thành hai user story. Hòa (PO), bạn có thể liệt kê những gì đã cam kết không?"

**Nguyễn Lê Xuân Hòa (Product Owner)**:  
“Dĩ nhiên rồi. Trong sprint này, chúng ta đã cam kết hoàn thành hai user story chính:

1. **Là khách, tôi xem danh sách tài liệu được đề xuất**
   - Xây dựng trang Home.
   - Xây dựng API để lấy danh sách thể loại (genre).
   - Xây dựng API để lấy danh sách bài đăng, sách (book), và copy.

2. **Là khách, tôi có thể đăng ký tài khoản**
   - Xây dựng trang đăng ký tài khoản.
   - Xây dựng entity cho user.
   - Xây dựng API đăng ký.

**Đặng Xuân Huy (Scrum Master)**:  
“Cảm ơn Hòa. Bây giờ Tín sẽ đại diện dev team để demo các chức năng đã hoàn thành. Tín, mời bạn.”

---

#### **Demo của dev team**

**Tôn Trọng Tín (Dev Team - Tech Lead)**:  
“Cảm ơn Huy. Mình sẽ bắt đầu demo với user story đầu tiên: **'Là khách, tôi xem danh sách tài liệu được đề xuất'**.

---

1. **Demo chức năng 'Xem danh sách tài liệu được đề xuất'**

(Tín chia sẻ màn hình với trang chủ được hiển thị)

- Đây là **Trang chủ** của hệ thống. Như các bạn thấy, có **banner chính** với hình ảnh minh họa cùng tiêu đề nổi bật. Sách nổi bật được hiển thị với giá thuê và nút 'Thuê ngay'.
- Tiếp theo là các **lợi ích của dịch vụ** với các biểu tượng như giao hàng nhanh, bảo mật thanh toán, v.v.
- Danh sách sách được hiển thị ở phía dưới, mỗi sách đều có giá thuê và nút 'Thêm vào giỏ hàng'. Tất cả dữ liệu này được lấy từ API chúng tôi đã xây dựng.
- **Danh mục sản phẩm** cũng được hiển thị đầy đủ ở cuối trang, bao gồm nhiều thể loại như kịch, kinh tế học, giáo dục.

(Tín tiếp tục phần demo API, mở cái tab Network lên là oki)

- Dữ liệu cho **danh mục sản phẩm** và **danh sách sách mới** được lấy từ các API như sau:
  - **GET /api/genre**: Để lấy danh sách các thể loại.
  - **GET /api/listing/search**: Để lấy danh sách sách mới ra mắt.

---

**Nguyễn Lê Xuân Hòa (Product Owner)**:  
"Rất tuyệt, Tín. Mình rất hài lòng với trang chủ, đặc biệt là các phần danh sách và banner được trình bày rõ ràng và dễ sử dụng."

---

2. **Demo chức năng 'Đăng ký tài khoản'**

**Tôn Trọng Tín (Dev Team - Tech Lead)**:  
“Tiếp theo là user story **'Là khách, tôi có thể đăng ký tài khoản'**.

(Tín chia sẻ màn hình với trang đăng ký)

- Đây là **Trang đăng ký**. Người dùng có thể nhập thông tin như tên tài khoản, mật khẩu và xác nhận mật khẩu.
- Có thể click vào con mắt để xem mật khẩu là gì
- Nếu không điền đầy đủ thì khi bấm nút sẽ bắt điền, yêu cầu điền required field (chỉ mỗi cái Nhập lại mới có required thui nha ông)
- Có checkbox để người dùng đồng ý với điều khoản bảo mật trước khi đăng ký.
- Dưới cùng là nút **'Đăng ký'** để hoàn tất quá trình. API chúng tôi sử dụng cho việc đăng ký là **POST /api/user/register**.

---

**Nguyễn Lê Xuân Hòa (Product Owner)**:  
“Trang đăng ký trông rất gọn gàng và dễ sử dụng. Mình đặc biệt thích phần giao diện với hình ảnh minh họa bên cạnh, tạo cảm giác thân thiện. Cả API đăng ký hoạt động ổn định, giúp quá trình đăng ký tài khoản diễn ra mượt mà."

---

3. **Demo File test**

**Tôn Trọng Tín (Dev Team - Tech Lead)**:  
Sau đây là danh sách testcase đã pass hết toàn bộ do QC biên soạn, và các bạn dev team mình đã kịp thời fix hết trước khi demo
(show file test case hết sprint 1 luôn)

---



#### **Kết thúc buổi review**

**Đặng Xuân Huy (Scrum Master)**:  
“Cảm ơn Tín vì phần demo rất rõ ràng. Hòa, bạn có phản hồi gì cho team không?”

**Nguyễn Lê Xuân Hòa (Product Owner)**:  
“Phần demo rất ấn tượng. Mình duyệt cả hai user story này vì chúng đã hoàn thành đúng yêu cầu và mang lại trải nghiệm người dùng tốt. QC cũng đã làm việc rất chăm chỉ và dù thời gian rất gấp rút nhưng các bạn vẫn kịp fix bug cho QC khiến cho hệ thống đáng tin cậy hơn. Cảm ơn cả team vì đã làm rất tốt việc của mình.”

**Đặng Xuân Huy (Scrum Master)**:  
“Cảm ơn Hòa. Vậy chúng ta chính thức kết thúc sprint review. Hẹn gặp mọi người trong sprint tiếp theo!”

--- 

**Kết thúc Sprint Review**.