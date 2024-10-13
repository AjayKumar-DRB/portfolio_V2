const socialLinks = [
  {
    title:'LinkedIn',
    href:'https://www.linkedin.com/in/ajaykumardrb/',
  },
  {
    title:'Leetcode',
    href:'https://www.leetcode.com/u/AjayDRBKumar',
  },
  {
    title:'Instagram',
    href:'https://www.instagram.com/ajay_zero/',
  },
  {
    title:'Github',
    href:'https://github.com/AjayKumar-DRB',
  },
  
]


export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 -z-10 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024 All Rights Reserved</div>
          <nav className="flex flex-col md:flex-row items-center gap-8 z-10">
            {socialLinks.map(link => (
              <a href={link.href} key={link.title} target="_blank" className="inline-flex items-center gap-1.5 hover:text-emerald-300 transition duration-150" >
                <span className="font-semibold">{link.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
