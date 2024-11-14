import userImage from "../assets/images/profile-picture.png"
import Styles from "./sidebar.module.css"
import clockIcon from "../assets/images/clock-icon.png"
import { useRef } from "react";

const links = [
    {
        id: 1,
        name: "آزمون آماده",
        url: "#",
        subLinks: [
            {
                name: "آزمون های ناتمام",
                link: "#",
                icon: "src/assets/images/flag-icon.png"
            },
            {
                name: "آزمون های دربافت شده",
                link: "#",
                icon: "src/assets/images/gift-icon.png"
            },
            {
                name: "آزمون های خریداری شده",
                link: "#",
                icon: "src/assets/images/business-icon.png"
            },
        ]
    },
    {
        id: 2,
        name: "اجرای آزمون",
        url: "#",
        subLinks: [
            {
                name: "آزمون های شغلی",
                link: "#",
                icon: "src/assets/images/time-icon.png"
            },
            {
                name: "آزمون های تحصیلی",
                link: "#",
                icon: "src/assets/images/education-icon.png"
            },
            {
                name: "آزمون های کودکان",
                link: "#",
                icon: "src/assets/images/children-icon.png"
            },
        ]
    },
    {
        id: 3,
        name: "گزارش لینک ها",
        url: "#",
    },
    {
        id: 4,
        name: "نتیجه آزمون",
        url: "#",
    },
    {
        id: 5,
        name: "آزمودنی ها",
        url: "#",
    },
]

function SidebarTemp({ userName })
{
    const fileInputRef = useRef(null);

    const handleButtonClick = () =>
    {
        fileInputRef.current.click();  
    };

    const handleFileChange = (event) =>
    {
        if (event.target.files && event.target.files[0])
        {
            const file = event.target.files[0];
            onImageUpload(file); 
        }
    };
    return (
        <div className={Styles.sidebarContainer}>
            <div className={Styles.usernameBox}>
                <button onClick={handleButtonClick}>
                    <img src={userImage} alt="user image" className={Styles.usernameIMG} />
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                    accept="image/*"
                />
                <div className={Styles.usernameBG}>
                    <h3>{userName ? userName : "نام کاربری"}</h3>
                </div>
            </div>
            <div className={Styles.sidebarLinks}>
                <ul>
                    {
                        links.map((link) =>
                        {
                            return (
                                <div>
                                    <li className={`${Styles.sidebarLinkContainer} ${link.subLinks ? Styles.sidebarSubLinks : ""}`} >
                                        <div className={Styles.link}>
                                            <img src={clockIcon} alt="clock icon" className={Styles.clockIcon} />
                                            <a href={link.url} className={Styles.sidebarLink}>{link.name}</a>
                                        </div>
                                        {link.subLinks && (
                                            <div className={Styles.subLinkContainer}>
                                                <ul className={Styles.subLinks}>
                                                    {
                                                        link.subLinks.map((subLink) =>
                                                        {
                                                            return (
                                                                <li className={Styles.subLink}>
                                                                    <a href={subLink.link}>
                                                                        <img src={subLink.icon} alt="random" />
                                                                        {subLink.name}
                                                                    </a>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                </div>
                            )
                        })
                    }
                </ul>
                <p style={{ color: "#000" }}>© آگاه پدیدار</p>
            </div>
        </div>
    );
}

export default SidebarTemp;