import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const FooterPage = () => {
	const data = useStaticQuery(dataQuery);
	const images = data.dataJson.images;

	return (
		<footer class="footer footer-center bg-base-200 text-base-content rounded-box p-6">
			<aside>
				<p>
					Copyright © {new Date().getFullYear()} - All right reserved
				</p>
				<p>Made with 🖤 by Marcus Stewart</p>
			</aside>
			<nav>
				<div class="grid grid-flow-col gap-4">
					{images.map((image) => {
						return (
							<a
								href={image.href}
								title={image.title}
								class="btn btn-ghost btn-circle transition ease-in-out duration-500"
								target="_blank"
								rel="noreferrer"
							>
								<GatsbyImage
									image={getImage(image.src)}
									alt={image.title}
								/>
							</a>
						);
					})}
				</div>
			</nav>
		</footer>
	);
};

// https://jacky-ttt.medium.com/day157-get-images-from-json-in-gatsby-e23872e84018
const dataQuery = graphql`
	query FooterPageQuery {
		dataJson {
			images {
				href
				title
				src {
					childImageSharp {
						gatsbyImageData(
							formats: AUTO
							width: 35
							height: 35
							placeholder: BLURRED
						)
					}
				}
			}
		}
	}
`;

export default FooterPage;
