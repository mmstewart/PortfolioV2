import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const links = [
	{
		title: "Home",
		url: "/",
	},
	{
		title: "Projects",
		url: "/projects",
	},
	{
		title: "About",
		url: "/about",
	},
	{
		title: "Contact",
		url: "/contact",
	},
];

const images = [
	{
		title: "E-mail",
		href: "mailto:mss.stewart1@gmail.com",
		src: "../images/mail.png",
	},
	{
		title: "Resume",
		href: "/static/resume-ad20119a48928f152b5e24a7bb7bb353.pdf",
		src: "../images/document.png",
	},
	{
		title: "Linkedin",
		href: "https://linkedin.com/in/marcusmstewart",
		src: "../images/linkedin.png",
	},
	{
		title: "Github",
		href: "https://github.com/mmstewart/",
		src: "github.png",
	},
];

const FooterPage = () => {
	return (
		<footer class="footer footer-center bg-base-200 text-base-content rounded-md p-10">
			<nav class="grid grid-flow-col gap-4">
				{links.map((list) => (
					<a href={list.url} class="link link-hover">
						{list.title}
					</a>
				))}
			</nav>
			<nav>
				<div class="grid grid-flow-col gap-4">
					{images.map((image) => (
						<a
							href={image.href}
							title={image.title}
							class="btn btn-ghost btn-circle transition ease-in-out duration-500"
							target="_blank"
						>
							<StaticImage
								src={`../images/${image.src}`}
								alt="test"
								placeholder="blurred"
								fit="contain"
								height={40}
								width={40}
							/>
						</a>
					))}
				</div>
			</nav>
			<div>
				<p>
					Copyright © {new Date().getFullYear()} - All right reserved
				</p>
				<p>Made with 🖤 by Marcus Stewart</p>
			</div>
		</footer>
	);
};

export default FooterPage;
