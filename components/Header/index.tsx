import s from "@/styles/Header.module.scss";
import Image from "next/image";
import vk from "@/assets/icons/vk-gray.png";
import odnoklassniki from "@/assets/icons/odnoklassniki-gray.png";
import whatsapp from "@/assets/icons/whatsapp-gray.png";
import search from "@/assets/icons/search-gold.png";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerInfo}>
                <div className={s.content}>
                    <div className={s.leftPart}>
                        <ul className={s.socialNetworks}>
                            <li className={s.networkItem}><Image src={vk} alt={""}/></li>
                            <li className={s.networkItem}><Image src={odnoklassniki} alt={""}/></li>
                            <li className={s.networkItem}><Image src={whatsapp} alt={""}/></li>
                        </ul>
                        <div>
                            <p className={s.orderText}><b>Прием заказов</b></p>
                            <p className={s.orderText}>с 9:00 до 20:00</p>
                        </div>
                    </div>
                    <div className={s.rightPart}>
                        <p className={s.orderText}><b>+7 495 228 66 69</b></p>
                        <p className={s.orderText}>Imperiya.myasa@mail.ru</p>
                    </div>
                </div>
            </div>
            {/*Mobile Menu*/}
            <div className={s.mobileSearch}>
                <Image src={search} alt={""} />
                <input type="text" placeholder={"Поиск по сайту"}/>

            </div>
        </header>)
}

export default Header;