
import './about.css'
import img from '../../assets/IMG_20240105_162928_491.jpg'


function About () {
    // document.querySelectorAll(".myskills .skill .progress span").forEach(s => {
        
    //     if(s.dataset.progress) {
    //         s.parentElement.target.style = `width : 70px `;
    //         s.target.style = 'background: linear-gradient(267deg , #da7c25 , #b923e1);  '
    //         console.log(s.dataset.progress)
    //     }
    // })
    return (
        <div className="about" id="about">
            <h1>About me</h1>
            <div className="about-contact">
                <img src={img} alt="" />
                <div className="text">
                    <div className="myself">
                        I am an experienced Frontend Developer with over a decode of professional expertise in the field throughout my career . i have fod the privilage of callobarating with prestigious organization contributing to their sucess and frowth
                        <br /><br />
                        my passion for frontend developement is not only reffected in my extensive but also in the enthusiasm and dedication i bring to each project
                    </div>
                    <div className="myskills">
                        <div className="skill">
                            <span>HTML & CSS</span>
                            <hr style={{width : "50%"}}/>
                        </div>
                        <div className="skill">
                            <span>React js</span>
                            <hr style={{width : "70%"}}/>
                        </div>
                        <div className="skill">
                            <span>Java Script</span>
                            <hr style={{width : " 100%"}}/>
                        </div>
                        <div className="skill">
                            <span>Next js</span>
                            <hr style={{width : "60%"}}/>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="achivements">
                <div className="achivement">
                    <h1>10+</h1>
                    <p>years experience</p>
                </div>
                <div style={{ width : "1px" , backgroundColor : "#fff"}}></div>
                <div className="achivement">
                    <h1>90+</h1>
                    <p>project completed</p>
                </div>
                <div style={{  width : "1px" , backgroundColor : "#fff"}}></div>
                <div className="achivement">
                    <h1>15+</h1>
                    <p>happy client</p>
                </div>
            </div>
        </div>
    ) ;
}

export default About ;