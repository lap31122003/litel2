import styles from './thanhtoan.module.scss';
import classNames from 'classnames/bind';
let tt = classNames.bind(styles);
function Thanhtoan() {
    return (
        <>
            <div className={tt('body')}>
                <div className={tt('body1')}>
                    <img className={tt('aohong')} src="asset/img/beaohong.png" alt="" />

                </div>
                <div className={tt('body2')}>

                    <h1>Thanh toán</h1>
                    <div className={tt('thongtinthanhtoan')}>
                        <h4>thông tin thanh toán</h4>
                    </div>

                    <div className={tt('bao')}>
                        <div className={tt('tttt')}>
                            <form className={tt('sothe')}>
                                <label className={tt('lb')}>Số thẻ:</label> <br /> <br />
                                <input className={tt('ipsothe')} type="text" />
                                <label className={tt('lb')}>Họ tên chủ thẻ</label> <br /> <br />
                                <input className={tt('ipsothe')} type="text" />
                                <label className={tt('lb')}>ngày hết hạn</label> <br /> <br />
                                <input className={tt('ipsothe')} type="date" />
                                <label className={tt('lb')}>CVV/CVC</label> <br /> <br />
                                <input className={tt('ip')} type="text" /> <br /> <br />
                                <button className={tt('sub')} type="submit">thanh toán</button>
                            </form>
                        </div>
                    </div>
                    < div className={tt('baove')}>
                        <div className={tt('vecontent')}>
                            <form>
                                <b className={tt('bbb')}>Số tiền thanh toán</b> <br />
                                <input className={tt('ip1')} type="text" />
                            </form>
                            <form>
                                <b className={tt('bbb')}>Số lượng vé</b> <br />
                                <input className={tt('ip2')} type="number" />
                            </form>
                            <form>
                                <b className={tt('bbb')}>ngày sử dụng</b> <br />
                                <input className={tt('ip3')} type="date" />
                            </form>
                        </div>
                        <div className={tt('contenthongtin')}>
                            <form>
                                <label>
                                    <b className={tt('b1')}>Thông tin liên hệ</b> <br />
                                    <input className={tt('ip4')} type="text" /><br />
                                </label>
                            </form>
                            <b className={tt('b2')}>Điên thoại</b> <br />
                            <input className={tt('ip5')} type="text" /> <br />



                            <b className={tt('b3')}>Email</b> <br />
                            <input className={tt('ip6')} type="text" />
                        </div>
                        <div className={tt('vecong')}>
                            <h3>VÉ CỔNG - VÉ GIA ĐÌNH</h3>
                        </div>
                    </div>
                    <div className={tt('day')}>

                    </div>
                </div>

                <div className={tt('body3')}>

                </div>
            </div>

        </>
    );
}

export default Thanhtoan;