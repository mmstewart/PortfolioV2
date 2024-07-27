import * as React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
	return (
		<main class="container mx-auto">
			<Navbar />
			{children}
			<Footer />
		</main>
	);
}
