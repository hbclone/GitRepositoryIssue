import React, { useEffect, useState } from "react";
import { getAllRepositoryIssues } from "../api/GitApi";
import { Issues, Repository } from "../api/interface/git";
import IssueConfig from "../components/IssueConfig";
import IssueTable from "../components/IssueTable";
import { H2 } from "../components/Mui/Typography";
import PageHeader from "../components/PageHeader";

const Issue = () => {
  return (
    <div>
      <PageHeader pageTitle="Issues" />
      <IssueConfig />
      <IssueTable />
    </div>
  );
};

export default Issue;
