function Footer() {
    return (
        <footer className="footer">
            <span>ckearney1992@gmail.com</span>
            <span>kearmododragon</span>
            <span>
                Last updated:{" "}
                {new Date(import.meta.env.VITE_LAST_UPDATED).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })}
            </span>
        </footer>
    );
}

export default Footer;