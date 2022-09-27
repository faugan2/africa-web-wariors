import React from 'react'
import {Link} from "react-router-dom";

export default function Footer() {
    const li_style="text-xs text-gray-500 hover:opacity-80 mt-1 flex items-center gap-1" 
    const h1_style="text-sm font-semibold text-gray-700";
    const div_style="p-2";
    const link_style="flex items-center gap-1"
  return (
    <div className=" bg-gray-100 w-full border-l-0 border-r-0 border-b-0">
        <div className=" flex justify-between">
        <div className={div_style}>
            <h1 className={h1_style}>Afriac Web Warriors</h1>
            <ul>
                <li className={li_style}><Link to="/page/name=apropos" className={link_style}>A Propos</Link></li>
                <li className={li_style}><Link to="/page/name=conditions-generales-vente" className={link_style}>Conditions Générale de Vente</Link></li>
                <li className={li_style}><Link to="/page/name=mention-legale" className={link_style}>Mention Légale</Link></li>
            </ul>
        </div>

        <div className={div_style}>
            <h1 className={h1_style}>Nos Formations</h1>
            <ul>
                <li className={li_style}><Link to="/page/name=formation" className={link_style}><ion-icon name="lock-closed-outline"></ion-icon>CyberSécurité (Hacking)</Link></li>
                <li className={li_style}><Link to="/page/name=seminaire" className={link_style}><ion-icon name="phone-portrait-outline"></ion-icon>Séminaires</Link></li>
                
            </ul>
        </div>
		
		 <div className={div_style}>
            <h1 className={h1_style}>Pour le hacking</h1>
            <ul>
                <li className={li_style}><Link to="/training/course=network" className={link_style}><ion-icon name="lock-closed-outline"></ion-icon>Réseaux</Link></li>
                <li className={li_style}><Link to="/training/course=linux" className={link_style}><ion-icon name="phone-portrait-outline"></ion-icon>Linux</Link></li>
				 <li className={li_style}><Link to="/training/course=bash-scripting" className={link_style}><ion-icon name="phone-portrait-outline"></ion-icon>Bach scripting</Link></li>
				 <li className={li_style}><Link to="/training/course=python-scripting" className={link_style}><ion-icon name="phone-portrait-outline"></ion-icon>Python scripting</Link></li>
                
            </ul>
        </div>
		

        <div className={div_style}>
            <h1 className={h1_style}>Nos Services</h1>
            <ul>
                <li className={li_style}><Link to="/page/name=a2w-academy" className={link_style}><ion-icon name="school-outline"></ion-icon>A2W Academy</Link></li>
                <li className={li_style}><Link to="/page/name=a2w-consulting" className={link_style}><ion-icon name="cube-outline"></ion-icon>A2W Consulting</Link></li>
                <li className={li_style}><Link to="/page/name=a2w-free-apps" className={link_style}><ion-icon name="code-slash-outline"></ion-icon>A2W Free Apps</Link></li>
            </ul>
        </div>


        <div className={div_style}>
            <h1 className={h1_style}>Contacts</h1>
            <ul>
                <li className={li_style}><Link to="" className={link_style}><ion-icon name="location-outline"></ion-icon>Lomé-Togo</Link></li>
                <li className={li_style}><Link to="" className={link_style}><ion-icon name="mail-outline"></ion-icon>support@a2w.com</Link></li>
                <li className={li_style}><Link to="" className={link_style}><ion-icon name="logo-whatsapp"></ion-icon>(+228) 91 56 75 90</Link></li>
            </ul>
        </div>
        </div>
        <div className="bg-gray-200 border border-l-0 border-r-0 border-b-0 flex items-center justify-center">
            <ol className="flex gap-4 mt-2">
                <li><a href="https://www.youtube.com/channel/UCEnTrb9DEATh3axyUHUr_9g" target="_blank" className=""><ion-icon name="logo-youtube" ></ion-icon></a></li>
                <li><a href="https://www.facebook.com/Africa-Web-Warriors-102450472431970" target="_blank" className=""><ion-icon name="logo-facebook" ></ion-icon></a></li>
                <li><a href="https://twitter.com/warriors_africa" target="_blank" className=""><ion-icon name="logo-twitter" ></ion-icon></a></li>
                <li><a href="https://www.linkedin.com/in/africa-web-warriors-689233236" target="_blank" className=""><ion-icon name="logo-linkedin" ></ion-icon></a></li>
                <li><a href="https://github.com/africawebwarriors" target="_blank" ><ion-icon name="logo-github" ></ion-icon></a></li>
            </ol>
        </div>
    </div>
  )
}
