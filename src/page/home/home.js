import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './home.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

function Home() {
    return (

        <div className={cx('body')}>
            <div className={cx('body1')}>
                <img className={cx('dudotrang')} src="asset/img/dudotrang.png" alt="" width="100px" height="150px" />
            </div>
            <div className={cx('body2')}>
                <div className={cx('senvachu')}>
                    <p className={cx('chu')}>đầm sen park</p>
                    <img className={cx('hinhdamsen')} src="asset/img/hoasen.png" alt="" />
                    <img className={cx('hinhdu3mau')} src="asset/img/du3mauu.png" alt="" />
                </div>
                <img className={cx('hinhduduoi')} src="asset/img/du3mauuu.png" alt="" />
                <img className={cx('du3mauu')} src="asset/img/du3mauu.png" alt="" />
                <div className={cx('wrapper')}>
                    <div className={cx('baotext')}>
                        <div className={cx('text')}>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis.
                                Suspendisse iaculis libero lobortis condimentum gravida. Aenean auctor iaculis risus, lobortis molestie lectus consequat a.</p>
                            <b><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </b><br />
                            <b><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </b><br />
                            <b><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </b><br />
                            <b><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </b><br />
                        </div>
                    </div>
                    <img className={cx('hinh4nguoi')} src="asset/img/4nguoi.png" alt="" />

                    <div className={cx('baotext1')}>
                        <div className={cx('vecuaban')}>
                            <div className={cx('vecuaban1')}>
                                <h4>vé của bạn</h4>
                            </div>
                        </div>
                        <div className={cx('text1')}>
                            <label>
                                <select className={cx('options')}>
                                    <option>Chọn gói</option>
                                    <option value="option1">gói gia đình</option>
                                    <option value="option2">gói hẹn hò</option>
                                    <option value="option3">gói 1 mình</option>
                                </select>
                            </label>
                            <div className={cx('date-day')}>
                                <input type="number" placeholder='số lượng' />
                                <input type="date" />
                            </div>
                            <div className={cx('baoform')}>
                                <form>
                                    <div className={cx('hovaten')}>
                                        <input type="text" id="username" name="username" placeholder='Họ Và Tên' />
                                    </div>
                                    <div className={cx('sdt')}>
                                        <input type="text" id="password" name="password" placeholder='Số điện thoại' />
                                    </div>
                                    <div className={cx('address')}>
                                        <input type="text" id="password" name="password" placeholder='Địa chỉ nhận' />
                                    </div>
                                    <div className={cx('book')}>
                                        <button className={cx('buton')} type="submit">Đặt vé</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <img className={cx('hinhbupbe')} src="asset/img/bupbe.png" alt="" />
                <div className={cx('day')}>

                </div>
            </div>
            <div className={cx('body3')}>
                <img className={cx('ducuoi')} src="asset/img/ducuoi.png" alt="" />
            </div>
        </div >

    );
}

export default Home;