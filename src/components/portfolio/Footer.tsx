const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Alamin Rafi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
