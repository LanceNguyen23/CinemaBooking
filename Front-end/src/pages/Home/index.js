import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

const Home = () => {
  const navigate = useNavigate();
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get('http://localhost:8080/api/v1/films').then((response) => {
          return setFilms(response.data.data);
        });
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className={cx('wrapper')}>
        <div>
          <img src="https://cdn.galaxycine.vn/media/2022/11/21/2048wx682h_1668999612942.jpg" className={cx('first-img')} />
          <div className={cx('quick-buy-ticket')}>
            <div className={cx('text-buy-ticket')}>MUA VÉ NHANH</div>
            <div className={cx('select-ticket')}>
              <select>
                <option>Chọn phim</option>
                <option>One Piece Film Red</option>
                <option>Black Panther: Wakanda Forever</option>
                <option>Hạnh phúc máu</option>
                <option>Hunt</option>
                <option>Tro tàn rực rỡ</option>
                <option>The Menu</option>
                <option>Fearless Love</option>
              </select>
              <select>
                <option>Chọn rạp</option>
              </select>
              <select>
                <option>Chọn ngày</option>
              </select>
              <select>
                <option>Chọn suất</option>
              </select>
              <a className={cx('btn-buy-ticket')}>Mua vé</a>
            </div>
          </div>
        </div>

        <div>
          <h3 className={cx('content-text')}>Phim đang chiếu</h3>
          <div className={cx('on-films')}>
            <div className={cx('film-item')}>
              <div
                className={cx('film-articles')}
                onClick={() => {
                  navigate('/detailfilmpage');
                }}
              >
                <img className={cx('film-img')} src={'https://cdn.galaxycine.vn/media/2022/11/21/450x300_1668999445553.jpg'}></img>
                <div className={cx('overlay-buy-ticket')}>
                  <div className={cx('film-content')}>
                    <h4>C13</h4>
                    <a className={cx('btn-overlay-buy-ticket')}>Mua vé</a>
                  </div>
                </div>
              </div>
              <div className={cx('film-name')}>
                <h4 className={cx('en-film-name')}>One Piece Film Red</h4>
                <h4 className={cx('vn-film-name')}></h4>
              </div>
            </div>

            <div className={cx('film-item')}>
              <div
                className={cx('film-articles')}
                onClick={() => {
                  navigate('/detailfilmpage');
                }}
              >
                <img className={cx('film-img')} src={'https://cdn.galaxycine.vn/media/2022/11/10/1350x900_1668066505776.jpg'}></img>
                <div className={cx('overlay-buy-ticket')}>
                  <div className={cx('film-content')}>
                    <h4>C13</h4>
                    <a className={cx('btn-overlay-buy-ticket')}>Mua vé</a>
                  </div>
                </div>
              </div>
              <div className={cx('film-name')}>
                <h4 className={cx('en-film-name')}>BLACK PANTHER: WAKANDA FOREVER</h4>
                <h4 className={cx('vn-film-name')}>(CHIẾN BINH BÁO ĐEN: WAKANDA BẤT DIỆT)</h4>
                <h4 className={cx('vn-film-name')}></h4>
              </div>
            </div>

            <div className={cx('film-item')}>
              <div
                className={cx('film-articles')}
                onClick={() => {
                  navigate('/detailfilmpage');
                }}
              >
                <img className={cx('film-img')} src={'https://cdn.galaxycine.vn/media/2022/10/12/hpm_1665546195092.jpg'}></img>
                <div className={cx('overlay-buy-ticket')}>
                  <div className={cx('film-content')}>
                    <h4>C13</h4>
                    <a className={cx('btn-overlay-buy-ticket')}>Mua vé</a>
                  </div>
                </div>
              </div>
              <div className={cx('film-name')}>
                <h4 className={cx('en-film-name')}>HẠNH PHÚC MÁU</h4>
                <h4 className={cx('vn-film-name')}></h4>
              </div>
            </div>

            <div className={cx('film-item')}>
              <div
                className={cx('film-articles')}
                onClick={() => {
                  navigate('/detailfilmpage');
                }}
              >
                <img className={cx('film-img')} src={'https://cdn.galaxycine.vn/media/2022/11/15/1350x900_1668505790856.jpg'}></img>
                <div className={cx('overlay-buy-ticket')}>
                  <div className={cx('film-content')}>
                    <h4>C13</h4>
                    <a className={cx('btn-overlay-buy-ticket')}>Mua vé</a>
                  </div>
                </div>
              </div>
              <div className={cx('film-name')}>
                <h4 className={cx('en-film-name')}>HUNT</h4>
                <h4 className={cx('vn-film-name')}>(SĂN LÙNG)</h4>
              </div>
            </div>

            <div className={cx('film-item')}>
              <div
                className={cx('film-articles')}
                onClick={() => {
                  navigate('/detailfilmpage');
                }}
              >
                <img className={cx('film-img')} src={'https://cdn.galaxycine.vn/media/2022/11/16/anne-co-gai-muon-mat-3_1668590415821.jpg'}></img>
                <div className={cx('overlay-buy-ticket')}>
                  <div className={cx('film-content')}>
                    <h4>C13</h4>
                    <a className={cx('btn-overlay-buy-ticket')}>Mua vé</a>
                  </div>
                </div>
              </div>
              <div className={cx('film-name')}>
                <h4 className={cx('en-film-name')}>FACES OF ANNE</h4>
                <h4 className={cx('vn-film-name')}>ANNE - CÔ GÁI MUÔN MẶT</h4>
              </div>
            </div>

            <div className={cx('film-item')}>
              <div
                className={cx('film-articles')}
                onClick={() => {
                  navigate('/detailfilmpage');
                }}
              >
                <img className={cx('film-img')} src={'https://cdn.galaxycine.vn/media/2022/11/14/450x300-the-menu_1668399453039.jpg'}></img>
                <div className={cx('overlay-buy-ticket')}>
                  <div className={cx('film-content')}>
                    <h4>C13</h4>
                    <a className={cx('btn-overlay-buy-ticket')}>Mua vé</a>
                  </div>
                </div>
              </div>
              <div className={cx('film-name')}>
                <h4 className={cx('en-film-name')}>THE MENU</h4>
                <h4 className={cx('vn-film-name')}>THỰC ĐƠN BÍ ẨN</h4>
              </div>
            </div>
          </div>
        </div>

        <div className={cx('row')}>
          <div className={cx('col-1')}>
            <div className={cx('review-films')}>
              <h3 className={cx('content-text')}>Bình luận phim</h3>
            </div>

            <div className={cx('list-review')}>
              <div className={cx('review-item')}>
                <a className={cx('review-img-link')} href="#">
                  <img
                    className={cx('review-img')}
                    src="https://cdn.galaxycine.vn/media/2022/11/11/black-panther-wakanda-forever-bao-den-tim-duoc-nguoi-ke-vi-xung-dang-2_1668181423298.jpg"
                  ></img>
                  <div className={cx('has-overlay')}></div>
                </a>
                <div className={cx('review-info')}>
                  <a className={cx('review-name')} href="javascript:;">
                    <h3>[Review] Black Panther Wakanda Forever: Báo Đen Tìm Được Người Kế Vị Xứng Đáng?</h3>
                  </a>
                  <div className={cx('review-rate')}>
                    <div className={cx('review-like')}>
                      <i class="fa-solid fa-thumbs-up"></i>
                      <span>Thích 16K</span>
                    </div>
                    <div className={cx('review-view')}>
                      <i class="fa-solid fa-eye"></i>
                      <span>142188</span>
                    </div>
                  </div>
                  <div className={cx('review-description')}>
                    Mất đi ngôi sao quan trọng nhất, Marvel gặp rất nhiều khó khăn khi thực hiện Black Panther: Wakanda Forever!
                  </div>
                </div>
              </div>

              <div className={cx('review-item')}>
                <a className={cx('review-img-link')} href="#">
                  <img
                    className={cx('review-img')}
                    src="https://cdn.galaxycine.vn/media/2022/10/27/black-adam-cuu-tinh-cho-vu-tru-dc-mo-rong--5_1666852856433.jpg"
                  ></img>
                  <div className={cx('has-overlay')}></div>
                </a>
                <div className={cx('review-info')}>
                  <a className={cx('review-name')} href="javascript:;">
                    <h3>[Review] Black Adam: Cứu Tinh Cho Vũ Trụ DC Mở Rộng?</h3>
                  </a>
                  <div className={cx('review-rate')}>
                    <div className={cx('review-like')}>
                      <i class="fa-solid fa-thumbs-up"></i>
                      <span>Thích 4,3K</span>
                    </div>
                    <div className={cx('review-view')}>
                      <i class="fa-solid fa-eye"></i>
                      <span>87768</span>
                    </div>
                  </div>
                  <div className={cx('review-description')}>
                    15 năm kể từ ngày được chọn diễn Black Adam, Dwayne Johnson và các nhà làm phim WB rốt cuộc đã thành công đưa gã mặc đồ đen lên
                    màn ảnh rộng.
                  </div>
                </div>
              </div>

              <div className={cx('review-item')}>
                <a className={cx('review-img-link')} href="#">
                  <img
                    className={cx('review-img')}
                    src="https://cdn.galaxycine.vn/media/2022/10/17/co-gai-tu-qua-khu-dap-do-hoan-toan-gai-gia-lam-chieu--1_1665989638939.jpeg"
                  ></img>
                  <div className={cx('has-overlay')}></div>
                </a>
                <div className={cx('review-info')}>
                  <a className={cx('review-name')} href="javascript:;">
                    <h3>[Review] Cô Gái Từ Quá Khứ: Đạp Đổ Hoàn Toàn Gái Già Lắm Chiêu?</h3>
                  </a>
                  <div className={cx('review-rate')}>
                    <div className={cx('review-like')}>
                      <i class="fa-solid fa-thumbs-up"></i>
                      <span>Thích 13K</span>
                    </div>
                    <div className={cx('review-view')}>
                      <i class="fa-solid fa-eye"></i>
                      <span>85505</span>
                    </div>
                  </div>
                  <div className={cx('review-description')}>
                    Cô Gái Từ Quá Khứ giúp bộ đôi Bảo Nhân – Nam Cito mở màn Vũ trụ Mỹ Nhân thành công nhưng lại "vắt chanh bỏ vỏ” Vũ trụ Gái Già?
                  </div>
                </div>
              </div>

              <div className={cx('review-item')}>
                <a className={cx('review-img-link')} href="#">
                  <img className={cx('review-img')} src="https://cdn.galaxycine.vn/media/2022/10/10/450_1665404205929.jpg"></img>
                  <div className={cx('has-overlay')}></div>
                </a>
                <div className={cx('review-info')}>
                  <a className={cx('review-name')} href="javascript:;">
                    <h3>[Review] Cười: Lời Nguyền Sẽ Không Dừng Lại!</h3>
                  </a>
                  <div className={cx('review-rate')}>
                    <div className={cx('review-like')}>
                      <i class="fa-solid fa-thumbs-up"></i>
                      <span>Thích 14K</span>
                    </div>
                    <div className={cx('review-view')}>
                      <i class="fa-solid fa-eye"></i>
                      <span>80998</span>
                    </div>
                  </div>
                  <div className={cx('review-description')}>
                    Nếu chẳng may bị ám bởi một lời nguyền ma quái, không thể sống sót quá một tuần thì phải làm thế nào đây?
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cx('col-2')}>
            <div className={cx('review-films')}>
              <h3 className={cx('content-text')}>Blog điện ảnh</h3>
            </div>

            <div className={cx('list-review')}>
              <div className={cx('review-item')}>
                <a className={cx('review-img-link')} href="#">
                  <img
                    className={cx('review-img')}
                    src="https://cdn.galaxycine.vn/media/2022/11/28/c68689cbe6e14fbf3dc6a69214dbd82a-706x397_1669620867264.jpg"
                  ></img>
                  <div className={cx('has-overlay')}></div>
                </a>
                <div className={cx('review-info')}>
                  <a className={cx('review-name')} href="javascript:;">
                    <h3>The Dark Knight - Tượng Đài Của Thể Loại Siêu Anh Hùng</h3>
                  </a>
                  <div className={cx('review-rate')}>
                    <div className={cx('review-like')}>
                      <i class="fa-solid fa-thumbs-up"></i>
                      <span>Thích 16K</span>
                    </div>
                    <div className={cx('review-view')}>
                      <i class="fa-solid fa-eye"></i>
                      <span>142188</span>
                    </div>
                  </div>
                  <div className={cx('review-description')}>
                    Kể từ khi ra mắt của The Dark Knight, vẫn chưa có một tác phẩm nào về đề tài siêu anh hùng có thể vượt qua. Bộ phim hoàn hảo về
                    mọi mặt từ cố...
                  </div>
                </div>
              </div>

              <div className={cx('review-item')}>
                <a className={cx('review-img-link')} href="#">
                  <img
                    className={cx('review-img')}
                    src="https://cdn.galaxycine.vn/media/2022/11/17/boc-trung-phuc-sinh-black-panther-wakanda-forever-9_1668663696350.jpg"
                  ></img>
                  <div className={cx('has-overlay')}></div>
                </a>
                <div className={cx('review-info')}>
                  <a className={cx('review-name')} href="javascript:;">
                    <h3>Bóc Trứng Phục Sinh Black Panther: Wakanda Forever</h3>
                  </a>
                  <div className={cx('review-rate')}>
                    <div className={cx('review-like')}>
                      <i class="fa-solid fa-thumbs-up"></i>
                      <span>Thích 4,3K</span>
                    </div>
                    <div className={cx('review-view')}>
                      <i class="fa-solid fa-eye"></i>
                      <span>87768</span>
                    </div>
                  </div>
                  <div className={cx('review-description')}>Cùng tìm hiểu những chi tiết ẩn thú vị của Black Panther: Wakanda Forever!</div>
                </div>
              </div>

              <div className={cx('review-item')}>
                <a className={cx('review-img-link')} href="#">
                  <img className={cx('review-img')} src="https://cdn.galaxycine.vn/media/2022/11/6/450_1667726503015.jpg"></img>
                  <div className={cx('has-overlay')}></div>
                </a>
                <div className={cx('review-info')}>
                  <a className={cx('review-name')} href="javascript:;">
                    <h3>Avatar Và Hậu Trường Chưa Kể (P1)</h3>
                  </a>
                  <div className={cx('review-rate')}>
                    <div className={cx('review-like')}>
                      <i class="fa-solid fa-thumbs-up"></i>
                      <span>Thích 13K</span>
                    </div>
                    <div className={cx('review-view')}>
                      <i class="fa-solid fa-eye"></i>
                      <span>85505</span>
                    </div>
                  </div>
                  <div className={cx('review-description')}>
                    Avatar: The Way Of Water dự kiến ra mắt vào tháng 12.2022. Trước khi có cơ hội chiêm ngưỡng hành tinh Pandora tuyệt đẹp, hãy cùng
                    khám phá một số thông tin hậu trường thú vị về Avatar...
                  </div>
                </div>
              </div>

              <div className={cx('review-item')}>
                <a className={cx('review-img-link')} href="#">
                  <img
                    className={cx('review-img')}
                    src="https://cdn.galaxycine.vn/media/2022/10/5/black-panther-wakanda-forever-boc-tach-trailer-moi-nhat-14_1664954208526.jpg"
                  ></img>
                  <div className={cx('has-overlay')}></div>
                </a>
                <div className={cx('review-info')}>
                  <a className={cx('review-name')} href="javascript:;">
                    <h3>Black Panther Wakanda Forever: Bóc Tách Trailer Mới Nhất!</h3>
                  </a>
                  <div className={cx('review-rate')}>
                    <div className={cx('review-like')}>
                      <i class="fa-solid fa-thumbs-up"></i>
                      <span>Thích 14K</span>
                    </div>
                    <div className={cx('review-view')}>
                      <i class="fa-solid fa-eye"></i>
                      <span>80998</span>
                    </div>
                  </div>
                  <div className={cx('review-description')}>
                    Hãy cùng phân tích thước phim mới hé lộ điều gì. Tuy nhiên, xin cảnh báo rằng, đừng tin những gì trailer Marvel nói!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cx('about-galaxy-cinema')}>
          <h3 className={cx('content-text')}>Galaxy Cinema</h3>
          <div className={cx('about-cinema-text')}>
            <p>
              Galaxy Cinema là một trong những công ty tư nhân đầu tiên về điện ảnh được thành lập từ năm 2003, đã khẳng định thương hiệu là 1 trong
              10 địa điểm vui chơi giải trí được yêu thích nhất. Ngoài hệ thống rạp chiếu phim hiện đại, thu hút hàng triệu lượt người đến xem, Galaxy
              Cinema còn hấp dẫn khán giả bởi không khí thân thiện cũng như chất lượng dịch vụ hàng đầu.
            </p>
            <p>
              Đến website galaxycine.vn, khách hàng sẽ dễ dàng tham khảo các phim hay nhất, phim mới nhất đang chiếu hoặc sắp chiếu luôn được cập nhật
              thường xuyên. Lịch chiếu tại tất cả hệ thống rạp chiếu phim của Galaxy Cinema cũng được cập nhật đầy đủ hàng ngày hàng giờ trên trang
              chủ.
            </p>
            <p>
              Từ vũ trụ điện ảnh Marvel, người hâm mộ sẽ có cuộc tái ngộ với Người Nhện qua Spider-Man: No Way Home hoặc Doctor Strange 2. Ngoài ra
              007: No Time To Die, Turning Red, Minions: The Rise Of Gru..., là những tác phẩm hứa hẹn sẽ gây bùng nổ phòng vé trong thời gian tới.
            </p>
            <p>
              Giờ đây đặt vé tại Galaxy Cinema càng thêm dễ dàng chỉ với vài thao tác vô cùng đơn giản. Để mua vé, hãy vào tab Mua vé. Quý khách có
              thể chọn Mua vé theo phim, theo rạp, hoặc theo ngày. Sau đó, tiến hành mua vé theo các bước hướng dẫn. Chỉ trong vài phút, quý khách sẽ
              nhận được tin nhắn và email phản hồi Đặt vé thành công của Galaxy Cinema. Quý khách có thể dùng tin nhắn lấy vé tại quầy vé của Galaxy
              Cinema hoặc quét mã QR để một bước vào rạp mà không cần tốn thêm bất kỳ công đoạn nào nữa.
            </p>
            <p>
              Nếu bạn đã chọn được phim hay để xem, hãy đặt vé cực nhanh bằng box Mua Vé Nhanh ngay từ Trang Chủ. Chỉ cần một phút, tin nhắn và email
              phản hồi của Galaxy Cinema sẽ gửi ngay vào điện thoại và hộp mail của bạn.
            </p>
            <p>
              Nếu chưa quyết định sẽ xem phim mới nào, hãy tham khảo các bộ phim hay trong mục Phim Đang Chiếu cũng như Phim Sắp Chiếu tại rạp chiếu
              phim bằng cách vào mục Bình Luận Phim ở Góc Điện Ảnh để đọc những bài bình luận chân thật nhất, tham khảo và cân nhắc. Sau đó, chỉ việc
              đặt vé bằng box Mua Vé Nhanh ngay ở đầu trang để chọn được suất chiếu và chỗ ngồi vừa ý nhất.
            </p>
            <p>
              Galaxy Cinema luôn có những chương trình khuyến mãi, ưu đãi, quà tặng vô cùng hấp dẫn như giảm giá vé, tặng vé xem phim miễn phí, tặng
              Combo, tặng quà phim… dành cho các khách hàng.
            </p>
            <p>
              Trang web galaxycine.vn còn có mục Góc Điện Ảnh - nơi lưu trữ dữ liệu về phim, diễn viên và đạo diễn, những bài viết chuyên sâu về điện
              ảnh, hỗ trợ người yêu phim dễ dàng hơn trong việc lựa chọn phim và bổ sung thêm kiến thức về điện ảnh cho bản thân. Ngoài ra, vào mỗi
              tháng, Galaxy Cinema cũng giới thiệu các phim sắp chiếu hot nhất trong mục Phim Hay Tháng.
            </p>
            <p>
              Hiện nay, Galaxy Cinema đang ngày càng phát triển hơn nữa với các chương trình đặc sắc, các khuyến mãi hấp dẫn, đem đến cho khán giả
              những bộ phim bom tấn của thế giới và Việt Nam nhanh chóng và sớm nhất.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
