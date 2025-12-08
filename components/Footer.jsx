import { Facebook, Instagram, X, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full flex justify-center gap-4 p-4">
      <div className="bg-slate-800 p-2 rounded-full">
        {" "}
        <Facebook className="cursor-pointer text-white hover:text-blue-600" />
      </div>
      <div className="bg-slate-800 p-2 rounded-full">
        {" "}
        <Instagram className="cursor-pointer text-white hover:text-pink-600" />
      </div>
      <div className="bg-slate-800 p-2 rounded-full">
        {" "}
        <X className="cursor-pointer text-white hover:text-gray-950" />
      </div>
      <div className="bg-slate-800 p-2 rounded-full">
        {" "}
        <Linkedin className="cursor-pointer text-white hover:text-blue-700" />
      </div>
    </div>
  );
};

export default Footer;
