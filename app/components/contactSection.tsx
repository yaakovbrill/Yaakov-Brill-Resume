import Link from "next/link";
import { FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactDetails = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      <hr className="w-1/2 border-gray-300 mb-4"/>
      <div className="flex space-x-4">
        <Link href="https://www.linkedin.com/in/yaakovbrill/" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center text-blue-600 hover:text-blue-800">
            <FaLinkedin className="mr-2" />
            LinkedIn
          </div>
        </Link>
        <Link href="tel:+270624139839">
          <div className="flex items-center text-green-600 hover:text-green-800">
            <FaPhone className="mr-2" />
            +27 0624139839
          </div>
        </Link>
        <Link href="mailto:yaakovbrill@gmail.com">
          <div className="flex items-center text-gray-600 hover:text-gray-800">
            <FaEnvelope className="mr-2" />
            yaakovbrill@gmail.com
          </div>
        </Link>
      </div>
    </div>
  )
}

export default function ContactSection() {
    return (
      <div className="text-center mt-8 text-gray-800">
        <h1 className="text-4xl font-bold">
          Yaakov Brill
        </h1>
        <ContactDetails/>
      </div>
    )
}
  