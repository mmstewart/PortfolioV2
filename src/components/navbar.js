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
];

export default function Navbar() {
	return (
		<div class="navbar bg-base-100 px-0">
			<div class="navbar-start">
				<div class="dropdown">
					<div
						tabindex="0"
						role="button"
						class="btn btn-ghost lg:hidden pl-0"
					>
						<StaticImage
							src="../images/menu.png"
							className="h-5 w-5"
							alt="test"
							placeholder="blurred"
							fit="contain"
							height={20}
							width={20}
						/>
					</div>
					<ul class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
						{links.map((list) => (
							<li>
								<a href={list.url} class="link link-hover">
									{list.title}
								</a>
							</li>
						))}
					</ul>
				</div>
				<a href="/" class="btn btn-ghost text-xl pl-0">
					marcusMS.
				</a>
			</div>
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal px-1">
					{links.map((list) => (
						<li>
							<a href={list.url} class="link link-hover">
								{list.title}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div class="navbar-end">
				<a href="/contact" class="btn">
					Contact
				</a>
			</div>
		</div>
	);
}
