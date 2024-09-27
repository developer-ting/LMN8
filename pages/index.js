// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";

// IMAGES //
import titleImg from "../public/img/Layer_1.png";

// DATA //

/** Home Page */
export default function HomePage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Home"} Desc={"Home Desc"} OgImg={""} Url={"/"} />

			{/* Page Content starts here */}
			<main className={`${styles.HomePage}`}>
				<div className={`${styles.banner_section}`}>
					<div className={`${styles.banner_info}`}>
						<img src={titleImg.src} className="img-responsive"/>
						<h2 className={`${styles.sub_heading}`}>Complete control of your data, at your fingertips</h2>
						<h1 className={`${styles.heading}`}>Arriving Soon</h1>
					</div>
				</div>
			</main>
			{/* Page Content ends here */}
		</div>
	);
}
