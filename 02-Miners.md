## Miners
* Mining là cách tạo ra những đồng Bitcoin mới, đây là phần thưởng cho sự đóng góp của các miners để giúp giao thức Bitcoin vận hành chính xác và an toàn.
* Theo báo cáo của Satoshi, một trong những vấn đề tồn tại trong các hệ thống tiền ảo (tiền điện tử) là sự đông thuận trong hệ thống phi tập trung. Trong hệ thống tập trung, vấn đề này hết sức đơn giản vì mọi giao dịch sẽ được kiểm soát bởi một cơ quan duy nhất (ví dụ như ngân hàng) và mọi người dùng sẽ đều tin tưởng và tuân thủ mọi phán quyết của cơ quan này. Trong hệ thống phi tập trung, liệu ai là người quyết định ? Và liệu mọi người có chấp nhận quyết định này hay không ? Satashi đã giải quyết hiệu quả bài toàn này bằng việc kết hợp sức mạnh phần cứng và thuật toán băm mã hóa để tạo ra khai niệm gọi là sự chứng minh nỗ lực - PoW
### Bitcoin được tạo ra như thế nào ?
* Trong hệ thống Bitcoin, các đồng tiền ảo được tao ra theo các thuật toán đã được xác định từ trước. Thuật toán này quy định cách tạo ra Bitcoin, tạo ra số lượng bao nhiêu, và như thế nào.
* Hiểu đơn giản, khi một block mới được tạo ra và thêm vào sổ cái blockchain, thì sẽ có một lượng Bitcoin mới được tạo ra như là phần thưởng cho nút đã tạo ra block đó. Những nút tham gia quá trình xác nhận giao dịch và tạo block mới được gọi là miner và quá trình tạo ra Bitcoin được gọi là Mining
### Cơ chế đồng thuận PoW
* Cơ chế đồng thuận trong hệ thống phi tập trung hiểu đơn giản là cách các nút trên toàn hệ thống vận hành để duy trì và thống nhất nội dung sổ cái Blockchain dựa trên một số luật đã định trước. Trong hệ thống Bitcoin, cơ chế đồng thuận được xây dựng dựa trên thuật toán chứng minh nỗ lực Proof-of-Work. Hiểu đơn giản là sự ghi nhận công sức bỏ ra để chứng minh công việc đã thực hiện được. Sổ cái Blockchian được duy trì dựa trên chuỗi khối có đóng góp PoW nhiều nhất (có thể hiểu là dài nhất)
* Điểm nổi bật trong cách Satashi giải quyết bài toán đông thuận đó là ông trao cơ hội bình đẳng cho tất cả các node trên hệ thống. Mỗi nút sẽ dự vào sức mạnh phần cứng để chạy thuật toán PoW và tìm ra đáp số. Đây là cuộc chạy đua công bằng, nút nào tìm ra đáp số trước sẽ là người thắng cuộc.
* Chi tiết của cơ chế đồng thuận
  + Một nút sẽ tập hợp các giao dịch chưa được xác nhận (Chưa được ghi nhận trên Blockchain) để đưa ra một khối ứng viên cho riêng mình
  + Tiến hành mining để tìm ra chuỗi nonce phù hợp và thông báo trên toàn hệ thống về việc đã tìm được khối mới
  + Các nút khác sẽ tiến hành xác nhận khối mới này. Việc xác nhận này rất quan trọng đảm bảo không có tổ chức cá nhân nào tạo ra các giao dịch giả mạo
  + Sau khi tìm được khối mới, bước cuối cùng là lặp khối mới vào sổ cái Blockchain. Tại cùng thời điểm có thể hơn một khối mới được tạo ra. Tuy nhiên, toàn mạng lưới chỉ công nhận chuỗi nào dài nhất
* Mining là công việc hết sức đơn giản chứ không phức tạp như các bạn nghĩ. Nó đơn giản là phép thử sai lặp lại nhiều lần, đến khi bạn tìm ra đáp số thỏa mãn yêu cầu. Cụ thể, các nút sẽ sử dụng hàm băm mật mã, thông tin header của block ứng viên hiện tại, và một số ngẫu nhiên nonce bất kỳ để thử sau theo công thức sau:
  sha256(blk_header + nonce) < target
  + Target ở đây chính là độ khó hiện tại của thuật toán. Giá trị nonce sẽ được thay đổi đến khi nào tim được giá trị phù hợp và thông báo trên mạng việc đã tìm ra khối mới.
  + Sau khi một nút thông báo đã tìm được khối mới, các nút còn lại sẽ tiến hành xác nhận tính chính xác của khối. Ví dụ xác nhận thông tin khối, giá trị nonce, kiểm tra các giao dịch trong khối để đảm bảo không bị vấn đề gửi nhiều lần,etc. Mọi thao tác này nhằm đảm bảo không có ai có thể tạo ra các giao dịch giả mạo và khối giả mạo.