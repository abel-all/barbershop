import Image from "next/image"
import logo from "@/public/logo-w.svg"
import linkedinIcon from "@/public/linkedin.svg"
import fbIcon from "@/public/fb.svg"
import instaIcon from "@/public/insta.svg"
import xIcon from "@/public/x.svg"

const socialMediaNav = [
  {icon : linkedinIcon},
  {icon : fbIcon},
  {icon : instaIcon},
  {icon : xIcon},
]

const Footer = () => {
  return (
    <div className="p-4 bg-foreground text-background flex max-sm:flex-col sm:justify-between gap-5">
      <div className="flex flex-col gap-2 max-w-60">
        <div className="flex gap-2 items-center">
          <Image src={logo} height={30} alt="barber shop"/>
          <span>by</span>
          <span className="font-bold">abdessamad</span>
        </div>
        <div className="">
          A good haircut is a small price to pay for a great day.
        </div>
        <ul className="flex gap-2 opacity-80">
          <li>© barber.com</li>
          <li>.</li>
          <li><a href="#">Terms</a></li>
          <li>.</li>
          <li><a href="#">Privacy</a></li>
        </ul>
      </div>
      <div className="flex flex-col  gap-4 sm:items-end">
        <div className="flex gap-4">
          {socialMediaNav.map(({ icon }, i) => (
            <a key={i} href="#"><Image src={icon} alt="barber shop" height={20}/></a>
          ))}
        </div>
        <div className="flex flex-col sm:items-end opacity-90">
          <div>1337 Khouribga</div>
          <div>contact@barber.com</div>
        </div>
      </div>
    </div>
  )
}

export default Footer