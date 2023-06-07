import styles from './lienhe.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

let lh = classNames.bind(styles);
function lienhe() {
    return (
        <>
            <div className={lh('body')}>
                <div className={lh('body1')}>
                <img className={lh('hinhtocdo')} src="asset/img/tocdo.png" alt="" />

                </div>
                <div className={lh('body2')}>
                    <h2>Liên hệ</h2>

                    <div className={lh('baodiachi')}>
                        <div className={lh('diachi')}>
                            <div className={lh('iconaddpress')}>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <b>Địa chỉ :</b>

                            </div>
                            <p className={lh('p')}>86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh</p>
                        </div>
                    </div>
                    <div className={lh('baoemail')}>
                        <div className={lh('email')}>
                            <div className={lh('iconemail')}>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <b>Email:</b>
                            </div>
                            <p className={lh('p')}>investigate@your-site.com</p>
                        </div>
                    </div>
                    <div className={lh('baodt')}>
                        <div className={lh('dt')}>
                            <div className={lh('iconphone')}>
                                <FontAwesomeIcon icon={faPhoneVolume} />
                                <b>Điện thoại:</b>
                            </div>
                            <p className={lh('p')}>+84 145 689 798</p>

                        </div>
                    </div>
                    <div className={lh('bao')}>
                        <div className={lh('fom')}>
                            <p className={lh('content')}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis.
                            </p>
                            <div >
                                <input className={lh('name')} type="text" placeholder='Tên' />
                                <input  className={lh('gmail')} type="text" placeholder='email' />
                            </div>
                            <div >
                                <input className={lh('sdt')} type="text" placeholder='số điện thoại' />
                                <input className={lh('adpress')} type="text" placeholder='địa chỉ' />
                            </div>
                            <div >
                            <input className={lh('loinhan')} type="text" placeholder='lời nhắn' />
                            </div>
                            <div>
                            <button className={lh('guilienhe')} type="submit">gửi liên hệ</button>
                            </div>
                        </div>
                    </div>
                    <div className={lh('day')}>

                    </div>
                </div>
                <div className={lh('body3')}>

                </div>
            </div>
        </>
    );
}
export default lienhe;