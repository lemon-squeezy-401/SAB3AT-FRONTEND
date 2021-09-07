/* eslint-disable indent */
import React, { Component } from 'react';
import './AboutUs.css';
export class AboutUs extends Component {
	render() {
		return (
			<div className=" ">
				<section className=" sectionAboutUs" id="about-us">
					{/* <div className="overlay"> */}
					{/* <div className="whiteSpace"></div> */}
					<section className='aboutPic'>
						<div className="titleArea ">
							<h2>Who we are !</h2>

							<div className="linesOutWhite">✻</div>
							<p className="maindescription">Sab3at is A leader company in marketting, for the sale and purchase of mini-services at prices starting from $7. </p>
							<p className="description">
								<h3>Our Vision:</h3> Sab3at seeks to be Earth's most customer-centric company, where customers can find and discover anything they might want to buy online<br /></p>
							<p className="description2 description"> <h3>	Our Mission:</h3> We strive to offer our customers the lowest possible prices, the best available selection, and the utmost convenience.
							</p>
						</div>
						<div className="titleArea">
							<h3>Our Developers Team:</h3>
							<div className="linesOutWhite">✻</div>
						</div></section>
					<div className="aboutUsContainer">

						<div>
							<div className="container">
								<div className="row vh-100">
									<div className="col-sm-6 col-lg-3 my-auto">
										<div className="box shadow-lg bg-white p-4">
											<div className="image-wrapper mb-3">
												<img className="img-fluid" src="https://ca.slack-edge.com/TNGRRLUMA-U01PQLR6Q81-7b7c26b4cb99-512" alt="..." />
											</div>
											<div className="box-desc">
												<p>Abdallah Abu-Khurma</p>
												<h5>Web Developer</h5>
											</div>
											<ul className="social">
												<li><a href="https://github.com/AbdallahAbuKhurma"> <i className="fa fa-github fa-lg" ></i></a></li>
												<li><a href="https://www.linkedin.com/in/abdallah-abu-khurma-460192209/"> <i className="fa fa-linkedin fa-lg"></i></a></li>
												<li><a href="/"> <i className="fa fa-google"></i></a></li>
											</ul>
										</div>
									</div>
									<div className="col-sm-6 col-lg-3 my-auto ">
										<div className="box shadow-lg bg-white p-4">
											<div className="image-wrapper mb-3">
												<img className="img-fluid" src="https://ca.slack-edge.com/TNGRRLUMA-U01PC2B5B6W-ec96dc88e38f-512" alt="..." />
											</div>
											<div className="box-desc">
												<p>Abeer Al-Rafati</p>
												<h5>Web Developer</h5>
											</div>
											<ul className="social">
												<li><a href="https://github.com/AbeerAl-Rafati"> <i className="fa fa-github"></i></a></li>
												<li><a href="https://www.linkedin.com/in/abeer-al-rafati/"> <i className="fa fa-linkedin"></i></a></li>
												<li><a href="/"> <i className="fa fa-google"></i></a></li>
											</ul>
										</div>
									</div>
									<div className="col-sm-6 col-lg-3 my-auto">
										<div className="box shadow-lg bg-white p-4">
											<div className="image-wrapper mb-3">
												<img className="img-fluid" src="https://ca.slack-edge.com/TNGRRLUMA-U01PC89S5DH-8ced06a92044-512" alt="..." />
											</div>
											<div className="box-desc">
												<p>Enas Batayneh</p>
												<h5>Web Developer</h5>
											</div>
											<ul className="social">
												<li><a href="https://github.com/En-ZUH"> <i className="fa fa-github"></i></a></li>
												<li><a href="https://www.linkedin.com/in/enas-bataineh/"> <i className="fa fa-linkedin"></i></a></li>
												<li><a href="/"> <i className="fa fa-google"></i></a></li>
											</ul>
										</div>
									</div>
									<div className="col-sm-6 col-lg-3 my-auto">
										<div className="box shadow-lg bg-white p-4">
											<div className="image-wrapper mb-3">
												<img className="img-fluid" src="https://ca.slack-edge.com/TNGRRLUMA-U01Q1SPGR7S-5359a470092e-512" alt="..." />
											</div>
											<div className="box-desc">
												<p>Murad Alshorman </p>
												<h5>Web Developer</h5>
											</div>
											<ul className="social">
												<li><a href="https://github.com/MURADALSHORMAN"> <i className="fa fa-github"></i></a></li>
												<li><a href="/"> <i className="fa fa-linkedin"></i></a></li>
												<li><a href="/"> <i className="fa fa-google"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div >
						</div >
					</div>
					{/* <div className="whiteSpace"></div> */}
					{/* </div> */}
				</section>

				<section className="sectionContactUs" id="contact-us">
					{/* <div className="whiteSpace"></div> */}
					<div className="titleArea ">
						<h2>Contact Us</h2>
						<div className="linesOutWhite">✻</div>

						<p className='description3'>Email : info@sab3at.com<br />Phone : +967 79 0000 000<br /><p className='description4'> </p></p>
					</div>
					{/* <div className="whiteSpace"></div> */}

				</section >

			</div >
		);
	}
}

export default AboutUs;
