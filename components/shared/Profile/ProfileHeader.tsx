import Image from "next/image";
import React from "react";

const ProfileHeader = async () => {
  // get the data of the students here
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="h3-semibold mb-4">Profile Details</h2>
        <h3 className="base-regukar">Name of the Student</h3>
        <p className="base-regular text-gray-600">Scaler ID</p>
      </div>

      <div className="">
        <Image
          src="https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg"
          alt=""
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
