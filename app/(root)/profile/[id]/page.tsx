import Badges from "@/components/shared/Profile/Badges";
import IssueContainer from "@/components/shared/Profile/IssueContainer";
import ProfileHeader from "@/components/shared/Profile/ProfileHeader";
import { getIssues } from "@/lib/actions/issue.action";
import { get } from "http";
import React, { use } from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const issues = await getIssues({ userId: params.id });

  console.log(issues);

  return (
    <div>
      <ProfileHeader />
      <Badges />
      <IssueContainer />
    </div>
  );
};

export default Page;
