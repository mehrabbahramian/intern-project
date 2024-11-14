import Styles from "./card.module.css"
import ClockIcon from "../assets/images/clock-icon-white.png"
import ImageIcon from "../assets/images/image-icon.png"

function CardTemp({ cardName, cardDesc, remainingNum, designerName })
{
    return (
        <div className={Styles.cardContainer}>
            <div className={Styles.cardMain}>
                <div className={Styles.cardHeader}>
                    <img src={ClockIcon} alt="clock icon" width={24} height={24} />
                    <h3>{cardName}</h3>
                </div>
                <div className={Styles.cardBody}>
                    <p>{cardDesc}</p>
                    <div className={Styles.cardBodyOptions}>
                        <button><span>+</span> اضافه کردن</button>
                        <p><span>{remainingNum}</span> اجرا باقی مانده</p>
                        <button><img src={ImageIcon} alt="image icon" /></button>
                    </div>
                </div>
            </div>
            <div className={Styles.cardFooter}>
                <p>طراحی شده توسط <span>{designerName}</span></p>
            </div>
        </div>
    );
}

export default CardTemp;