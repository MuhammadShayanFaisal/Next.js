
import pic from "@/app/public/pic.png"
import Image from 'next/image';
import Header from "@/components/header"
import Footer from "@/components/footer"
export default function Home(){
return(
       <div>
       <Header/>
       <div className="flex bg-stone-900 space-x-14 > * + *">
        <div className="font-sans font-semibold text-slate-400 w-2/4 pl-8 pb-8 pt-12 pr-8">👋 Hello! I'm Muhammad Shayan Faisal, a dedicated and enthusiastic front-end developer with a passion for crafting stunning and functional web experiences. As a student eager to start my professional journey, I have honed my skills in TypeScript, C, C++, and am familiar with Python basics. My expertise spans across HTML, CSS, and JavaScript, allowing me to create visually appealing and user-friendly interfaces. 🚀🎨 I am committed to continuous learning and growth, with a keen interest in modern web technologies and a foundational knowledge of SQL to enhance my backend skills. I thrive on combining creativity with technical expertise to deliver exceptional digital solutions. 🌟📝 Whether you're looking to build a dynamic website or need a fresh perspective on your project, I'm here to collaborate and bring innovative ideas to life. Let's make something amazing together! 🌐✨
        </div>
        <div className="w-1/3 h-2/5 pl-8 pb-8 pt-8 pr-8">
          <Image src={pic} alt='des'/>
        </div>
     </div>
     <Footer/>
     </div>
)
}
