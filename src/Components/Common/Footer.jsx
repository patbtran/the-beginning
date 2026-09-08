function Footer(){
    return (
        <div className='bg-[#1a1616] flex justify-center text-white p-4 mt-4'>
           <p>&copy; 2026 cheesa. All rights reserved.</p>
        
           <div className="flex gap-6">
                    <a 
                        href="https://www.linkedin.com/in/patriciabtra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition"
                    >
                        LinkedIn
                    </a>

                    <a 
                        href="https://github.com/patbtran"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition"
                    >
                        GitHub
                    </a>

                    <a 
                        href="mailto:patrici9tran@gmail.com"
                        className="hover:text-gray-300 transition"
                    >
                        Email
                    </a>
                </div>
        </div>
        
    )

}

export default Footer;