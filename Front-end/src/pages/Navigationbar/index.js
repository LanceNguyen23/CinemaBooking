import classNames from 'classnames/bind';
import styles from './Navigationbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
const Navigationbar = () => {
  const navigate = useNavigate();
  return (
    <div className={cx('navbar')}>
      <li>
        <a href="#DatVe">ĐẶT VÉ</a>
      </li>
      <div className={cx('sub-nav')}>
        <li>
          <a href="#Phim">
            PHIM <FontAwesomeIcon icon={faAngleDown} />
          </a>
        </li>
        <div className={cx('sub-nav-content')}>
          <a href="#Phim">PHIM ĐANG CHIẾU</a>
          <a href="#Phim">PHIM SẮP CHIẾU</a>
        </div>
      </div>
      <div className={cx('sub-nav')}>
        <li>
          <a href="#">
            GÓC ĐIỆN ẢNH <FontAwesomeIcon icon={faAngleDown} />
          </a>
        </li>
        <div className={cx('sub-nav-content')}>
          <a
            className={cx('style-hover')}
            onClick={() => {
              navigate('/movietypepage');
            }}
          >
            THỂ LOẠI PHIM
          </a>
          <a
            className={cx('style-hover')}
            onClick={() => {
              navigate('/castpage');
            }}
          >
            DIỄN VIÊN
          </a>
          <a href="#">ĐẠO DIỄN</a>
          <a href="#">BÌNH LUẬN PHIM</a>
          <a href="#">BLOG ĐIỆN ẢNH</a>
        </div>
      </div>
      <div className={cx('sub-nav')}>
        <li>
          <a href="#Phim">
            SỰ KIỆN <FontAwesomeIcon icon={faAngleDown} />
          </a>
        </li>
        <div className={cx('sub-nav-content')}>
          <a href="#Phim">ƯU ĐÃI</a>
          <a href="#Phim">PHIM HAY THÁNG</a>
        </div>
      </div>
      <li>
        <a href="#Rap/GiaVe">RẠP/GIÁ VÉ</a>
      </li>
      <li>
        <a href="#HoTro">HỖ TRỢ</a>
      </li>
      <li>
        <a href="#ThanhVien">THÀNH VIÊN</a>
      </li>
    </div>
  );
};

export default Navigationbar;
