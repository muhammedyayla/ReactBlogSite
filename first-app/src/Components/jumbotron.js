import React from 'react';
import myImg from '../img/my-logo.jpg'; // Import the image

function Jumbotron() {
    return (

            <div class="jumbotron pt-5 pb-5">
                <div className='container'>
                    <div className="row align-items-center">
                        <div className="col-md-2">
                            <img src={myImg} alt="Muhammet Yayla Logo" style={{ height: 200, padding: 10, borderRadius: 200 }} className="img-fluid" />
                        </div>
                        <div className="col-md-10">
                            <h1>About Me</h1>
                            <p>
                                Hello, I am a graduate of Yıldız Technical University, Maçka Vocational School of Information Systems. During my high school years, I gained valuable experience in Broadcast Systems, IT, and Software departments by completing a one-year internship at TurkMedya. During my university education, I focused on Frontend software and IT departments by completing a three-month internship at BluTv.

                                Currently, I work as a technical assistant at Sözcü TV and also serve as a control room operator. I handle the tasks of all operators in the control room at an advanced level, including Playout, Kj, Wall, Picture Desk, Sound Desk, and relieving the Technical Director during breaks.

                                In the summer of 2019, I attended a three-month language course at Speak Up London in England, earning an Upper Intermediate level certificate. Additionally, I further enhanced my skills by successfully completing a 140-hour Frontend software course at Bahçeşehir University.

                                My primary interest lies in Frontend development such, a field I am genuinely passionate about. I also have knowledge of some backend programming languages (such as C#, Java, MSSQL, PHP, etc.). Below are the links to my GitHub and Medium profiles:

                                GitHub: https://github.com/muhammedyayla
                                Medium: https://medium.com/@muhammedyayla</p>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default Jumbotron;