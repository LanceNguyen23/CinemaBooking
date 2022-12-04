import styles from "./Cast.module.scss";
import classNames from "classnames/bind";
import MovieSidebar from "../MovieSidebar";

const cx = classNames.bind(styles);

const Cast = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("row")}>
        <div className={cx("col-8")}>
          <div className={cx("filter")}>
            <div className={cx("filter-item")}>
              <select className={cx("filter-select")}>
                <option>Quốc gia</option>
                <option>Anh</option>
                <option>Mỹ</option>
                <option>Hàn Quốc</option>
                <option>Việt Nam</option>
                <option>Nhật Bản</option>
              </select>
            </div>

            <div className={cx("filter-item")}>
              <select className={cx("filter-select")}>
                <option>Xem nhiều nhất</option>
                <option>Mới nhất</option>
                <option>Đánh giá tốt nhất</option>
              </select>
            </div>
          </div>

          <div className={cx("content-text")}>
            <h3>Diễn viên</h3>
          </div>

          <div className={cx("list-cast")}>
            <div className={cx("cast-item")}>
              <a className={cx("cast-img-link")} href="#">
                <img
                  className={cx("cast-img")}
                  src="https://cdn.galaxycine.vn/media/c/h/chris-ngang_1.jpg"
                ></img>
                <div className={cx("has-overlay")}></div>
              </a>
              <div className={cx("cast-info")}>
                <a className={cx("cast-name")} href="javascript:;">
                  <h3>Chris Evans</h3>
                </a>
                <div className={cx("cast-rate")}>
                  <div className={cx("cast-like")}>
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Thích 16K</span>
                  </div>
                  <div className={cx("cast-view")}>
                    <i class="fa-solid fa-eye"></i>
                    <span>142188</span>
                  </div>
                </div>
                <div className={cx("cast-description")}>
                  Khác với Chris Hemsworth vẫn đang loay hoay trong hình tượng
                  vị thần sấm sét, đa số người hâm mộ vẫn nhìn nhận rõ ràng,
                  Chris Evans và Captain America là hai con người hoàn toàn khác
                  nhau.
                </div>
              </div>
            </div>
            <div className={cx("cast-item")}>
              <a className={cx("cast-img-link")} href="#">
                <img
                  className={cx("cast-img")}
                  src="https://cdn.galaxycine.vn/media/g/a/gallery-1436740108-elle-aug-15-margot-robbie-02.jpg"
                ></img>
                <div className={cx("has-overlay")}></div>
              </a>
              <div className={cx("cast-info")}>
                <a className={cx("cast-name")} href="javascript:;">
                  <h3>Margot Robie</h3>
                </a>
                <div className={cx("cast-rate")}>
                  <div className={cx("cast-like")}>
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Thích 19K</span>
                  </div>
                  <div className={cx("cast-view")}>
                    <i class="fa-solid fa-eye"></i>
                    <span>124871</span>
                  </div>
                </div>
                <div className={cx("cast-description")}>
                  Dĩ nhiên, có nhan sắc chẳng bao giờ là đủ để đảm bảo cho chiếc
                  vé thành công tại Hollywood, Margot còn phải cố gắng nhiều.
                  Nhưng ta biết, hiện nay nàng xứng đáng được coi là minh tinh
                  hạng A!
                </div>
              </div>
            </div>
            <div className={cx("cast-item")}>
              <a className={cx("cast-img-link")} href="#">
                <img
                  className={cx("cast-img")}
                  src="https://cdn.galaxycine.vn/media/t/h/theron-charlize-bannner.jpg"
                ></img>
                <div className={cx("has-overlay")}></div>
              </a>
              <div className={cx("cast-info")}>
                <a className={cx("cast-name")} href="javascript:;">
                  <h3>Charlie Theron</h3>
                </a>
                <div className={cx("cast-rate")}>
                  <div className={cx("cast-like")}>
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Thích 9,8K</span>
                  </div>
                  <div className={cx("cast-view")}>
                    <i class="fa-solid fa-eye"></i>
                    <span>101843</span>
                  </div>
                </div>
                <div className={cx("cast-description")}>
                  Bắt đầu từ vai diễn không có lời thoại, chỉ xuất hiện 3 giây
                  trong một bộ phim hạng B, Charlize Theron nay đã trở thành nữ
                  thần của Hollywood.
                </div>
              </div>
            </div>
            <div className={cx("cast-item")}>
              <a className={cx("cast-img-link")} href="#">
                <img
                  className={cx("cast-img")}
                  src="https://cdn.galaxycine.vn/media/h/u/hu-ngang.jpg"
                ></img>
                <div className={cx("has-overlay")}></div>
              </a>
              <div className={cx("cast-info")}>
                <a className={cx("cast-name")} href="javascript:;">
                  <h3>Hugh Jackman</h3>
                </a>
                <div className={cx("cast-rate")}>
                  <div className={cx("cast-like")}>
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Thích 12K</span>
                  </div>
                  <div className={cx("cast-view")}>
                    <i class="fa-solid fa-eye"></i>
                    <span>95970</span>
                  </div>
                </div>
                <div className={cx("cast-description")}>
                  Ngoài gương mặt đẹp trai, thân hình rắn chắc và số tài lẻ
                  không đếm nổi, Hugh Jackman còn có một niềm tự hào mà khó minh
                  tinh Hollywood nào không ganh tị.
                </div>
              </div>
            </div>
            <div className={cx("cast-item")}>
              <a className={cx("cast-img-link")} href="#">
                <img
                  className={cx("cast-img")}
                  src="https://cdn.galaxycine.vn/media/r/o/robert-ngang.jpg"
                ></img>
                <div className={cx("has-overlay")}></div>
              </a>
              <div className={cx("cast-info")}>
                <a className={cx("cast-name")} href="javascript:;">
                  <h3>Robert Downey JR.</h3>
                </a>
                <div className={cx("cast-rate")}>
                  <div className={cx("cast-like")}>
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Thích 21K</span>
                  </div>
                  <div className={cx("cast-view")}>
                    <i class="fa-solid fa-eye"></i>
                    <span>89121</span>
                  </div>
                </div>
                <div className={cx("cast-description")}>
                  Thành công lớn ở giai đoạn đầu sự nghiệp nhưng nghiện ngập từ
                  bé, có phim kiếm cả tỉ đôla lại từng lang thang không xu dính
                  túi, 2 lần đề cử Oscar đi kèm với những lần vào tù ra khám…
                  Nếu phải chọn cuộc đời một ngôi sao để viết kịch bản phim,...
                </div>
              </div>
            </div>
            <div className={cx("cast-item")}>
              <a className={cx("cast-img-link")} href="#">
                <img
                  className={cx("cast-img")}
                  src="https://cdn.galaxycine.vn/media/5/5_18.jpg"
                ></img>
                <div className={cx("has-overlay")}></div>
              </a>
              <div className={cx("cast-info")}>
                <a className={cx("cast-name")} href="javascript:;">
                  <h3>Johnny Depp</h3>
                </a>
                <div className={cx("cast-rate")}>
                  <div className={cx("cast-like")}>
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Thích 4,3K</span>
                  </div>
                  <div className={cx("cast-view")}>
                    <i class="fa-solid fa-eye"></i>
                    <span>87768</span>
                  </div>
                </div>
                <div className={cx("cast-description")}>
                  Từng là một trong những nam diễn viên được trả thù lao nhiều
                  nhất Hollywood, từng là cần câu lợi nhuận khổng lồ với hàng tỷ
                  $ kiếm được, Johnny Depp nay chỉ còn là cái bóng trong hào
                  quang quá khứ.
                </div>
              </div>
            </div>
            <div className={cx("cast-item")}>
              <a className={cx("cast-img-link")} href="#">
                <img
                  className={cx("cast-img")}
                  src="https://cdn.galaxycine.vn/media/l/a/la-ngang_1.jpg"
                ></img>
                <div className={cx("has-overlay")}></div>
              </a>
              <div className={cx("cast-info")}>
                <a className={cx("cast-name")} href="javascript:;">
                  <h3>Jennifer Lawrence</h3>
                </a>
                <div className={cx("cast-rate")}>
                  <div className={cx("cast-like")}>
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Thích 13K</span>
                  </div>
                  <div className={cx("cast-view")}>
                    <i class="fa-solid fa-eye"></i>
                    <span>85505</span>
                  </div>
                </div>
                <div className={cx("cast-description")}>
                  Sẽ rất lâu rất lâu nữa, nước Mỹ mới sinh ra một cô gái hội đủ
                  cả nhan sắc, tài năng, cá tính và được thần may mắn chiếu cố
                  như Jennifer Lawrence.
                </div>
              </div>
            </div>
            <div className={cx("cast-item")}>
              <a className={cx("cast-img-link")} href="#">
                <img
                  className={cx("cast-img")}
                  src="https://cdn.galaxycine.vn/media/3/3_204.jpg"
                ></img>
                <div className={cx("has-overlay")}></div>
              </a>
              <div className={cx("cast-info")}>
                <a className={cx("cast-name")} href="javascript:;">
                  <h3>Dwayne Johnson</h3>
                </a>
                <div className={cx("cast-rate")}>
                  <div className={cx("cast-like")}>
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Thích 14K</span>
                  </div>
                  <div className={cx("cast-view")}>
                    <i class="fa-solid fa-eye"></i>
                    <span>80998</span>
                  </div>
                </div>
                <div className={cx("cast-description")}>
                  Có nhiều biệt danh như The People's Champion, The Brahma Bull,
                  The Great One… nhưng người ta thường nhớ đến Dwayne Johnson
                  với cái tên The Rock.
                </div>
              </div>
            </div>
          </div>

          <div className={cx("row")}>
            <div className={cx("col-12")}>
              <ul className={cx("pagination", "pull-right")}>
                <li className={cx("pagination-item")}>
                  <a className={cx("pagination-item__link")}>«</a>
                </li>
                <li className={cx("pagination-item")}>
                  <a className={cx("pagination-item__link")}>‹</a>
                </li>
                <li className={cx("pagination-item", "active")}>
                  <a className={cx("pagination-item__link")}>1</a>
                </li>
                <li className={cx("pagination-item")}>
                  <a className={cx("pagination-item__link")}>2</a>
                </li>
                <li className={cx("pagination-item")}>
                  <a className={cx("pagination-item__link")}>3</a>
                </li>
                <li className={cx("pagination-item")}>
                  <a className={cx("pagination-item__link")}>4</a>
                </li>
                <li className={cx("pagination-item")}>
                  <a className={cx("pagination-item__link")}>5</a>
                </li>
                <li className={cx("pagination-item")}>
                  <a className={cx("pagination-item__link")}>›</a>
                </li>
                <li className={cx("pagination-item")}>
                  <a className={cx("pagination-item__link")}>»</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={cx("col-4")}>{<MovieSidebar></MovieSidebar>}</div>
      </div>
      <div className={cx("row")}>
        <div className={cx("col-12")}>
          <h3 className={cx("cinema-name")}>Galaxy Cinema</h3>
          <div className={cx("cast-introduce")}>
            <p>
              Tom Holland đang yêu nhau với Zendaya, Robert Pattinson liệu có
              thể tạo nên một vai Batman đáng nhớ, vì sao Emily Blunt từ chối
              vai diễn Black Widow…? Method Acting là gì? Vì sao các diễn viên
              luôn tôn sùng kỹ thuật diễn xuất theo hướng Method Acting? Đôi mắt
              của Lương Triều Vỹ ẩn chứa điều gì mà khiến cho tất cả phải đắm
              say? Có bao nhiêu người từng có thời tuổi thơ gắn liền với Tinh
              Gia, ai là người dám tự nhận mình là đệ tử của Thần Bài Cao Tiến?
            </p>
            <p>
              Có những cái tên mà khi nhắc đến luôn được xem là sự bảo chứng cho
              doanh thu phòng vé. Ngược lại, có nhiều cá nhân mà chỉ cần nghe
              đến cũng phải thốt lên “ôi đúng là thuốc độc phòng vé”. Bên cạnh
              đó, lại có những nhân vật từng nổi đình đám, nhưng rồi suốt bao
              lâu chẳng còn thấy ai nhắc đến.
            </p>
            <p>
              Các diễn viên điện ảnh thường được mệnh danh là “tắc kè hoa”. Lý
              do là bởi sự hóa thân đa dạng của họ trong từng loại vai khác
              nhau. Cũng là con người ấy, có thể ở phút trước còn khiến biết bao
              người căm phẫn, nhưng chỉ sau vài khoảnh khắc lại mang đến sự
              thương xót và đồng cảm ở người xem. Khán giả đôi khi cũng bàng
              hoàng nhận ra “bản chất thật” của người hùng trên phim chỉ bằng
              biểu cảm xuất sắc của người nghệ sĩ. Tất cả đem lại nhiều trạng
              thái cảm xúc lẫn lộn tới mức choáng ngợp. Làm thế nào lại có thể
              diễn một cách tài tình như vậy!
            </p>
            <p>
              Yêu thích một diễn viên nào đó, mê mệt bởi vai diễn nào đấy bấy
              lâu. Thế nhưng quá nhiều nguồn thông tin khiến bạn bị rối. Không
              sao cả, Galaxy Cinema sẽ đem đến những thông tin khái quát chuẩn
              xác nhất về các diễn viên nổi tiếng xuất hiện trong những thước
              phim hay đang công phá rạp chiếu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cast;
