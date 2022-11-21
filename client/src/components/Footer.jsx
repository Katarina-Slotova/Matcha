const Footer = () => {
	const year = new Date().getFullYear();
  
	return (
		<footer>
			{`Copyright © Alba & Kata ${year}`}
		</footer>
	)
}

export default Footer;