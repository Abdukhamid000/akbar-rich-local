import React from 'react'
import Image from 'next/image'
import Armchair from '@assets/images/forDoorsArmchair.png'
import LR from '@assets/images/forDoorsLR.png'
import Balcony from '@assets/images/forDoorsBalcony.png'
// import TopImg from '@assets/images/forDoorsTopImg.png'


import classes from './main.module.css'


export default function ForDoorsSection() {
    return (
        <>
            <div className={classes.topContainer}>
                <div className={classes.topContainerWrapper}>
                    {/* <Image src={'/forDoorsTopImg.png'} width={"100"} height={"100"} /> */}
                    <h1 className={`${classes.topContainerHeadline} ${classes.styleHeading}`}>Наши трехметровые <br /> Двери</h1>
                </div>
            </div>
            <main>
                <div className={classes.mainInformationContainer}>
                    <div className={classes.mainInformationImage}></div>
                    <div className={classes.mainInformationWrapper}> </div>
                    <div className={classes.mainInformationContent}>
                        <h1 className={`${classes.mainInformationHeadline} ${classes.styleHeading}`}>Заголовок</h1>
                        <hr className={classes.mainInformationLine} />
                        <p className={`${classes.mainInformationParagraph} ${classes.styleParagraph}`}>Почувствуйте себя настоящим творцом с яркой палитрой эмалей для окрашивания межкомнатных дверей. Отделки Color помогут расставить цветовые акценты на ваш вкус: оформить двери в единой гамме с интерьером или, наоборот, задать эффектные контрасты. Больше никаких ограничений: яркие двери органично впишутся в современный интерьер или станут броским дополнением проекта с классическими нотами.</p>
                    </div>

                </div>
                <div className={classes.galleryContainer}>
                    <div className={classes.galleryImage_1}>
                        <Image src={Armchair} className={classes.ImageStyle} />
                    </div>
                    <div className={classes.galleryContent_1}>
                        <div className={classes.galleryContentHeading}>
                            <p className={`${classes.galleryContentNumber} ${classes.styleParagraph}`}>01</p>
                            <h1 className={`${classes.galleryHeadline_1} ${classes.styleHeading}`}>Зоголовок</h1>
                        </div>
                        <p className={`${classes.galleryContentParagraph} ${classes.styleParagraph}`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velitAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit</p>
                    </div>
                </div>
                <div className={classes.galleryContainer} style={{ paddingTop: '0px' }}>
                    <div className={classes.galleryImage_2}>
                        <Image src={LR} className={classes.ImageStyle} />
                    </div>
                    <div className={classes.galleryContent_2}>
                        <div className={classes.galleryContentHeading} style={{ paddingTop: '20px' }}>
                            <p className={`${classes.galleryContentNumber} ${classes.styleParagraph}`}>02</p>
                            <h1 className={`${classes.galleryHeadline_1} ${classes.styleHeading}`}>Зоголовок</h1>
                        </div>
                        <p className={`${classes.galleryContentParagraph} ${classes.styleParagraph}`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velitAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit</p>
                    </div>

                </div>
                <div className={classes.galleryContainer} style={{ paddingTop: '0px' }}>
                    <div className={classes.galleryImage_1}>
                        <Image src={Balcony} className={classes.ImageStyle} />
                    </div>
                    <div className={classes.galleryContent_1}>
                        <div className={classes.galleryContentHeading} style={{ paddingTop: '20px' }}>
                            <p className={`${classes.galleryContentNumber} ${classes.styleParagraph}`}>03</p>
                            <h1 className={`${classes.galleryHeadline_1} ${classes.styleHeading}`}>Зоголовок</h1>
                        </div>
                        <p className={`${classes.galleryContentParagraph} ${classes.styleParagraph}`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velitAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit</p>
                    </div>
                </div>
                <div className={classes.contactUs}>
                    <div className={classes.contactUsParagraph}>
                        <p className={`${classes.contactUsText} ${classes.styleParagraph}`}>Eсли у вас есть какие-либо предложения или вопросы, вы можете связаться с нами через кнопку ниже</p>
                    </div>
                    <div className={classes.contactUsButton}>
                        <a className={classes.contactUsLink} href="#">Связаться с нами</a>
                    </div>
                </div>


            </main>
        </>
    )
}
