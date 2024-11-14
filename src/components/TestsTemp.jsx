import Styles from "./testsTemp.module.css"
import Logo from "../assets/images/logo.png"
import CardTemp from "./CardTemp";

const testsData = [
    {
        id: 1,
        testName: "آزمون فلانکر",
        testDescription: "آزمون فلانکر با کوسه ماهی در محدوده سنی 7-9 سال . بدون  نیاز به هنجار یابی و ابزار جانبی",
        remainingExecution: 1,
        designer: "آگاه پدیدار"
    },
    {
        id: 2,
        testName: "آزمون فلانکر",
        testDescription: "آزمون فلانکر با کوسه ماهی در محدوده سنی 7-9 سال . بدون  نیاز به هنجار یابی و ابزار جانبی",
        remainingExecution: 1,
        designer: "آگاه پدیدار"
    },
    {
        id: 3,
        testName: "آزمون فلانکر",
        testDescription: "آزمون فلانکر با کوسه ماهی در محدوده سنی 7-9 سال . بدون  نیاز به هنجار یابی و ابزار جانبی",
        remainingExecution: 1,
        designer: "آگاه پدیدار"
    },
    {
        id: 4,
        testName: "آزمون فلانکر",
        testDescription: "آزمون فلانکر با کوسه ماهی در محدوده سنی 7-9 سال . بدون  نیاز به هنجار یابی و ابزار جانبی",
        remainingExecution: 1,
        designer: "آگاه پدیدار"
    },
    {
        id: 5,
        testName: "آزمون فلانکر",
        testDescription: "آزمون فلانکر با کوسه ماهی در محدوده سنی 7-9 سال . بدون  نیاز به هنجار یابی و ابزار جانبی",
        remainingExecution: 1,
        designer: "آگاه پدیدار"
    },
    {
        id: 6,
        testName: "آزمون فلانکر",
        testDescription: "آزمون فلانکر با کوسه ماهی در محدوده سنی 7-9 سال . بدون  نیاز به هنجار یابی و ابزار جانبی",
        remainingExecution: 1,
        designer: "آگاه پدیدار"
    }
]

function TestsTemp()
{
    return (
        <div className={Styles.testsContainer}>
            <div className={Styles.header}>
                <p className={Styles.headerText}><span>آزمون های خریداری شده</span> (آزمون موردنظر خود برای اجرا یا ساخت لینک را انتخاب کنید)</p>
                <img src={Logo} alt="company logo" className={Styles.logoImg} />
            </div>
            <div className={Styles.cardsHolder}>
                {
                    testsData.map((test) =>
                    {
                        return (
                            <CardTemp
                                cardName={test.testName}
                                cardDesc={test.testDescription}
                                designerName={test.designer}
                                remainingNum={test.remainingExecution}
                                key={test.id} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default TestsTemp;