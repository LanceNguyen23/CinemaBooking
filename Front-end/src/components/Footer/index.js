import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={cx('footer')}>
      <div className={cx('footer-top')}>
        <div className={cx('container')}>
          <div className={cx('col-3', 'footer-top-item')}>
            <h1>Giới thiệu</h1>
            <ul>
              <li>
                <a href="#">
                  <i className={cx('fa-solid fa-angles-right')}></i>
                  Về chúng tôi
                </a>
              </li>
              <li>
                <p>Trang web được thành lập vào ngày 15/11/2022</p>
                <p>Nhóm thực hiện: SE104.N11 NHÓM 5</p>
              </li>
            </ul>
          </div>
          <div className={cx('col-3', 'footer-top-item')}>
            <h1>Góc điện ảnh</h1>
            <ul>
              <li>
                <a
                  className={cx('cursor-pointer')}
                  onClick={() => {
                    navigate('/movietypepage');
                  }}
                >
                  <i className={cx('fa-solid fa-angles-right')}></i>
                  Thể loại phim
                </a>
              </li>
              <li>
                <a href="#">
                  <i className={cx('fa-solid fa-angles-right')}></i>
                  Bình luận phim
                </a>
              </li>
              <li>
                <a href="#">
                  <i className={cx('fa-solid fa-angles-right')}></i>
                  Blog điện ảnh
                </a>
              </li>
              <li>
                <a href="#">
                  <i className={cx('fa-solid fa-angles-right')}></i>
                  Phim hay tháng
                </a>
              </li>
            </ul>
          </div>
          <div className={cx('col-3', 'footer-top-item')}>
            <h1>Hỗ trợ</h1>
            <ul>
              <li>
                <a href="#">
                  <i className={cx('fa-solid fa-angles-right')}></i>
                  Góp ý
                </a>
              </li>
              <li>
                <a href="#">
                  <i className={cx('fa-solid fa-angles-right')}></i>
                  Sale & Service
                </a>
              </li>
              <li>
                <a href="#">
                  <i className={cx('fa-solid fa-angles-right')}></i>
                  Rạp / Giá vé
                </a>
              </li>
              <li>
                <a href="#">
                  <i className={cx('fa-solid fa-angles-right')}></i>
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>
          <div className={cx('col-3', 'footer-top-item')}>
            <h1>Kết nối UIT Cinema</h1>
            <ul className={cx('social-link')}>
              <li>
                <a href="#" className={cx('facebook-icon')}>
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className={cx('youtube-icon')}>
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#" className={cx('instagram-icon')}>
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
            <h1>Download App</h1>
            <ul className={cx('social-link')}>
              <li>
                <a href="#">
                  <i class="fa-brands fa-apple"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-google-play"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cx('footer-bottom', 'footer-line')}>
        <img src="https://tuoitre.uit.edu.vn/wp-content/uploads/2015/07/logo-uit.png"></img>
        <p>Trường Đại học Công nghệ Thông tin - ĐHQG-TP.HCM, Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh</p>
      </div>
    </div>
  );
};

export default Footer;
