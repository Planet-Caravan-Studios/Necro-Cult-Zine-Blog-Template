import styles from './Layout.module.scss'
import Head from 'next/head'
import MasterJS from '@components/NecroCult/Layout/MasterJS/MasterJS'
import MasterCSS from'@components/NecroCult/Layout/MasterCSS/MasterCSS'
import DesktopNav from '@components/NecroCult/Navigation/DesktopNav/DesktopNav'
import MobileNav from '@components/NecroCult/Navigation/MobileNav/MobileNav'
import NavMenu from '@components/NecroCult/Navigation/NavMenu/NavMenu'
import Footer from '@components/NecroCult/Navigation/Footer/Footer'
import FilmGrainFilter from '@components/NecroCult/FilmGrainFilter/FilmGrainFilter'



export default function Layout({ 
	//props
	children
}) {
  return (
	<>
		<Head>
			<MasterCSS/>
		</Head>
		
		<FilmGrainFilter/>
		<div className={styles.OuterLayout}>
  			<NavMenu/>
  			<div className={styles.InnerLayout}>
  				<DesktopNav/>
	  			<MobileNav/>
				{children}
				<Footer/>
  			</div>
		</div>
		<MasterJS/>
	</>
  )
}
