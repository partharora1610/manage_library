import Badges from "@/components/shared/Profile/Badges";
import IssueContainer from "@/components/shared/Profile/IssueContainer";
import ProfileHeader from "@/components/shared/Profile/ProfileHeader";
import React from "react";

const Page = async () => {
  // here we need to fetch the data of the user via the clerkId
  return (
    <div>
      <ProfileHeader />
      <Badges />
      <IssueContainer />
    </div>
  );
};

export default Page;
