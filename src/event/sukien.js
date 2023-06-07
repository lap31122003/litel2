import styles from './event.module.scss';
import classNames from 'classnames/bind';
let sk = classNames.bind(styles);

function sukien() {
  return (
    <>
      <div className={sk('body')}>
        <div className={sk('body1')}>

        </div>

        <div className={sk('body2')}>
          <h1>sự kiện nổi bật</h1>

          <div className={sk('baosk')}>
            <div className={sk('sk')}>
              <img className={sk('anhsk1')} src="asset/img/sk1.png" alt="" />
              <div className={sk('baotext')}>
                <b>Sự kiện 1</b> <br />
                <small>đầm sen park</small> <br />
                <small>30/05/2021 - 01/06/2021</small>
                <h3 className={sk('h3')}>25.000vnd</h3>
                <button className={sk('button')}>Xem chi tiết</button>

              </div>
            </div>
            <div className={sk('sk1')}>
              <img className={sk('anhsk1')} src="asset/img/sk1.png" alt="" />
              <div className={sk('baotext')}>
                <b>Sự kiện 1</b> <br />
                <small>đầm sen park</small> <br />
                <small>30/05/2021 - 01/06/2021</small>
                <h3 className={sk('h3')}>25.000vnd</h3>
                <button className={sk('button')}>Xem chi tiết</button>

              </div>
            </div>
            <div className={sk('sk2')}>
              <img className={sk('anhsk1')} src="asset/img/sk2.png" alt="" />
              <div className={sk('baotext')}>
                <b>Sự kiện 1</b> <br />
                <small>đầm sen park</small> <br />
                <small>30/05/2021 - 01/06/2021</small>
                <h3 className={sk('h3')} >25.000vnd</h3>
                <button className={sk('button')}>Xem chi tiết</button>

              </div>
            </div>
            <div className={sk('sk3')}>
              <img className={sk('anhsk1')} src="asset/img/sk3.png" alt="" />
              <div className={sk('baotext')}>
                <b>Sự kiện 1</b> <br />
                <small>đầm sen park</small> <br />
                <small>30/05/2021 - 01/06/2021</small>
                <h3 className={sk('h3')} >25.000vnd</h3>
                <button className={sk('button')}>Xem chi tiết</button>
              </div>
            </div>
          </div>

          <div className={sk('day')}>

          </div>
        </div>
        <div className={sk('body3')}>

        </div>
      </div>
    </>
  );
}

export default sukien;