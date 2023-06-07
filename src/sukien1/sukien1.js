import styles from './sukien1.module.scss';
import classNames from 'classnames/bind';
let sk1 = classNames.bind(styles);

function Sukien1() {
    return (
        <>
            <div className={sk1('body')}>
                <div className={sk1('body1')}>

                </div>
                <div className={sk1('body2')}>
                    <h2 className={sk1('h2')}>Sự kiện 1</h2>
                    <div className={sk1('bao')}>
                        <div className={sk1('content')}>
                            <div className={sk1('content1')}>
                                <img className={sk1('hinh1')} src="asset/img/sk3.png" alt="" />
                                <div className={sk1('text1')}>
                                    <p className={sk1('date')}> 30/05/2021 - 01/06/2021</p>
                                    <p className={sk1('chu')}> Đầm sen park</p>
                                    <h4 className={sk1('gia')}>25.000 VND</h4>
                                </div>
                            </div>
                           

                        </div>
                    </div>
                    <div className={sk1('content2')}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic sdsd typesetting, remaining cssa essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, of Lorem Ipsum. 
                    </div>
                    <div className={sk1('content3')}>
                    <img className={sk1('hinh2')} src="asset/img/sk.png" alt="" />
                        <p className={sk1('p')}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic sdsd typesetting, remaining cssa essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, of Lorem Ipsum.</p>
                    </div>
                    <div className={sk1('content4')}>
                    <p className={sk1('p')}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic sdsd typesetting, remaining cssa essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, of Lorem Ipsum.</p>

                    <img className={sk1('hinh3')} src="asset/img/sk.png" alt="" />

                    </div>
                </div>
                <div className={sk1('body3')}>

                </div>
                
            </div>
            <div className={sk1('day')}>

            </div>
        </>
    );
}

export default Sukien1;