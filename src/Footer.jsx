import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Ailok TV.
        </p>
        <p className="text-sm mt-2">
          Halo ho Domin ❤️ husi <span className="font-semibold">Forsat Rmcf</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
