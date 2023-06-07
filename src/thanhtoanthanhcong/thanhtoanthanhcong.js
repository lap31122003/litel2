import styles from './thanhtoanthanhcong.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
let tttc = classNames.bind(styles);
function Thanhtoanthanhcong() {
    return (
        <>
            <div className={tttc('body')}>
                <div className={tttc('body1')}>

                </div>
                <div className={tttc('body2')}>
                    <h2 className={tttc('h2')}>Thanh toán thành công</h2>
                    <div className={tttc('bao')}>
                        <div className={tttc('content')}>
                            <div className={tttc('content1')}>
                                <div className={tttc('nd1')}>
                                    <img className={tttc('qr1')} src="asset/img/qr1.png" alt="" />
                                    <b className={tttc('b')}>ALT20210501</b>
                                    <h4 className={tttc('h4')}>VÉ CỔNG</h4>
                                    <p className={tttc('p')}>Ngày sử dụng: 31/05/2021</p>
                                    <FontAwesomeIcon className={tttc('icon')} icon={faCircleCheck}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className={tttc('content2')}>
                                <div className={tttc('nd1')}>
                                    <img className={tttc('qr1')} src="asset/img/qr2.png" alt="" />
                                    <b className={tttc('b')}>ALT20210501</b>
                                    <h4 className={tttc('h4')}>VÉ CỔNG</h4>
                                    <p className={tttc('p')}>Ngày sử dụng: 31/05/2021</p>
                                    <FontAwesomeIcon className={tttc('icon')} icon={faCircleCheck}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className={tttc('content3')}>
                                <div className={tttc('nd1')}>
                                    <img className={tttc('qr1')} src="asset/img/qr3.png" alt="" />
                                    <b className={tttc('b')}>ALT20210501</b>
                                    <h4 className={tttc('h4')}>VÉ CỔNG</h4>
                                    <p className={tttc('p')}>Ngày sử dụng: 31/05/2021</p>
                                    <FontAwesomeIcon className={tttc('icon')} icon={faCircleCheck}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className={tttc('content4')}>
                                <div className={tttc('nd1')}>
                                    <img className={tttc('qr1')} src="asset/img/qr4.png" alt="" />
                                    <b className={tttc('bb')}>ALT20210501</b>
                                    <h4 className={tttc('h4')}>VÉ CỔNG</h4>
                                    <p className={tttc('p')}>Ngày sử dụng: 31/05/2021</p>
                                    <FontAwesomeIcon className={tttc('icon')} icon={faCircleCheck}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={tttc('button')} type="submit">Tải về</button>
                    <button className={tttc('button1')} type="submit">Gửi Email</button>
                    <img className={tttc('bedeokinh')} src="asset/img/bedeokinh.png" alt="" />
                    <div className={tttc('day')}>

                    </div>
                </div>
                <div className={tttc('body3')}>

                </div>

            </div>
        </>
    );
}

export default Thanhtoanthanhcong;