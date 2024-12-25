const AuthImagePattern = ({ title, subtitle, imageSrc }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        {/* Full Image */}
        <div className="rounded-2xl overflow-hidden mb-8">
          <img
            src="/AuthImg.jpg"
            alt="Auth Illustration"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Section */}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
