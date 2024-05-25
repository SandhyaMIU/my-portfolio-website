import { Container, Row, Col } from "react-bootstrap";
import '../data/About.css';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";
import { FaCloudDownloadAlt } from "react-icons/fa";
import profile2 from '../assets/img/Me.jpg';


export const About = () => {
    return (
        <section className="about py-3 mb-5" id="about">
            <Container className="pt-3">
                <Row className="d-flex align-items-center justify-content-center">
                    <Col xs={12} md={8} className="order-last order-md-first">

                    {/* <Tilt>
                        <Lottie 
                        className="illustration" 
                        animationData={CoderGuy} 
                        loop={true} 
                        />
                    </Tilt> */}

                        <div className="about">

                        <p>
                        Proficient Software Engineer with a passion for crafting robust enterprise and web applications that address both internal and external needs. 
                        With around 5 years of hands-on experience, I've honed my skills in Java, Spring frameworks, JavaScript, React.js and among other technologies. 
                        My expertise extends to designing secure RESTful APIs, optimizing database performance, Unit testing and implementing efficient solutions throughout the Software Development Life Cycle.
                            <br /><br />

                            Outside of work, I'm committed to continuous learning, as evidenced by my recent a Master's in Computer Science and holding AWS Cloud Practitioner certificate. 
                            I bring expertise in cloud computing and AWS services. I'm eager to leverage my skills and experience to tackle new challenges and deliver innovative solutions in the ever-evolving landscape of technology.

                            <br /><br />
                            If you're seeking for a motivated software engineer dedicated to ongoing learning and driving results, I'm excited to connect with you.
                        </p>
                        </div>
                        
                    </Col>
                    <Col xs={12} md={4} className="order-first order-md-last mb-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <img
                                src={profile2} // Replace with your photo URL
                                alt="Photo"
                                style={{ borderRadius: '50%', width: '320px', height: '320px', objectFit: 'contain', border: '1px solid #fff' }}
                            />
                        </div>

                    </Col>
                </Row>

            </Container>

        </section>
    )
}