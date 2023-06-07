import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
let cx = classNames.bind(styles);
function Index() {
    return (
        <>
            <div className={cx('heading')}>
                <img className={cx('logo')} src="asset/img/logo.png" alt="" width="150px" height="80px" />
                <ul className={cx('menu')}>
                    <li><Link to="/">Trang chủ</Link></li>
                    <li><Link to="/Sukien">Sự kiện</Link></li>
                    <li><Link to="/Lienhe">Liên hệ</Link></li>
                    <li><Link to="/Thanhtoan"> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>0123456789</Link></li>
                </ul>
            </div>
           

        </>
    );

}



export default Index;