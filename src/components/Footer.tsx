import SVG from "react-inlinesvg";

const Footer = () => {
  const socials = [
    "facebook",
    "instagram",
    "linkedin",
    "x",
    "youtube",
    "tiktok",
    "reddit",
  ];

  const integrationPlatforms = [
    "Shopify",
    "Etsy",
    "Ebay",
    "Amazon",
    "Tiktok Shop",
  ];
  return (
    <footer>
      <div className="flex sm:mx-16 mx-8 mt-12 flex-col justify-between items-start gap-4 sm:flex-row">
        <a className="flex title-font font-medium items-center text-gray-900">
          <img
            src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
            alt="Logo"
            className="h-8"
          />
        </a>

        <div className="flex justify-center items-center gap-3 mr-16">
          {socials.map((item) => (
            <div className="flex justify-center items-center rounded-full bg-green-500 p-2">
              <SVG
                src={`/${item}.svg`}
                height="auto"
                title="React"
                className="text-white w-5 h-5"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 p-8 sm:mx-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-start gap-3"
          >
            <h3 className="font-bold text-lg mt-8">Integrations</h3>
            {integrationPlatforms.map((platform, index) => (
              <p key={index} className="text-gray-600">
                {platform}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="bg-gray-200 flex flex-col justify-center items-center gap-4 p-8">
        <div className="flex justify-center items-center flex-wrap gap-6 text-sm">
          <p className="text-gray-500">Intellectual Property Policy</p>
          <p className="text-gray-500">Terms of Service</p>
          <p className="text-gray-500">Privacy Policy</p>
          <p className="text-gray-500">Security</p>
        </div>
        <p className="text-sm">© 2024 Printify, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
