import * as React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
	return (
		<main class="mx-auto px-4 max-w-7xl py-4 sm:px-6 lg:px-8">
			<Navbar />
			{children}
			<Footer />
		</main>
	);
}
